"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var cursosTodos = _toConsumableArray(document.getElementsByClassName("curso"));

var cursosC1 = _toConsumableArray(document.getElementsByClassName("c1"));

var cursosC2 = _toConsumableArray(document.getElementsByClassName("c2"));

var cursoEspecial = document.getElementsByClassName("curso")[6];
console.log(cursosTodos);
console.log(cursosC1);
console.log(cursosC2);
console.log(cursoEspecial);
cursosC2.map(function (el) {
  el.classList.add("destaque");
});