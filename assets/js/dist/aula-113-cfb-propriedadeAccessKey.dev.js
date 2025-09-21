"use strict";

/** @format */
var q1 = document.getElementById("q1");
var q2 = document.getElementById("q2");
var posx = document.getElementById("posx");
var posy = document.getElementById("posy");
var largura = document.getElementById("largura");
var altura = document.getElementById("altura");
q1.accessKey = "b";
q2.accessKey = "n";
console.log("Q1.:".concat(q1.accessKey));
console.log("Q2.:".concat(q2.accessKey));

var info = function info(el) {
  var DOMRect_q = el.getBoundingClientRect();
  posx.innerHTML = "PosX.:".concat(DOMRect_q.x);
  posy.innerHTML = "PosY.:".concat(DOMRect_q.y);
  largura.innerHTML = "Largura.:".concat(DOMRect_q.width);
  altura.innerHTML = "Altura.:".concat(DOMRect_q.height);
};

q1.addEventListener("click", function (evt) {
  info(evt.target);
});
q2.addEventListener("click", function (evt) {
  info(evt.target);
});
console.log(q1.getBoundingClientRect());