/** @format */

const caixaCursos = document.querySelector("#caixaCursos");
const btn_c = [...document.querySelectorAll(".curso")];
const c1_2 = document.querySelector("#c1_2");
const cursos = [
	"HTML",
	"CSS",
	"JavaScript",
	"PHP",
	"React",
	"Mysql",
	"ReactNative",
];
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado");
const btnRemoverCurso = document.getElementById("btnRemoverCurso");

cursos.map((el, chave) => {
	const novoElemento = document.createElement("div");
	novoElemento.setAttribute("id", "c" + chave);
	novoElemento.setAttribute("class", "curso c1");
	novoElemento.innerHTML = el;

	const comandos = document.createElement("div");
	comandos.setAttribute("class", "comandos");

	const rb = document.createElement("input");
	rb.setAttribute("type", "radio");
	rb.setAttribute("name", "rb_curso");

	comandos.appendChild(rb);
	novoElemento.appendChild(comandos);
	caixaCursos.appendChild(novoElemento);
});

const radioSelecionado = () => {
	const todosRadios = [...document.querySelectorAll("input[type=radio]")];
	let radioSelecionado = todosRadios.filter((ele, ind, arr) => {
		return ele.checked;
	});
	return radioSelecionado[0];
};

btnCursoSelecionado.addEventListener("click", (evt) => {
	try {
		const rs = radioSelecionado();
		const cursoSelecionado = rs.parentNode.previousSibling.textContent;

		alert("Curso Selecionado: " + cursoSelecionado);
	} catch {
		alert("Nenhum Curso Selecionado!!!");
	}
});
btnRemoverCurso.addEventListener("click", (evt) => {
	try {
		const rs = radioSelecionado();

		const cursoSelecionado = rs.parentNode.parentNode;

		alert("Curso Removido");
		cursoSelecionado.remove();
	} catch (e) {
		alert("Nenhum Curso Selecionado!!!");
	}
});
