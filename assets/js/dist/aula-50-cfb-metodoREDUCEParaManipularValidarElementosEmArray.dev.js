"use strict";

/** @format */
var p_array = document.querySelector("#array");
var btnReduzir = document.querySelector("#btnReduzir");
var resultado = document.querySelector("#resultado");
var elementos_array = [1, 2, 3, 4, 5]; //const elementos_array = ["CSS", "HTML", "JavaScript", "C++"];

var ant = [];
var atu = [];
var dobro = [];
p_array.innerHTML = "[" + elementos_array + "]";
btnReduzir.addEventListener("click", function (evt) {
  dobro.push(elementos_array[0] * 2);
  resultado.innerHTML = elementos_array.reduce(function (anterior, atual, posicao) {
    ant.push(anterior);
    atu.push(atual);
    dobro.push(atual * 2);
    return atual + anterior;
  });
  resultado.innerHTML += "<br/>V.Aterior: " + ant + "<br/>V. Atual: " + atu + "<br/>Dobro: " + dobro;
});