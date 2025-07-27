/** @format */
/* A COLEÇÃO SET NÃO ACEITA ELEMENTOS DUPLICADOS*/
const caixa = document.querySelector("#caixa");

let musicas = new Set(["musica1", "musica boa", "musica10"]);

musicas.add("Forro"); //adiciona elementos na coleção
musicas.add("musica1");
musicas.add("musica10");
console.log(musicas);

musicas.delete("musica1"); //exclui elementos da coleção
//musicas.clear(); //limpa a coleção

musicas.forEach((music) => {
	caixa.innerHTML += music + "<br/>";
});
for (let m of musicas) {
	console.log(m);
	caixa.innerHTML += "<br/>" + m + "<br/>" + "--------------";
}
