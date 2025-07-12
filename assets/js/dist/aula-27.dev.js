"use strict";

var lista = [{
  nome: "João",
  idade: 10
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
}]; // for (let i = 0; i < lista.length; i++) {
//   console.log(lista[i]);
// }

var soma = 0;
lista.forEach(function (objeto) {
  soma += objeto.idade;
});
console.log("Soma das Idades = ", soma);