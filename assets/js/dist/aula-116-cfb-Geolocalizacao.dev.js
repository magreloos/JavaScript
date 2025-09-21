"use strict";

/** @format */
var _long = document.getElementById("long");

var lati = document.getElementById("lati");

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(mostrarLocalizacao, erroLocalizacao);
} else {
  console.log("Geolocalização Desativada ou não suportada");
}

function mostrarLocalizacao(pos) {
  _long.innerHTML = "Longitude.: ".concat(pos.coords.longitude);
  lati.innerHTML = "Latitude....: ".concat(pos.coords.latitude);
}

function erroLocalizacao() {
  console.log("Erro ao obter a localizacao");
}