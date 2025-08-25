/** @format */
const cursos = [
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
const carros = [
	"Polo",
	"T-Cross",
	"Golf",
	"Onix",
	"Cruze",
	"Argo",
	"Cronos",
	"Cobalt",
	"Civic",
];
//modelo 01 de export default
// const getTodosCursos = () => {
// 	return cursos;
// };
export { cursos, carros };

//modelo 02 de export default
// function getTodosCursos() {
// 	return cursos;
//}

// modelo 03 de export default
export default function getTodosCursos() {
	return cursos;
} //export default indica qual a função padrao a ser exportada
