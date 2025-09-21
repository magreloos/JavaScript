"use strict";

/** @format */
var carro = document.getElementById("carro");
var btn_parar = document.getElementById("btn_parar");
var btn_esquerda = document.getElementById("btn_esquerda");
var btn_direita = document.getElementById("btn_direita");

var init = function init() {
  carro.style = "position:relative;left:0px;width:100px";
  tamMax = window.innerWidth - parseInt(carro.style.width);
};

var anima = null;
var tamMax = null;

var move = function move(dir) {
  if (dir > 0) {
    if (parseInt(carro.style.left) <= tamMax) {
      carro.style.left = parseInt(carro.style.left) + 10 * dir + "px";
      anima = setTimeout(move, 20, dir);
    } else {
      clearTimeout(anima);
    }
  } else if (dir < 0) {
    if (parseInt(carro.style.left) >= 0) {
      carro.style.left = parseInt(carro.style.left) + 10 * dir + "px";
      anima = setTimeout(move, 20, dir);
    } else {
      clearTimeout(anima);
    }
  }

  console.log(tamMax);
};

btn_parar.addEventListener("click", function () {
  clearTimeout(anima);
});
btn_esquerda.addEventListener("click", function () {
  clearTimeout(anima);
  move(-1);
});
btn_direita.addEventListener("click", function () {
  clearTimeout(anima);
  move(1);
}); //window.onload = init;

window.addEventListener("load", init());
window.addEventListener("resize", function () {
  tamMax = window.innerWidth - parseInt(carro.style.width);
});