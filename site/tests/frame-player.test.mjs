import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';
const source = ts.transpileModule(
  fs.readFileSync(new URL('../lib/frame-player.ts', import.meta.url), 'utf8'),
  {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
    },
  },
).outputText;
const settle = () => new Promise((r) => setTimeout(r, 30));
function setup({ fail = [], mobile = false } = {}) {
  const requests = [],
    draws = [],
    closed = [];
  let warnings = 0;
  const canvas = {
    width: 0,
    height: 0,
    dataset: {},
    style: {},
    getBoundingClientRect: () => ({
      width: mobile ? 390 : 1440,
      height: mobile ? 600 : 900,
    }),
    getContext: () => ({ drawImage: (img) => draws.push(img.id) }),
  };
  const context = {
    exports: {},
    console,
    Map,
    Set,
    Math,
    Promise,
    AbortController,
    window: { innerWidth: mobile ? 390 : 1440, devicePixelRatio: 3 },
    requestAnimationFrame: (cb) => setTimeout(cb, 0),
    cancelAnimationFrame: clearTimeout,
    fetch: async (url) => {
      const id = Number(url.match(/(\d+)$/)[1]);
      requests.push(url);
      return { ok: !fail.includes(id), blob: async () => ({ id }) };
    },
    createImageBitmap: async (b) => ({
      width: 1280,
      height: 720,
      id: b.id,
      close() {
        closed.push(this.id);
      },
    }),
  };
  vm.runInNewContext(source, context);
  const frames = Array.from({ length: 80 }, (_, i) => ({
    frame: i + 1,
    src: '/frame/' + i,
    mobile: '/mobile/' + i,
    time: i / 79,
    stage: 'test',
  }));
  const player = new context.exports.FramePlayer(
    canvas,
    frames,
    () => warnings++,
  );
  return { player, canvas, draws, closed, requests, warnings: () => warnings };
}

test('first load, forward and reverse scroll render exact target', async () => {
  const t = setup();
  await settle();
  assert.equal(t.canvas.dataset.frame, '1');
  t.player.request(1);
  await settle();
  assert.equal(t.canvas.dataset.frame, '80');
  t.player.request(0.25);
  await settle();
  assert.equal(t.canvas.dataset.frame, '21');
  assert.equal(t.canvas.width, 2880);
  t.player.destroy();
});
test('fast scroll does not decode stale destinations and decoded cache stays bounded', async () => {
  const t = setup();
  await settle();
  for (let i = 0; i < 80; i++) t.player.request(i / 79);
  await settle();
  assert.equal(t.canvas.dataset.frame, '80');
  for (let i = 0; i < 80; i += 5) {
    t.player.request(i / 79);
    await settle();
  }
  assert.ok(t.player.decoded.size <= 20);
  assert.ok(t.closed.length > 0);
  t.player.destroy();
  assert.equal(t.player.decoded.size, 0);
});
test('missing frame keeps a valid neighboring image and can recover', async () => {
  const t = setup({ fail: [40] });
  await settle();
  t.player.request(40 / 79);
  await settle();
  assert.notEqual(t.canvas.dataset.frame, '41');
  assert.ok(t.canvas.dataset.frame);
  t.player.request(1);
  await settle();
  assert.equal(t.canvas.dataset.frame, '80');
  t.player.destroy();
});
test('complete asset failure retains poster and reports fallback', async () => {
  const t = setup({ fail: Array.from({ length: 80 }, (_, i) => i) });
  await settle();
  assert.equal(t.canvas.style.opacity, undefined);
  assert.equal(t.warnings(), 1);
  t.player.destroy();
});
test('mobile uses smaller assets and a 12-image limit', async () => {
  const t = setup({ mobile: true });
  await settle();
  for (let i = 0; i < 80; i += 8) {
    t.player.request(i / 79);
    await settle();
  }
  assert.ok(t.requests.every((r) => r.startsWith('/mobile/')));
  assert.ok(t.player.decoded.size <= 12);
  t.player.destroy();
});
test('resize redraws even when scroll target is unchanged', async () => {
  const t = setup();
  await settle();
  const before = t.draws.length;
  t.player.resize();
  await settle();
  assert.ok(t.draws.length > before);
  assert.equal(t.canvas.dataset.frame, '1');
  t.player.destroy();
});
