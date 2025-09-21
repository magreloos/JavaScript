/** @format */

let nome = String("TESTEEEEeeeee RRRRRREGEEEEX AULAEEEEEE 10/10/1975");
let email = "paulo@paulo.com.br";
let numero = "1,10,100,100";

console.log(nome);

console.log(nome.search(/0/i));

console.log(nome.match(/e/gi));

console.log(nome.replace(/[0-2|a-z]/gi, " B A AA"));

console.log(nome.match(/[et0x]/gi));

console.log(nome.match(/[a-z|0-9]/gi)); //retorna a faixa especificadas entre cochetes

//metacaracteres
console.log(nome.match(/\d/gi)); //retorna Numeros
console.log(nome.match(/\s/gi)); //retorna espaços
console.log(nome.match(/\bT/gi)); //retorna o caracter informado apos o metacaracter

//quantificadores
console.log(nome.match(/e+|r+/gi)); //+ mostra o caracter na sequencia encontrada não separando os mesmos
console.log(nome.match(/re*/gi)); //+ mostra os caracteres encontrados e a sequencia caso exita
console.log(numero);
console.log(numero.match(/10/gi));
console.log(numero.match(/10+/gi));
console.log(numero.match(/10*/gi));
console.log(numero.match(/10?/gi));
