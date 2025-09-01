/** @format */
let nome = new String("TESTE AGORA FICOU SERIO");
let nome2 = new String("TESTE AGORA FICOU SERIO");
let carro = new String("Ferrari");

console.log(nome);
console.log(typeof nome);

console.log(nome.charAt(1)); //mostra o caracter da posição informada
console.log(nome.charCodeAt(2)); //mostra o codigo ascii do caracter informado
//nome = nome.concat(carro);//concatena e atribui uma nova string a variavel
console.log(nome.concat(carro)); //apenas concatena os valores das strings e não altera seus valores
console.log(nome.indexOf("E")); //retorna o valor da primera posição do carcater encontrardo, caso o caracter não exista o valor retornado é -1 (menos um)
console.log(nome.lastIndexOf("E")); //retorna o valor da posição do ultimo caracter encontrado

/*AULA 102================================================================ */
console.log(nome.localeCompare(nome2));

//0(zero) indica que as strings são identicas
//-1(menos um) indica que a primeira string é menor que a segunda
//1 (um) indica que a primeira string é maior que a segunda

console.log(nome.replace("TESTE", "teste")); //permite substituir um caracter ou uma sequencia de caracteres dentro de uma string

console.log(nome.search("AGORA")); //pesquisa um caracater ou um conjunto de caracteres dentro de uma string
let palavra = nome.slice(0, 11);
console.log(palavra);
console.log(nome.slice(6, 11)); //retorna um caracter ou um conjunto de caracteres de uma string onde apontamos o inicio e o fim da senteça a ser retornada
let arr_nome = nome.split("I");
console.log(nome.split(" ")); //rerorna um array indicado por um caracter especial especifico ou quando não informado ele retorna o array de todos os caracteres

console.log(arr_nome); //lembrando que o metodo é case sensitive

/*AULA 103================================================================ */

let parte_nome = nome.substring(6, 11); //retorna uma sequencia de caracteres até a posição indicada, mas não mostra a mesma
console.log(parte_nome);

let parte_nome1 = nome.substr(11, 5); //função descontinuada, ela retorna o conjunto de caracteres começando no volor indicada e o tamanho indicado no segundo parametro
console.log(parte_nome1);
console.log(nome.toUpperCase()); //retorna o valor em maiusculo

console.log(nome.toLowerCase()); //retorna o valor em minusculo

console.log(nome.toLocaleUpperCase());
console.log(nome.toLocaleLowerCase());

console.log(nome.valueOf());

let num1 = 10;

console.log(typeof num1.toString());

/*AULA 104 ================================================================ */

console.log(nome.startsWith("TESTE")); //teste boleano para verificar o inicio de uma string, sem um caracter ou uma sequencia de caracteres

console.log(nome.endsWith("ESTE")); //teste boleano para verificar o fim de uma string, sendo um caracter ou uma sequencia de caracteres

console.log(nome.includes(" ")); //teste boleano para verificar seno meio uma string,existe  um caracter ou uma sequencia de caracteres

console.log(nome.repeat(4)); //repete o valor do objeto o numero de vezes que for indicado
console.log(nome.valueOf());

console.log(nome.charCodeAt(0)); //retorna o codigo ascii dos caracteres das posições informadas
console.log(nome.charCodeAt(1));
console.log(nome.charCodeAt(2));
console.log(nome.charCodeAt(3));
console.log(nome.charCodeAt(4));

console.log(String.fromCodePoint(84, 69, 83, 84, 69));

console.log(nome.trimStart()); //remove espaços em branco do inicio da string
nome = "Paulo Henirque da Silva";
console.log(`Nome...:${nome}`);
