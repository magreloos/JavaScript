/** @format */
const numero = document.getElementById("numero");
const btnPromessa = document.getElementById("btnPromessa");
btnPromessa.addEventListener("click", () => {
	numero.innerHTML = "Processando...";
	promessa()
	.then((retorno) => {
		numero.innerHTML = retorno;
		numero.classList.remove("erro");
		numero.classList.add("ok");
	})
	.catch((retorno) => {
		numero.innerHTML = retorno;
		numero.classList.add("erro");
		numero.classList.remove("ok");
	});
	
});

const promessa = () => {
	let p = new Promise((resolve, reject) => {
		let resultado = Math.random() > 0.5;
		let tempo = 3000;
		console.log(resultado);

		setTimeout(() => {
			if (resultado) {
				resolve("TUDO CERTO");
			} else {
				reject("TUDO ERRADO");
			}
		}, tempo);
	});
	return p;
};

numero.innerHTML = "Aguardando...";
