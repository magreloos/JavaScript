"use strict";

var soma = function soma() {
  var somar = function somar(val) {
    var res = 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = val[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        v = _step.value;
        res += v;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return res;
  };

  for (var _len = arguments.length, valores = new Array(_len), _key = 0; _key < _len; _key++) {
    valores[_key] = arguments[_key];
  }

  return somar(valores);
};

console.log(soma(10, 5, 15));