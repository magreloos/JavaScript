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
const btbAdicionarNovoCursoAntes = document.getElementById(
	"btbAdicionarNovoCursoAntes"
);
const btbAdicionarNovoCursoDepois = document.getElementById(
	"btbAdicionarNovoCursoDepois"
);
const nomeCurso = document.getElementById("nomeCurso");

let indice = 0;

const tirarSelecao = () => {
	const cursosSelecionados = [...document.querySelectorAll(".selecionado")];
	cursosSelecionados.map((el) => {
		el.classList.remove("selecionado");
	});
};

const criarNovoCurso = (curso) => {
	const novoElemento = document.createElement("div");
	novoElemento.setAttribute("id", "c" + indice);
	novoElemento.setAttribute("class", "curso c1");
	novoElemento.innerHTML = curso;

	novoElemento.addEventListener("click", (evt) => {
		tirarSelecao();
		evt.target.classList.toggle("selecionado");
	});

	const comandos = document.createElement("div");
	comandos.setAttribute("class", "comandos");
	const rb = document.createElement("input");
	return novoElemento;
};

cursos.map((el, chave) => {
	const novoElemento = criarNovoCurso(el);
	caixaCursos.appendChild(novoElemento);
	indice++;
});

const cursoSelecionado = () => {
	const cursosSelecionados = [...document.querySelectorAll(".selecionado")];

	return cursosSelecionados[0];
};

btnCursoSelecionado.addEventListener("click", (evt) => {
	try {
		alert("Curso Selecionado: " + cursoSelecionado().innerHTML);
	} catch {
		alert("Nenhum Curso Selecionado!!!");
	}
});
btnRemoverCurso.addEventListener("click", (evt) => {
	const cs = cursoSelecionado();
	if (cs != undefined) {
		cs.remove();
	} else {
		alert("Nenhum Curso Selecionado!!!");
	}
});

btbAdicionarNovoCursoAntes.addEventListener("click", (evt) => {
	try {
		if (nomeCurso.value != 0) {
			const novoCurso = criarNovoCurso(nomeCurso.value);
			caixaCursos.insertBefore(novoCurso, cursoSelecionado());
		} else {
			alert("Digite o Nome do Curos!!");
		}
	} catch {
		alert("Nenhum Curso Selecionado!!!");
	}
});

btbAdicionarNovoCursoDepois.addEventListener("click", (evt) => {
	try {
		if (nomeCurso.value != 0) {
			const novoCurso = criarNovoCurso(nomeCurso.value);
			caixaCursos.insertBefore(novoCurso, cursoSelecionado().nextSibling);
		} else {
			alert("Digite o Nome do Curos!!");
		}
	} catch {
		alert("Nenhum Curso Selecionado!!!");
	}
});
