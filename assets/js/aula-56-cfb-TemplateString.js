/** @format */

const caixa = document.querySelector("#caixa");

// const curso = "JavaScript";
// const canal = "CFB Cursos";
// //const frase="Este é um curso "+curso+" do canal "+canal

// const frase = `Este é o curso de <br/>\n
// ${curso}
// do canal <br/>\n${canal}`;

carros = ["Polo", "Cobalt", "Carnival", "Sportege", "XC90", "RS6", "Acordd"];

let ul = `<ul>`;
carros.map((el) => {
	ul += `<li>${el}</li>`;
});
ul + `</ul>`;

caixa.innerHTML = ul;
