const pipe = Symbol();

Object.prototype[pipe] = function (callbackfn) {
  return callbackfn(this);
};

export default pipe;
