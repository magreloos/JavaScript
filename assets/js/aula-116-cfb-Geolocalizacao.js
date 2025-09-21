/** @format */
const long = document.getElementById("long");
const lati = document.getElementById("lati");

if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(mostrarLocalizacao, erroLocalizacao);
} else {
	console.log("Geolocalização Desativada ou não suportada");
}

function mostrarLocalizacao(pos) {
	long.innerHTML =`Longitude.: ${pos.coords.longitude}`;
	lati.innerHTML = `Latitude....: ${pos.coords.latitude}`;
}
function erroLocalizacao() {
	console.log("Erro ao obter a localizacao");
}
