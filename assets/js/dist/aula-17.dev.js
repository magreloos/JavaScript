"use strict";

var num = [10, 20, 30, 40, 50, 60];
var objs = document.getElementsByTagName("div"); // for (let i = 0; i < num.length; i++) {
//   console.log("Item: " + num[i]);
// }
// console.log("----------")
// for (n in num) {
//   console.log("For In Item: " + num[n]);
// }
// console.log("----------")
// for (n of num) {
//   console.log("For Of Item: " + n);
// }

for (o in objs) {
  console.log("For In Item: " + o);
}

console.log("=================================");
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = objs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    o = _step.value;
    console.log("For Of Item = ", o);
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