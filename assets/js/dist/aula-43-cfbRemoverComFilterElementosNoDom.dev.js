"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/** @format */
var caixaCursos = document.querySelector("#caixaCursos");

var btn_c = _toConsumableArray(document.querySelectorAll(".curso"));

var c1_2 = document.querySelector("#c1_2");
var cursos = ["HTML", "CSS", "JavaScript", "PHP", "React", "Mysql", "ReactNative"];
var btnCursoSelecionado = document.getElementById("btnCursoSelecionado");
cursos.map(function (el, chave) {
  var novoElemento = document.createElement("div");
  novoElemento.setAttribute("id", "c" + chave);
  novoElemento.setAttribute("class", "curso c1");
  novoElemento.innerHTML = el;
  var comandos = document.createElement("div");
  comandos.setAttribute("class", "comandos");
  var rb = document.createElement("input");
  rb.setAttribute("type", "radio");
  rb.setAttribute("name", "rb_curso");
  comandos.appendChild(rb);
  novoElemento.appendChild(comandos);
  caixaCursos.appendChild(novoElemento);
});
btnCursoSelecionado.addEventListener("click", function (evt) {
  var todosRadios = _toConsumableArray(document.querySelectorAll("input[type=radio]"));

  try {
    var radioSelecionado = todosRadios.filter(function (ele, ind, arr) {
      return ele.checked;
    });
    radioSelecionado = radioSelecionado[0];
    var cursoSelecionado = // radioSelecionado.parentNode.parentNode.firstChild.textContent;
    radioSelecionado.parentNode.previousSibling.textContent; // console.log(todosRadios);
    // console.log(radioSelecionado);
    // console.log(cursoSelecionado);

    alert("Curso Selecionado: " + cursoSelecionado);
  } catch (_unused) {
    alert("NENHUM Curso Selecionado!!!");
  }
});