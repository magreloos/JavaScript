/** @format */

const caixa1 = document.querySelector("#caixa1");
const btn_c = [...document.querySelectorAll(".curso")];
const c1_2 = document.querySelector("#c1_2");
const cursos = [
	"HTML",
	"CSS",
	"JavaScript",
	"PHP",
	"React",
	"Myslq",
	"REactNative",
	"C#",
    "PhotoShop"
];
cursos.map((el, chave) => {
	const novoElemento = document.createElement("div");
	novoElemento.setAttribute("id", "c"+(chave+1));
	novoElemento.setAttribute("class", "curso c1");
	novoElemento.innerHTML = el;
	caixa1.appendChild(novoElemento);
});
