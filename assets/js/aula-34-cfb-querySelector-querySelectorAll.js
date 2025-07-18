/*const divTodas = [...document.getElementsByTagName("div")];
const cursosTodos = [...document.getElementsByClassName("curso")];
const cursosC1 = [...document.getElementsByClassName("c1")];
const cursosC2 = [...document.getElementsByClassName("c2")];
const cursoEspecial = document.getElementsByClassName("curso")[6];
const cursoEsp = document.getElementById("c1");*/

//const queryDivTodas = [...document.querySelectorAll("div,p")];
const queryDivTodas = [...document.querySelectorAll("div > p")];
const queryCursosTodos = [...document.querySelectorAll(".curso")];
const queryCursosC1 = [...document.querySelectorAll(".c1")];
const queryCursosC2 = [...document.querySelectorAll(".c2, p")];
//const queryCursoEsp = document.querySelectorAll("#c1");
const queryCursoEsp = document.querySelector("#c1");

console.log(queryDivTodas);
/*console.log(queryCursosC1);
console.log(queryCursosC2);
console.log(queryCursoEsp);*/

// console.log(divTodas);
// console.log(cursosTodos);
// console.log(cursosC1);
// console.log(cursosC2);
// console.log(cursoEspecial);
// console.log(cursoEsp);

// cursosC2.map((el) => {
//   el.classList.add("destaque");
// });
