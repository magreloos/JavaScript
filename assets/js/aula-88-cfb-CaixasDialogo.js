/** @format */
const btn_alert = document.getElementById("btn_alert");
const btn_confirm = document.getElementById("btn_confirm");
const btn_prompt = document.getElementById("btn_prompt");

btn_alert.addEventListener("click", () => {
	alert("TESTE");
});
btn_confirm.addEventListener("click", () => {
	const retorno = confirm("Deseja Executar algo?");
	if (retorno) {
		console.log("Confirme Pressionado");
	} else {
		console.log("Cancela Pressionado");
	}
});
btn_prompt.addEventListener("click", () => {
	const nome = prompt("Digite algo!");
	if (nome == null) {
		console.log("Botão CANCELAR pressionado!");
	} else {
		console.log("Nome: ", nome);
	}
});
