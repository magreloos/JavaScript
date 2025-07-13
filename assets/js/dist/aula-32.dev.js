"use strict";

//a função sort é utilizada para ordernar uma lista sem mudar o objeto
var lista = [{
  nome: "João",
  idade: 10,
  exibir: true
}, {
  nome: "Jose",
  idade: 44
}, {
  nome: "Maira",
  idade: 33
}, {
  nome: "Joana",
  idade: 62
}, {
  nome: "Carmem",
  idade: 72
}, {
  nome: "Hernane",
  idade: 50
}, {
  nome: "Mauricio",
  idade: 51
}, {
  nome: "Gabriel",
  idade: 38
}, {
  nome: "Margarida",
  idade: 16
}, {
  nome: "Whashington",
  idade: 37
}]; // const sum = lista.reduce((acumulador, objeto) => acumulador + objeto.idade, 0); //reduce somando as idades da lista de pessoas
// const pessoas = lista.reduce((acc, objeto) => {
//   return {
//     ...acc,
//     [objeto.nome]: {
//       idade: objeto.idade,
//     },
//   };
// }, {}); //reduce criando um novo array
// const chaves = Object.keys(pessoas);
// console.log(pessoas);
// console.log(chaves);
// console.log(`soma das idades: ${sum}`);
// console.log(Object.keys(lista[0]));
// const listaDeVolta = chaves.map((chave) => ({
//   nome: chave,
//   idade: pessoas[chave].idade,
// }));
// console.log(lista);
// console.log(listaDeVolta);

lista.sort(function (a, b) {
  if (a.idade < b.idade) {
    return -1;
  }

  if (a.idade > b.idade) {
    return 1;
  } else {
    return 0;
  }
});
lista.sort(function (a, b) {
  if (a.nome.toLocaleUpperCase() < b.nome.toLocaleUpperCase()) {
    return -1;
  }

  if (a.nome.toLocaleUpperCase() > b.nome.toLocaleUpperCase()) {
    return 1;
  } else {
    return 0;
  }
});
console.log(lista);