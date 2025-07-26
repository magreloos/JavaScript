"use strict";

/** @format */
var p_array = document.querySelector("#array");
var btnVerificar = document.querySelector("#btnVerificar");
var resultado = document.querySelector("#resultado");
var elementos_array = [5, 14, 5, 112, 1, 5, 9, 7, 2, 5, 4, 3, 7, 5, 18]; //const elementos_array = ["CSS", "HTML", "JavaScript", "C++"];

p_array.innerHTML = "[" + elementos_array + "]";
btnVerificar.addEventListener("click", function (evt) {
  resultado.innerHTML = "Nenhum valor encontrado";
  var ret = elementos_array.every(function (e, i) {
    if (e > 14) {
      resultado.innerHTML = "".concat(i, "\xBA Posi\xE7\xE3o conforme");
    }

    return e <= 14;
  });

  if (ret) {
    resultado.innerHTML = "OK Array: [ ".concat(elementos_array, " ]");
  }

  console.log(ret);
});