"use strict";

//a função FLATMAP varre o array e tras uma lista do que necessitamos, neste caso somemente os numeros dos cartões.
var lista = [{
  nome: "João",
  idade: 10,
  cartoes: ["41528", "54243"]
}, {
  nome: "Jose",
  idade: 44,
  cartoes: ["94152", "25423"]
}, {
  nome: "Maira",
  idade: 33,
  cartoes: ["14152", "25423"]
}, {
  nome: "Joana",
  idade: 62,
  cartoes: ["41752", "54253"]
}, {
  nome: "Carmem",
  idade: 72,
  cartoes: ["49152", "54923"]
}, {
  nome: "Hernane",
  idade: 50,
  cartoes: ["41752", "54623"]
}, {
  nome: "Mauricio",
  idade: 51,
  cartoes: ["45152", "55523"]
}, {
  nome: "Gabriel",
  idade: 38,
  cartoes: ["41152", "54223"]
}, {
  nome: "Margarida",
  idade: 16,
  cartoes: ["41552", "542553"]
}, {
  nome: "Whashington",
  idade: 37,
  cartoes: ["41152", "52423"]
}];
var cartoes = lista.flatMap(function (cartao) {
  return cartao.cartoes;
});
console.log(cartoes); //mostra a lista de cartões

console.log(cartoes[0]); //mostra i cartão na possição [0] da lista

console.log(cartoes[40]); //mostra como inefinida, pois a posição na lista não exite