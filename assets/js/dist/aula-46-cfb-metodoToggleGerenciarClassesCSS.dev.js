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
var btnRemoverCurso = document.getElementById("btnRemoverCurso");
var btbAdicionarNovoCursoAntes = document.getElementById("btbAdicionarNovoCursoAntes");
var btbAdicionarNovoCursoDepois = document.getElementById("btbAdicionarNovoCursoDepois");
var nomeCurso = document.getElementById("nomeCurso");
var indice = 0;

var tirarSelecao = function tirarSelecao() {
  var cursosSelecionados = _toConsumableArray(document.querySelectorAll(".selecionado"));

  cursosSelecionados.map(function (el) {
    el.classList.remove("selecionado");
  });
};

var criarNovoCurso = function criarNovoCurso(curso) {
  var novoElemento = document.createElement("div");
  novoElemento.setAttribute("id", "c" + indice);
  novoElemento.setAttribute("class", "curso c1");
  novoElemento.innerHTML = curso;
  novoElemento.addEventListener("click", function (evt) {
    tirarSelecao();
    evt.target.classList.toggle("selecionado");
  });
  var comandos = document.createElement("div");
  comandos.setAttribute("class", "comandos");
  var rb = document.createElement("input");
  return novoElemento;
};

cursos.map(function (el, chave) {
  var novoElemento = criarNovoCurso(el);
  caixaCursos.appendChild(novoElemento);
  indice++;
});

var cursoSelecionado = function cursoSelecionado() {
  var cursosSelecionados = _toConsumableArray(document.querySelectorAll(".selecionado"));

  return cursosSelecionados[0];
};

btnCursoSelecionado.addEventListener("click", function (evt) {
  try {
    alert("Curso Selecionado: " + cursoSelecionado().innerHTML);
  } catch (_unused) {
    alert("Nenhum Curso Selecionado!!!");
  }
});
btnRemoverCurso.addEventListener("click", function (evt) {
  var cs = cursoSelecionado();

  if (cs != undefined) {
    cs.remove();
  } else {
    alert("Nenhum Curso Selecionado!!!");
  }
});
btbAdicionarNovoCursoAntes.addEventListener("click", function (evt) {
  try {
    if (nomeCurso.value != 0) {
      var novoCurso = criarNovoCurso(nomeCurso.value);
      caixaCursos.insertBefore(novoCurso, cursoSelecionado());
    } else {
      alert("Digite o Nome do Curos!!");
    }
  } catch (_unused2) {
    alert("Nenhum Curso Selecionado!!!");
  }
});
btbAdicionarNovoCursoDepois.addEventListener("click", function (evt) {
  try {
    if (nomeCurso.value != 0) {
      var novoCurso = criarNovoCurso(nomeCurso.value);
      caixaCursos.insertBefore(novoCurso, cursoSelecionado().nextSibling);
    } else {
      alert("Digite o Nome do Curos!!");
    }
  } catch (_unused3) {
    alert("Nenhum Curso Selecionado!!!");
  }
});