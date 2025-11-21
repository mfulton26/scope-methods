import assert from "node:assert/strict";
import { mock, test } from "node:test";
import testValues, { nonNullishValues } from "./.test-values.js";
import pipe from "./pipe.js";

test("calls callback with this", { concurrency: true }, (t) => {
  for (const value of nonNullishValues) {
    t.test(`this=${String(value)}`, () => {
      const callbackfn = mock.fn();
      value[pipe](callbackfn);
      const actual = callbackfn.mock.calls[0].arguments[0];
      assert.strictEqual(actual, value);
    });
  }
});

test("returns callback's return value", { concurrency: true }, (t) => {
  for (const value of nonNullishValues) {
    t.test(`this=${String(value)}`, { concurrency: true }, (t) => {
      for (const expected of testValues) {
        t.test(`returnValue=${String(expected)}`, () => {
          const callbackfn = mock.fn(() => expected);
          const actual = value[pipe](callbackfn);
          assert.strictEqual(actual, expected);
        });
      }
    });
  }
});
