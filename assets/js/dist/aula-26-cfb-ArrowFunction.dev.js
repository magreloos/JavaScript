"use strict";

//funçõe lambidas - ArrowFuction - ou função de Seta
var soma = function soma(v1, v2) {
  var res = v1 + v2;
  return res;
};

console.log("=============");
console.log("Soma: ", soma(10, 5));
console.log("=============");

var nome = function nome(n) {
  return n;
}; //quanod é um parametro não ha necessidade de colocar parenteses


console.log("Nome: ", nome("Bruno"));
console.log("=============");

var add = function add(n) {
  return n;
};

console.log("Saida: ", add(10));