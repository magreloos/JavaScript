/** @format */

const fNome = document.querySelector("#fNome");
const fNota = document.querySelector("#fNota");
const fMsg = document.querySelector("#fMsg");

document.querySelector("#btnValidar").addEventListener("click", (evt) => {
	// let msg = null;
	// if (!fNota.checkValidity()) {
	// 	msg = fNota.validationMessage;//mesnagem padrao
	// }
	let estadoValidacao = fNota.validity;

	if (estadoValidacao.valueMissing) {
		fNota.setCustomValidity("Campo Obrigátorio!");
	} else if (estadoValidacao.rangeOverflow) {
		fNota.setCustomValidity("Nota invalida, valor acima do padrao");
	}else if (estadoValidacao.rangeUnderflow) {
		fNota.setCustomValidity("Nota invalida, valor abaixo do padrao");
	}

	fNota.reportValidity();
	//fMsg.innerHTML = fNota.validationMessage;
	//fMsg.innerHTML = msg;
	evt.preventDefault();
});
