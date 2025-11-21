declare const also: unique symbol;

declare global {
  interface Object {
    /** Executes a provided function with `this` as its argument and returns `this` value. */
    [also]<T extends NonNullable<unknown>>(this: T, callbackfn: (value: T) => void): T;
  }
}

export default also;
