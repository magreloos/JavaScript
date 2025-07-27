"use strict";

/** @format */
var btn_soma = document.querySelector("#btn_soma");
var btn_subtracao = document.querySelector("#btn_subtracao");
var btn_multiplicacao = document.querySelector("#btn_multiplicacao");
var btn_divisao = document.querySelector("#btn_divisao");
var res = document.querySelector("#res");
var op = [function () {
  var val = [document.getElementById("valor1").value, document.getElementById("valor2").value];
  res.value = Number(val[0]) + Number(val[1]);
}, function () {
  var val = [document.getElementById("valor1").value, document.getElementById("valor2").value];
  res.value = Number(val[0]) - Number(val[1]);
}, function () {
  var val = [document.getElementById("valor1").value, document.getElementById("valor2").value];
  res.value = Number(val[0]) * Number(val[1]);
}, function () {
  var val = [document.getElementById("valor1").value, document.getElementById("valor2").value];
  res.value = Number(val[0]) / Number(val[1]);
}];