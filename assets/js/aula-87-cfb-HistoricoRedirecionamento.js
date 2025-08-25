/** @format */
const url = document.getElementById("url");
const btn_url = document.getElementById("btn_url");

btn_url.addEventListener("click", () => {
	//window.location = "https://ocadoogro.com.br";
	//window.location.replace("https://ocadoogro.com.br"); //redireciona e remove a pagina anterior do historico
	//window.location.assign("https://ocadoogro.com.br"); //redireciona e e mantem a pagina anterior do historico
	//window.location.reload(); //atualiza a pagina atual
	//window.history.back();//volta para pagina anterior
	//window.history.forward();//vai para proxima pagina do historico se exitir
	//let pagina = window.history.length - 1; //variavel para indicar no historico para ser acessada
	//window.history.go(pagina); //navega entre as paginas
	//console.log(pagina); //mostra o tamanhho do historico
	window.location = url.value;
});
