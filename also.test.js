import assert from "node:assert/strict";
import { mock, test } from "node:test";
import { nonNullishValues } from "./.test-values.js";
import also from "./also.js";

test("also: calls callback with this", { concurrency: true }, (t) => {
  for (const value of nonNullishValues) {
    t.test(`this=${String(value)}`, () => {
      const callbackfn = mock.fn();
      value[also](callbackfn);
      const actual = callbackfn.mock.calls[0].arguments[0];
      assert.strictEqual(actual, value);
    });
  }
});

test("returns this", { concurrency: true }, (t) => {
  for (const value of nonNullishValues) {
    t.test(`this=${String(value)}`, () => {
      const actual = value[also](mock.fn());
      assert.strictEqual(actual, value);
    });
  }
});
