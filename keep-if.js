const keepIf = Symbol();

Object.prototype[keepIf] = function (predicate) {
  return predicate(this) ? this : undefined;
};

export default keepIf;
