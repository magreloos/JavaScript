"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var v1 = 10;
var v2 = "10";
var v3 = v1 === v2;
var v4 = {
  nome: "paulo"
};
res = v4.nome;
console.log("Valor: " + v1 + " Tipo: " + _typeof(v1));
console.log("Valor: " + v2 + " Tipo: " + _typeof(v2));
console.log("Valor: " + v3 + " Tipo: " + _typeof(v3));
console.log("Valor: " + res + " Tipo: " + _typeof(v4));
console.log(res);