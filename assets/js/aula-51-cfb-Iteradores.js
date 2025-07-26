/** @format */
const valores = [8, 5, 2, 3, 6, 4, 7, 1, 3, 0, 9];
const it_valores = valores[Symbol.iterator]();
const texto = "YouTube";
const it_texto = texto[Symbol.iterator]();

console.log(texto);

console.log(it_texto.next());
console.log(it_texto.next());
console.log(it_texto.next());
console.log(it_texto.next());
console.log(it_texto.next());
console.log(it_texto.next());
console.log(it_texto.next());
console.log(it_texto.next());


//Coleções Iteraveis
//Arrays
//String
//Map
//Sets
