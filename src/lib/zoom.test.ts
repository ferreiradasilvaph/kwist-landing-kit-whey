import { test } from "node:test";
import assert from "node:assert/strict";
import { origemZoom } from "./zoom.ts";

test("cursor no centro da imagem gera origem 50% / 50%", () => {
  assert.deepEqual(origemZoom(200, 100, 400, 200), { x: 50, y: 50 });
});

test("cursor no canto superior esquerdo gera origem 0% / 0%", () => {
  assert.deepEqual(origemZoom(0, 0, 400, 200), { x: 0, y: 0 });
});

test("cursor fora da imagem é limitado a 0..100", () => {
  assert.deepEqual(origemZoom(-50, 300, 400, 200), { x: 0, y: 100 });
});

test("imagem sem dimensão não divide por zero", () => {
  assert.deepEqual(origemZoom(10, 10, 0, 0), { x: 50, y: 50 });
});
