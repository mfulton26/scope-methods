import assert from "node:assert/strict";
import { mock, test } from "node:test";
import { falsyValues, nonNullishValues, truthyValues } from "./.test-values.js";
import keepIf from "./keep-if.js";

test("calls predicate with this", { concurrency: true }, (t) => {
  for (const value of nonNullishValues) {
    t.test(`this=${String(value)}`, () => {
      const predicate = mock.fn();
      value[keepIf](predicate);
      const actual = predicate.mock.calls[0].arguments[0];
      assert.strictEqual(actual, value);
    });
  }
});

test("returns this if predicate is truthy", { concurrency: true }, (t) => {
  for (const value of nonNullishValues) {
    t.test(`this=${String(value)}`, { concurrency: true }, (t) => {
      for (const returnValue of truthyValues) {
        t.test(`returnValue=${String(returnValue)}`, () => {
          const predicate = mock.fn(() => returnValue);
          const actual = value[keepIf](predicate);
          assert.strictEqual(actual, value);
        });
      }
    });
  }
});

test("returns undefined if predicate is falsy", { concurrency: true }, (t) => {
  for (const value of nonNullishValues) {
    t.test(`this=${String(value)}`, () => {
      for (const returnValue of falsyValues) {
        t.test(`returnValue=${String(returnValue)}`, () => {
          const predicate = mock.fn(() => returnValue);
          const actual = value[keepIf](predicate);
          assert.strictEqual(actual, undefined);
        });
      }
    });
  }
});
