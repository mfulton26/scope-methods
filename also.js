const also = Symbol();

Object.prototype[also] = function (callbackfn) {
  callbackfn(this);
  return this;
};

export default also;
