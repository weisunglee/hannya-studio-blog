import assert from "node:assert/strict";
import { test } from "node:test";
import { createKeystaticImageFilename } from "./keystaticImageFilename.js";

test("creates timestamped image names with a random suffix and safe extension", () => {
  const filename = createKeystaticImageFilename("image.PNG", {
    now: new Date("2026-06-21T02:04:15"),
    random: () => 0.302,
  });

  assert.match(filename, /^20260621-020415-[a-z0-9]{4}\.png$/);
});

test("falls back to png when the original file has no extension", () => {
  const filename = createKeystaticImageFilename("image", {
    now: new Date("2026-06-21T02:04:15"),
    random: () => 0.5,
  });

  assert.match(filename, /^20260621-020415-[a-z0-9]{4}\.png$/);
});
