/** @format */

const p_array = document.querySelector("#array");
const btnVerificar = document.querySelector("#btnVerificar");
const resultado = document.querySelector("#resultado");

const elementos_array = [5, 14, 5, 112, 1, 5, 9, 7, 2, 5, 4, 3, 7, 5, 18];
//const elementos_array = ["CSS", "HTML", "JavaScript", "C++"];

p_array.innerHTML = "[" + elementos_array + "]";

btnVerificar.addEventListener("click", (evt) => {
	resultado.innerHTML = "Nenhum valor encontrado";
	const ret = elementos_array.every((e, i) => {
		if (e > 14) {
			resultado.innerHTML = `${i}º Posição conforme`;
		}
		return e <= 14;
	});
	if (ret) {
		resultado.innerHTML = `OK Array: [ ${elementos_array} ]`;
	}

	console.log(ret);
});
