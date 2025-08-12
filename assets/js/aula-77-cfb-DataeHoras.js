/** @format */

const divRelogio = document.getElementById("divRelogio");

const relogio = () => {
	const data = new Date();
	let hora = data.getHours();
	hora = hora < 10 ? "0" + hora : hora;

	let minuto = data.getMinutes();
	minuto = minuto < 10 ? "0" + minuto : minuto;

	let segundo = data.getSeconds();
	segundo = segundo < 10 ? "0" + segundo : segundo;

	let msegundos = data.getMilliseconds();
	msegundos = msegundos < 100 ? "0" + msegundos : msegundos;
	

	const horaCompleta = hora + ":" + minuto + ":" + segundo + ":" + msegundos;
    divRelogio.innerHTML = horaCompleta;
};
const intervalo=setInterval(relogio, 1);

relogio();

// console.log(Date.now() + " => TimeStamp com Date.now"); //TimeStamp

// console.log(data.getTime() + " => TimeStamp com GetTime");
// console.log(data.getDate() + " => Dia do Mês");
// console.log(data + " data commpleta");
// console.log(data.getDay() + " => Dia da Semana Mês");
// console.log(data.getFullYear() + " => Ano com 4 Digitos");
// console.log(data.getMonth() + " => Mes");
// console.log(data.getHours() + " => Horas");
// console.log(data.getMinutes() + " => Minutos");
// console.log(data.getSeconds() + " => Segundos");
// console.log(data.getMilliseconds() + " => Milisegundos");
// console.log(
// 	data.getTime() +
// 		" => TimeStampndos milesegundos desde 1 de Janeiro de 1970, 00:00:00 UTC"
// );
// console.log(
// 	Date.now() +
// 		" => TimeStampndos milesegundos desde 1 de Janeiro de 1970, 00:00:00 UTC"
// );

//getDate()         = Dia do Mês
//getDay()          = Dia da Semana (numero)
//getMouth()        = Mês
//getFullYear()     = Ano com 4 Digitos
//getHours()        = Horas
//getMinutes()      = Minutos
//getSeconds()      = Segundos
//getMilliseconds() = Milesegundos
//getTime()         = Timestamp (milesegundos desde 1 de Janeiro de 1970, 00:00:00 UTC)
//Date.now()        = Timestamp (milesegundos desde 1 de Janeiro de 1970, 00:00:00 UTC)
//getTimezoneOffset()= Timezone da localidade
//=====================================================================================
//setDate()         = Devine um dia do mês para a data
//setMonth()        = Define um mês para a data
//setFullYear()     = Define um ano para a data
//setHours()        = Define horas
//setMinutes()      = Define Minutos
//setSeconds()      = Define Segundos
//setMilliseconds() = Devine Milisegundos
//toDataString()    = Retorna Somente a data
