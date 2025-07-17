"use strict";

function aluno(nome, nota) {
  this.nome = nome;
  this.noto = nota;

  this.dados_anonimos = function () {
    setTimeout(function () {
      //o setTimeout cria uma nova instacia e não busca os dados fora do escopo
      //para contornar esta questão basta usar array Function
      console.log(this.nome);
      console.log(this.noto);
    }, 2000);
  };

  this.dados_arrow = function () {
    var _this = this;

    setTimeout(function () {
      /*o setTimeout cria uma nova instacia e não busca os dados fora do escopo
      para contornar esta questão basta usar arrow Function, ELE NÃO USA O CONTEXTO GERADO PELO SETTIMEOUT
       ELE USA O CONTEXTO DO PAI - DA FUNÇÃO ALUNO*/
      console.log(_this.nome);
      console.log(_this.noto);
    }, 1000);
  };
}

var aluno1 = new aluno("paulo", 100);
aluno1.dados_anonimos();
console.log("===========");
aluno1.dados_arrow();