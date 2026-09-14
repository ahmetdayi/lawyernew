'use client';
import { useEffect, useRef } from 'react';
import { FramePlayer, type Frame } from '@/lib/frame-player';
const clamp = (n: number) => Math.max(0, Math.min(1, n));
export default function CinematicHero() {
  const root = useRef<HTMLElement>(null),
    canvas = useRef<HTMLCanvasElement>(null),
    finalCopy = useRef<HTMLDivElement>(null),
    opening = useRef<HTMLDivElement>(null),
    counter = useRef<HTMLSpanElement>(null),
    word = useRef<HTMLDivElement>(null),
    status = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    const el = root.current!,
      cv = canvas.current!,
      mq = matchMedia('(prefers-reduced-motion: reduce)');
    let player: FramePlayer | undefined,
      frames: Frame[] = [],
      disposed = false,
      raf = 0,
      top = 0,
      length = 1,
      reduced = mq.matches,
      mobile = innerWidth < 768;
    const abort = new AbortController();
    const failure = () => {
      if (status.current)
        status.current.textContent =
          'Görsel hikâye kısmen yüklenemedi. İçeriğe devam edebilirsiniz.';
    };
    const measure = () => {
      top = el.getBoundingClientRect().top + window.scrollY;
      length = Math.max(1, el.offsetHeight - window.innerHeight);
      player?.resize();
      update();
    };
    const update = () => {
      raf = 0;
      const p = clamp((window.scrollY - top) / length),
        t = clamp((p - 0.045) / 0.785);
      document.documentElement.classList.toggle(
        'scrolled',
        window.scrollY > 50,
      );
      if (!reduced) player?.request(t);
      const intro = reduced ? 0 : 1 - clamp((p - 0.025) / 0.1),
        final = reduced
          ? 1
          : clamp((p - 0.78) / 0.075) * (1 - clamp((p - 0.96) / 0.04));
      el.style.setProperty('--intro', String(intro));
      el.style.setProperty('--final', String(final));
      el.style.setProperty(
        '--transition',
        String(reduced ? 0 : clamp((p - 0.935) / 0.065)),
      );
      el.style.setProperty('--progress', String(p));
      if (opening.current) opening.current.inert = intro < 0.1;
      if (finalCopy.current) finalCopy.current.inert = final < 0.8;
      const stage =
        t < 0.2
          ? 1
          : t < 0.4
            ? 2
            : t < 0.66
              ? 3
              : t < 0.78
                ? 4
                : t < 0.89
                  ? 5
                  : 6;
      if (counter.current)
        counter.current.textContent = String(stage).padStart(2, '0');
      if (word.current) {
        let text = '',
          opacity = 0;
        for (const [a, b, label] of [
          [0.22, 0.32, 'Bilgi.'],
          [0.4, 0.51, 'Disiplin.'],
          [0.58, 0.7, 'Kararlılık.'],
        ] as const) {
          if (p >= a && p <= b && !reduced) {
            text = label;
            opacity = Math.min(clamp((p - a) / 0.025), clamp((b - p) / 0.025));
          }
        }
        word.current.textContent = text;
        word.current.style.opacity = String(opacity);
        word.current.style.clipPath = `inset(${(1 - opacity) * 100}% 0 0 0)`;
        word.current.style.transform = `translateY(${(1 - opacity) * 20}px)`;
      }
    };
    const scroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    const configure = () => {
      reduced = mq.matches;
      el.dataset.static = String(reduced);
      player?.destroy();
      player = undefined;
      const selected = mobile
        ? frames.filter(
            (f, i) =>
              i % 2 === 0 ||
              i === frames.length - 1 ||
              frames[i - 1]?.stage !== f.stage,
          )
        : frames;
      if (!reduced && selected.length)
        player = new FramePlayer(cv, selected, failure);
      measure();
    };
    const resizeWindow = () => {
      if (mobile !== innerWidth < 768) {
        mobile = innerWidth < 768;
        configure();
      } else measure();
    };
    finalCopy.current!.inert = true;
    void fetch('/frames/manifest.json', { signal: abort.signal })
      .then((r) => {
        if (!r.ok) throw Error('manifest');
        return r.json();
      })
      .then((all: unknown) => {
        if (disposed) return;
        if (
          !Array.isArray(all) ||
          !all.length ||
          all.some(
            (f) =>
              typeof f?.time !== 'number' ||
              typeof f?.src !== 'string' ||
              typeof f?.mobile !== 'string',
          )
        )
          throw Error('invalid manifest');
        frames = all as Frame[];
        configure();
      })
      .catch(() => {
        if (!disposed) {
          failure();
          el.dataset.static = 'true';
          reduced = true;
          measure();
        }
      });
    window.addEventListener('scroll', scroll, { passive: true });
    window.addEventListener('resize', resizeWindow);
    mq.addEventListener('change', configure);
    const resize = new ResizeObserver(measure);
    resize.observe(el);
    measure();
    return () => {
      disposed = true;
      abort.abort();
      cancelAnimationFrame(raf);
      player?.destroy();
      resize.disconnect();
      window.removeEventListener('scroll', scroll);
      window.removeEventListener('resize', resizeWindow);
      mq.removeEventListener('change', configure);
      document.documentElement.classList.remove('scrolled');
    };
  }, []);
  return (
    <section
      className="cinematic"
      ref={root}
      aria-label="Cübbeden temsile: bir duruşun hikâyesi"
    >
      <div className="cinematic-sticky">
        <div className="scene-image" />
        <canvas
          ref={canvas}
          className="sequence-canvas"
          aria-label="Arkası dönük avukat cübbesini giyer ve adalet terazisini kaldırır."
          role="img"
        />
        <div className="scene-shade" />
        <div className="hero-copy opening-copy" ref={opening}>
          <p className="eyebrow">
            <span className="gold-line" /> HUKUK · STRATEJİ · GÜVEN
          </p>
          <h1>
            Adalet tesadüfe
            <br />
            <em>bırakılmaz.</em>
          </h1>
        </div>
        <div className="story-word" ref={word} aria-hidden="true" />
        <div className="hero-copy final-copy" ref={finalCopy}>
          <p className="eyebrow">
            <span className="gold-line" /> AŞKIN HUKUK BÜROSU
          </p>
          <h2>
            Adalet için
            <br />
            <em>duruş.</em>
          </h2>
          <p className="final-description">
            Doğru zamanda, doğru adım doğru hukuk.
            <br />
            İlk adımdan itibaren güçlü temsil.
          </p>
          <div className="hero-actions">
            <a className="button-outline" href="#iletisim">
              Birlikte değerlendirelim <span>↗</span>
            </a>
            <a className="quiet-link" href="#uzmanlik">
              Çalışma Alanlarımız ↓
            </a>
          </div>
        </div>
        <div className="scene-transition" />
        <div className="scene-bottom">
          <a href="#hakkimizda" className="scroll-cue">
            <span className="scroll-line" />
            <span className="scroll-label">
              Hikâyeyi keşfetmek için kaydırın
            </span>
          </a>
          <span className="scene-count">
            <span ref={counter}>01</span> <b>/</b> 06
          </span>
          <span className="scene-note">HER ŞEY BİR DURUŞLA BAŞLAR.</span>
        </div>
        <div className="sequence-progress" />
        <p className="sequence-status" ref={status} role="status" />
      </div>
      <noscript>
        <style>
          {
            '.cinematic{height:100svh!important}.opening-copy{opacity:1!important}.final-copy{display:none!important}'
          }
        </style>
      </noscript>
    </section>
  );
}
