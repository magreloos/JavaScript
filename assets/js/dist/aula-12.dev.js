"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

//OPERADOR Spread - Espalhador tem a função de quebrar um array.
// ele quebra um conjunto de elementos e devolve elemento a elementos.
// let n1 = [10, 20, 30, 40, 50, 60];
// let n2 = [20, 30, 15];
// let n3 = [30, 22, 18];
// let n4;
// console.log("N1: ", n1);
// console.log("N2: ", n2);
// console.log("N3: ", n3);
// console.log("N4: ", n4);
// const jogador1 = { nome: "Jose", energia: 100, vidas: 10, magia: 200 };
// const jogador2 = { nome: "Marcio", energia: 100, vidas: 10, velocidade: 99 };
// const jogador3 = { ...jogador1, ...jogador2 };
// console.log(jogador3);
// const soma = (v1, v2, v3, v4) => {
//   return v1 + v2 + v3 + v4;
// };
// let valores = [1, 10, 5, 2];
var objs1 = document.getElementsByTagName("div");

var objs2 = _toConsumableArray(document.getElementsByTagName("div"));

objs2.forEach(function (element) {
  element.innerHTML.split;
  console.log(element);
});
console.log(objs1);
console.log(objs2);