/** @format */

let nome = String("TESTE REGEX AULA 105");

console.log(nome);

console.log(nome.search(/0/i));

console.log(nome.match(/e/gi));

console.log(nome.replace(/[0-2|a-z]/gi, " B A AA"));
