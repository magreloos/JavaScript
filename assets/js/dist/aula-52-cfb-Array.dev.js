"use strict";

/** @format */
var caixa = document.querySelector("#caixa");
var cores = ["Azul", "Verde", "Vermelho", ["claro", "escuto", "medio"]];
var cursos = ["HTML", "CSS", "JavaScript", cores]; //cursos[0] = "CShap"; //mudar o valor de um elemento de um array em tempo de execução
//cursos.push("C++"); //inserir elementos no FINAL arry
//cursos.unshift("Pyton"); //inserir elementos no INICIO arry
//cursos.shift("Pyton");//remove elementos do INICIO do array
//cursos.pop(); //remove elementos do FINAL do array

console.log(cursos[3][3][2]);
cursos.map(function (el) {
  var p = document.createElement("p");
  p.innerHTML = el;
  caixa.appendChild(p);
});
console.log("CURSOS ", cursos);