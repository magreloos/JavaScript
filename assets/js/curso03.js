/** @format */

const cursos = [
	"JavaScript",
	"HTML",
	"CSS",
	"Arduino",
	"Raspberry",
	"C++",
	"Python",
	"Java",
	"CSharp",
];
export default function () {
	return cursos;
}

function getCurso(i_curso) {
	return cursos[i_curso];
}

export { cursos, getCurso };
