//reduce é utilizado para reduzir um array em algum tipo de dado, que pode
//ser uma string, um numero, um objeto literal ou até mesmo outro array. ao contrario do map e filter o reduce pode gerar uma saida que não seja um array
const lista = [
  {
    nome: "João",
    idade: 10,
    exibir: true,
  },
  {
    nome: "Jose",
    idade: 44,
  },
  {
    nome: "Maira",
    idade: 33,
  },
  {
    nome: "Joana",
    idade: 62,
  },
  {
    nome: "Carmem",
    idade: 72,
  },
  {
    nome: "Hernane",
    idade: 50,
  },
  {
    nome: "Mauricio",
    idade: 51,
  },
  {
    nome: "Gabriel",
    idade: 38,
  },
  {
    nome: "Margarida",
    idade: 16,
  },
  {
    nome: "Whashington",
    idade: 37,
  },
];

const sum = lista.reduce((acumulador, objeto) => acumulador + objeto.idade, 0); //reduce somando as idades da lista de pessoas

const pessoas = lista.reduce((acc, objeto) => {
  return {
    ...acc,
    [objeto.nome]: {
      idade: objeto.idade,
    },
  };
}, {}); //reduce criando um novo array

console.log(pessoas);
console.log(`soma das idades: ${sum}`);

console.log(lista);
