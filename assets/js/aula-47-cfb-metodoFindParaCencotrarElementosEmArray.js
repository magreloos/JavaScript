/** @format */

const p_array = document.querySelector("#array");
const txt_pesquisar = document.querySelector("#txt_pesquisar");
const btnPesquisar = document.querySelector("#btnPesquisar");
const resultado = document.querySelector("#resultado");

//const elementos_array = [5, 14, 5, 2, 1, 5, 9, 7, 2, 5, 4, 3, 7, 5, 38];
const elementos_array = ["CSS", "HTML", "JavaScript", "C++"];

p_array.innerHTML = "[" + elementos_array + "]";

btnPesquisar.addEventListener("click", (evt) => {
	resultado.innerHTML = "Nenhum valor encontrado";
	const ret = elementos_array.find((e, i) => {
		if (e.toLocaleUpperCase() === txt_pesquisar.value.toUpperCase()) {
			resultado.innerHTML = "Valor Encontrado: " + e + " na posição: " + i;
			return e;
		}
	});
});
