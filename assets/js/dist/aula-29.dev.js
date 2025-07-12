"use strict";

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
}]; //diferente do filter, ira retornar apenas um item

var novaPessoal = lista.find(function (pessoa) {
  return pessoa.nome === "Jose";
});
console.log(novaPessoal);