"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var caixa1 = document.querySelector("#caixa1");
var caixa2 = document.querySelector("#caixa2");
var btn = document.querySelector("#btn_copiar");

var todosCursos = _toConsumableArray(document.querySelectorAll(".curso"));

todosCursos.map(function (el) {
  el.addEventListener("click", function (evt) {
    var curso = evt.target;
    curso.classList.toggle("selecionado");
  });
});
btn.addEventListener("click", function () {
  var cursosSelecionados = _toConsumableArray(document.querySelectorAll(".selecionado"));

  console.log(cursosSelecionados);
  cursosSelecionados.map(function (el) {
    caixa2.appendChild(el);
  });
});