"use strict";

/** @format */
var carro = document.getElementById("carro");
var btn_parar = document.getElementById("btn_parar");
var btn_rodar = document.getElementById("btn_rodar");

var init = function init() {
  carro.style = "position:relative;left:0px;width:50px;height:40px";
  tamCarro = parseInt(carro.style.width);
  tamMax = window.innerWidth - tamCarro;
};

var anima = null;
var tamMax = null;
var tamCarro = null;
var dir = 0;
var veloc = 10;

var move = function move() {
  if (parseInt(carro.style.left) >= tamMax) {
    dir = -1;
  } else if (parseInt(carro.style.left) <= 0) {
    dir = 1;
  }

  carro.style.left = parseInt(carro.style.left) + 10 * dir + "px";
  anima = setTimeout(move, veloc);
};

btn_parar.addEventListener("click", function () {
  clearTimeout(anima);
});
btn_rodar.addEventListener("click", function () {
  clearTimeout(anima);
  move();
}); //window.onload = init;

window.addEventListener("load", init());
window.addEventListener("resize", function () {
  tamMax = window.innerWidth - parseInt(carro.style.width);
});
window.addEventListener("keydown", function (evt) {
  if (evt.code === "ArrowUp") {
    carro.style.width = parseInt(carro.style.width) + 10 + "px";
    carro.style.height = parseInt(carro.style.height) + 10 + "px";
  }

  if (evt.code === "ArrowDown") {
    carro.style.width = parseInt(carro.style.width) - 10 + "px";
    carro.style.height = parseInt(carro.style.height) - 10 + "px";
  }

  tamCarro = parseInt(carro.style.width);
  tamMax = window.innerWidth - tamCarro;
});
window.addEventListener("keydown", function (evt) {
  if (evt.code === "ArrowRight") {
    veloc--;
  }

  if (evt.code === "ArrowLeft") {
    veloc++;
  }

  tamCarro = parseInt(carro.style.width);
  tamMax = window.innerWidth - tamCarro;
});