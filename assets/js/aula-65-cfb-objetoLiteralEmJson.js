/** @format */

const pessoa = {
	nome: "Paulo",
	canal: "OcaDoOgro",
	curso: "JavaScript",
	aulas: {
		aula01: "Introdução",
		aula02: "Variáveis",
		aula03: "Condicional",
	},
};

const stringPessoa = `{"nome":"Paulo","canal":"OcaDoOgro","curso":"JavaScript","aulas":{"aula01":"Introdução","aula02":"Variáveis","aula03":"Condicional"}}`;

const sJsonPessoa = JSON.stringify(pessoa); //Convert OBJETO LITERAL EM JSON
const oJsonPessoa = JSON.parse(stringPessoa); //Convert JSON EM OBJETO LITERAL

console.log(pessoa);

console.log(sJsonPessoa);
console.log(oJsonPessoa);
