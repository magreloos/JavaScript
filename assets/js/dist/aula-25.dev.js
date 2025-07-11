"use strict";

var jose = {
  idade: 35,
  peso: 80,
  nome: "Jose",
  sexo: "M",
  nacionalidade: "Brasileiro",
  endereco: "RUA 1",
  numero: 444,
  pais: "Brasil",
  filhos: true
};

var exibirInformacoes = function exibirInformacoes(pessoa, qualInformacao) {
  console.log("".concat(qualInformacao, " de ").concat(pessoa.nome, ": "), pessoa[qualInformacao]); //console.log(`Idade de ${pessoa.nome}: `, pessoa.idade);
  //console.log(`Endereço de ${pessoa.nome}: `, pessoa.endereco);
};

exibirInformacoes(jose, "sexo");