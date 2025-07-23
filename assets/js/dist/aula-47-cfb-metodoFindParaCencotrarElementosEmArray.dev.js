"use strict";

/** @format */
var p_array = document.querySelector("#array");
var txt_pesquisar = document.querySelector("#txt_pesquisar");
var btnPesquisar = document.querySelector("#btnPesquisar");
var resultado = document.querySelector("#resultado"); //const elementos_array = [5, 14, 5, 2, 1, 5, 9, 7, 2, 5, 4, 3, 7, 5, 38];

var elementos_array = ["CSS", "HTML", "JavaScript", "C++"];
p_array.innerHTML = "[" + elementos_array + "]";
btnPesquisar.addEventListener("click", function (evt) {
  resultado.innerHTML = "Nenhum valor encontrado";
  var ret = elementos_array.find(function (e, i) {
    if (e.toLocaleUpperCase() === txt_pesquisar.value.toUpperCase()) {
      resultado.innerHTML = "Valor Encontrado: " + e + " na posição: " + i;
      return e;
    }
  });
});