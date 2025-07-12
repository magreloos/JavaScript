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
}];

var filtrarNome = function filtrarNome(pessoa) {
  return pessoa.nome === "Jose";
};

var filtrarPessoa = function filtrarPessoa(pessoa) {
  return pessoa.idade > 50;
}; //funções anonimas - quando ocorre erro fica dificil de verificar onde está o erro


var listaFiltrada1 = lista.filter(function (pessoa) {
  return !!pessoa.exibir;
}); //os pontos de exclamação serve para negar uma condição
//const listaFiltrada = lista.filter((pessoa) => pessoa.idade < 20);

var listaFiltrada = lista.filter(filtrarPessoa);
var filtradaNome = lista.filter(filtrarNome);
console.log(lista);
console.log(listaFiltrada);
console.log(listaFiltrada1);
console.log(filtradaNome);