"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var dc1 = document.getElementById("c1");
var dc2 = document.getElementById("c2");
var dc3 = document.getElementById("c3");
var dc4 = document.getElementById("c4");
var dc5 = document.getElementById("c5");
var dc6 = document.getElementById("c6");
var arrayElementos = [dc1, dc2, dc3, dc4, dc5, dc6];

var colecaoHTML = _toConsumableArray(document.getElementsByTagName("div")); //Forma Reduzida

/*
para trabalhar uma coleção HTML como array é necessario fazer uma conversão espalhando [Spread](...)

*/


console.log(colecaoHTML);