# scope-fns

A collection of Kotlin-inspired scope functions for JavaScript/TypeScript, implemented using safe module augmentation.
These functions enhance the readability and maintainability of your code by providing a more expressive way to work with
objects and values within specific scopes.

## Available Functions

- `pipe`: Executes a provided function with `this` value as its argument and returns its result.
- `also`: Executes a provided function with `this` value as its argument and returns `this` value.
- `keepIf`: Returns `this` value if it satisfies the given predicate or `undefined` if it does not.

## Usage

```js
import { also, keepIf, pipe } from "scope-fns";

({ a: 6, b: 7 })
  [also](console.log) // Logs: { a: 6, b: 7 }
  [pipe](({ a, b }) => (a * b))
  [keepIf]((value) => value > 15); // Returns: 42
```

Which is roughly equivalent to:

```js
const input = { a: 6, b: 7 };
console.log(input); // Logs: { a: 6, b: 7 }
const { a, b } = input;
const value = a * b;
value > 15 ? value : undefined; // Returns: 42
```

Note that with "scope-fns", the intermediate variables are avoided, leading to more concise and readable code.
