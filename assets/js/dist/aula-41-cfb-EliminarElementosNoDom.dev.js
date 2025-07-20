"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/** @format */
var caixa1 = document.querySelector("#caixa1");

var btn_c = _toConsumableArray(document.querySelectorAll(".curso"));

var c1_2 = document.querySelector("#c1_2");
var cursos = ["HTML", "CSS", "JavaScript", "PHP", "React", "Myslq", "REactNative", "C#", "PhotoShop"];
cursos.map(function (el, chave) {
  var novoElemento = document.createElement("div");
  novoElemento.setAttribute("id", "c" + (chave + 1));
  novoElemento.setAttribute("class", "curso c1");
  novoElemento.innerHTML = el;
  var btn_lixeira = document.createElement("img");
  btn_lixeira.setAttribute("src", "/assets/img/iconeLixeira.png");
  btn_lixeira.setAttribute("class", "btn_lixeira");
  btn_lixeira.addEventListener("click", function (evt) {
    caixa1.removeChild(evt.target.parentNode);
  });
  novoElemento.appendChild(btn_lixeira);
  caixa1.appendChild(novoElemento);
});