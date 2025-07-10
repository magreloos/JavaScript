"use strict";

var idade = 664;

var exibirIdade = function exibirIdade() {
  var idade = 44;
  console.log(idade);
};

var exibirExibirIdade = function exibirExibirIdade() {
  exibirIdade();
  console.log(idade);
};

exibirExibirIdade();