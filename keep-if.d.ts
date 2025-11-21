declare const keepIf: unique symbol;

declare global {
  interface Object {
    /** Returns `this` value if it satisfies the given predicate or `undefined` if it does not. */
    [keepIf]<T extends NonNullable<unknown>>(this: T, predicate: (value: T) => unknown): T | undefined;
  }
}

export default keepIf;
