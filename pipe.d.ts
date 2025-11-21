declare const pipe: unique symbol;

declare global {
  interface Object {
    /** Executes a provided function with `this` value as its argument and returns its result. */
    [pipe]<T extends NonNullable<unknown>, U>(this: T, callbackfn: (value: T) => U): U;
  }
}

export default pipe;
