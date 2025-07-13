"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//reduce é utilizado para reduzir um array em algum tipo de dado, que pode
//ser uma string, um numero, um objeto literal ou até mesmo outro array. ao contrario do map e filter o reduce pode gerar uma saida que não seja um array
var lista = [{
  nome: "João",
  idade: 10,
  exibir: true
}, {
  nome: "Jose",
  idade: 44
}, {
  nome: "Maira",
  idade: 33
}, {
  nome: "Joana",
  idade: 62
}, {
  nome: "Carmem",
  idade: 72
}, {
  nome: "Hernane",
  idade: 50
}, {
  nome: "Mauricio",
  idade: 51
}, {
  nome: "Gabriel",
  idade: 38
}, {
  nome: "Margarida",
  idade: 16
}, {
  nome: "Whashington",
  idade: 37
}];
var sum = lista.reduce(function (acumulador, objeto) {
  return acumulador + objeto.idade;
}, 0); //reduce somando as idades da lista de pessoas

var pessoas = lista.reduce(function (acc, objeto) {
  return _objectSpread({}, acc, _defineProperty({}, objeto.nome, {
    idade: objeto.idade
  }));
}, {}); //reduce criando um novo array

console.log(pessoas);
console.log("soma das idades: ".concat(sum));
console.log(lista);