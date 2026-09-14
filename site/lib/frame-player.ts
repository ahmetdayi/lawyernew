export type Frame = {
  frame: number;
  src: string;
  mobile: string;
  stage: string;
  time: number;
};
type Drawable = ImageBitmap | HTMLImageElement;
const clamp = (v: number, min: number, max: number) =>
  Math.max(min, Math.min(max, v));

/** Compressed assets are prefetched separately from a bounded decoded-image cache. */
export class FramePlayer {
  private blobs = new Map<number, Blob>();
  private fetching = new Map<number, Promise<Blob | null>>();
  private decoded = new Map<number, Drawable>();
  private decoding = new Map<number, Promise<void>>();
  private failed = new Set<number>();
  private abort = new AbortController();
  private disposed = false;
  private desired = 0;
  private drawn = -1;
  private raf = 0;
  private active = 0;
  private queue: number[] = [];
  private width = 0;
  private height = 0;
  private mobile: boolean;
  private limit: number;
  constructor(
    private canvas: HTMLCanvasElement,
    private frames: Frame[],
    private onFailure: () => void,
  ) {
    this.mobile = window.innerWidth < 768;
    this.limit = this.mobile ? 12 : 20;
    this.resize();
    this.request(0);
    this.enqueue([
      0,
      frames.length - 1,
      ...Array.from({ length: 12 }, (_, i) => i + 1),
      ...frames.map((_, i) => i),
    ]);
  }
  private url(i: number) {
    return this.mobile ? this.frames[i].mobile : this.frames[i].src;
  }
  private async fetchFrame(i: number): Promise<Blob | null> {
    if (this.disposed || this.failed.has(i)) return null;
    const blob = this.blobs.get(i);
    if (blob) return blob;
    const existing = this.fetching.get(i);
    if (existing) return existing;
    const promise = (async () => {
      try {
        const res = await fetch(this.url(i), {
          signal: this.abort.signal,
          cache: 'force-cache',
        });
        if (!res.ok) throw Error('frame');
        const b = await res.blob();
        if (!this.disposed) this.blobs.set(i, b);
        return b;
      } catch {
        if (!this.disposed) {
          this.failed.add(i);
          if (this.failed.size === this.frames.length) this.onFailure();
        }
        return null;
      } finally {
        this.fetching.delete(i);
      }
    })();
    this.fetching.set(i, promise);
    return promise;
  }
  private enqueue(indices: number[]) {
    this.queue = [...new Set([...indices, ...this.queue])].filter(
      (i) =>
        i >= 0 &&
        i < this.frames.length &&
        !this.blobs.has(i) &&
        !this.failed.has(i),
    );
    this.pump();
  }
  private pump() {
    while (!this.disposed && this.active < 3 && this.queue.length) {
      const i = this.queue.shift()!;
      this.active++;
      void this.fetchFrame(i).finally(() => {
        this.active--;
        this.pump();
      });
    }
  }
  private async decode(i: number) {
    if (
      i < 0 ||
      i >= this.frames.length ||
      this.disposed ||
      this.decoded.has(i) ||
      this.failed.has(i)
    )
      return;
    if (this.decoding.has(i)) return this.decoding.get(i);
    const promise = (async () => {
      const blob = await this.fetchFrame(i);
      if (!blob || this.disposed || Math.abs(i - this.desired) > 8) return;
      let drawable: Drawable;
      try {
        try {
          drawable = await createImageBitmap(blob);
        } catch {
          drawable = await new Promise<HTMLImageElement>((resolve, reject) => {
            const img = new Image();
            const url = URL.createObjectURL(blob);
            img.onload = () => {
              URL.revokeObjectURL(url);
              resolve(img);
            };
            img.onerror = () => {
              URL.revokeObjectURL(url);
              reject(Error('decode'));
            };
            img.src = url;
          });
        }
        if (this.disposed) {
          if ('close' in drawable) drawable.close();
          return;
        }
        this.decoded.set(i, drawable);
        this.evict();
        this.schedule();
      } catch {
        this.failed.add(i);
        this.onFailure();
      }
    })();
    this.decoding.set(i, promise);
    await promise;
    this.decoding.delete(i);
  }
  private evict() {
    const farthest = [...this.decoded.keys()].sort(
      (a, b) => Math.abs(b - this.desired) - Math.abs(a - this.desired),
    );
    while (this.decoded.size > this.limit) {
      const i = farthest.shift()!;
      const item = this.decoded.get(i);
      if (item && 'close' in item) item.close();
      this.decoded.delete(i);
    }
  }
  request(time: number) {
    let lo = 0,
      hi = this.frames.length - 1;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (this.frames[mid].time < time) lo = mid + 1;
      else hi = mid;
    }
    const prev = Math.max(0, lo - 1);
    this.desired =
      Math.abs(this.frames[prev].time - time) <
      Math.abs(this.frames[lo].time - time)
        ? prev
        : lo;
    const nearby = [
      this.desired,
      this.desired + 1,
      this.desired - 1,
      this.desired + 2,
      this.desired - 2,
    ];
    this.enqueue(nearby);
    // Drop speculative decodes during a rapid scroll; decode the destination first.
    const requested = this.desired;
    void this.decode(requested).then(() => {
      if (
        !this.disposed &&
        requested === this.desired &&
        this.decoding.size < 5
      )
        for (const i of nearby.slice(1)) void this.decode(i);
    });
    this.schedule();
  }
  resize() {
    const rect = this.canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.width = rect.width;
    this.height = rect.height;
    this.canvas.width = Math.round(rect.width * dpr);
    this.canvas.height = Math.round(rect.height * dpr);
    this.drawn = -1;
    this.schedule();
  }
  private schedule() {
    if (!this.raf && !this.disposed)
      this.raf = requestAnimationFrame(() => {
        this.raf = 0;
        this.draw();
      });
  }
  private draw() {
    if (this.disposed || !this.width || !this.height) return;
    const index = this.decoded.has(this.desired)
      ? this.desired
      : [...this.decoded.keys()].sort(
          (a, b) => Math.abs(a - this.desired) - Math.abs(b - this.desired),
        )[0];
    if (index === undefined || index === this.drawn) return;
    const img = this.decoded.get(index)!;
    const ctx = this.canvas.getContext('2d', { alpha: false });
    if (!ctx) return;
    const w = this.canvas.width,
      h = this.canvas.height,
      scale = Math.max(w / img.width, h / img.height);
    const focal = window.innerWidth < 768 ? 0.56 : 0.55;
    const x = clamp(
      w * 0.5 - img.width * scale * focal,
      w - img.width * scale,
      0,
    );
    ctx.drawImage(
      img,
      x,
      (h - img.height * scale) * 0.5,
      img.width * scale,
      img.height * scale,
    );
    this.drawn = index;
    this.canvas.dataset.frame = String(this.frames[index].frame);
    this.canvas.style.opacity = '1';
  }
  destroy() {
    this.disposed = true;
    this.abort.abort();
    cancelAnimationFrame(this.raf);
    for (const img of this.decoded.values()) if ('close' in img) img.close();
    this.decoded.clear();
    this.blobs.clear();
    this.queue = [];
  }
}
