"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var caixa1 = document.querySelector("#caixa1");
var btn_c1 = document.querySelector("#c1");

var cursos = _toConsumableArray(document.querySelectorAll(".curso"));

caixa1.addEventListener("click", function (evt) {
  console.log("STOP");
});
cursos.map(function (el) {
  el.addEventListener("click", function (evt) {
    evt.stopPropagation();
  });
});