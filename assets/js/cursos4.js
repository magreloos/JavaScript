/** @format */
class Cursos {
	static cursos = [
		"JavaScript",
		"HTML",
		"CSS",
		"Arduino",
		"Raspberry",
		"C++",
		"Python",
		"Jva",
		"CSharp",
	];
	constructor() {}
	static getTodosCursos = () => {
		return this.cursos;
	};

	static getCurso = (i_curso) => {
		return this.cursos[i_curso];
	};
	static addCurso = (novoCurso) => {
		this.cursos.push(novoCurso);
	};
	static apagarCurso = () => {
		this.cursos.push = [];
	};
}

export default Cursos;
