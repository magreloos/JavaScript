/** @format */

const p_array = document.querySelector("#array");
const btnReduzir = document.querySelector("#btnReduzir");
const resultado = document.querySelector("#resultado");

const elementos_array = [1, 2, 3, 4, 5];
//const elementos_array = ["CSS", "HTML", "JavaScript", "C++"];

let ant = [];
let atu = [];
let dobro = [];

p_array.innerHTML = "[" + elementos_array + "]";

btnReduzir.addEventListener("click", (evt) => {
	dobro.push(elementos_array[0] * 2);
	resultado.innerHTML = elementos_array.reduce((anterior, atual, posicao) => {
		ant.push(anterior);
		atu.push(atual);
		dobro.push(atual * 2);
		return atual + anterior;
	});
	resultado.innerHTML +=
		"<br/>V.Aterior: " + ant + "<br/>V. Atual: " + atu + "<br/>Dobro: " + dobro;
});
