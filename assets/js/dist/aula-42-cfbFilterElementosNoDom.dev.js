"use strict";

/** @format */
var idades = [15, 16, 17, 18, 17, 39, 45, 88, 66, 37, 8, 98, 48, 65, 74, 80, 10];
var maior = idades.filter(function (valor, indice, arr) {
  if (valor >= 18) {
    return valor;
  }
});
var menor = idades.filter(function (valor, indice, arr) {
  if (valor < 18) {
    return valor;
  }
});
console.log(idades);
console.log(maior);
console.log(menor);