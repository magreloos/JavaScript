/** @format */
let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];

let [a, b, c, d, e, f, ...g] = numeros;

let obj = { nome: "Paulo", canal: "OcadoOgro", curso: "JavaScript" };
let { nome, canal } = obj;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

console.log(numeros);

console.log(nome);
console.log(canal);

const cores = () => {
	return ["verde", "amarelo", "azul", "branco"];
};

let [c1, c2, , c3, c4] = cores();
console.log(c1);
console.log(c2);
console.log(c3);

let texto = "Curso de JavaScript";
let [...t] = texto.split(" ");
let [p1, p2, p3] = texto.split(" ");
console.log(t);
console.log("------------------------");
console.log(p1);
console.log(p2);
console.log(p3);
