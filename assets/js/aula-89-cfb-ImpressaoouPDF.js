/** @format */

const btn_imp = document.getElementById("btn_imp");

btn_imp.addEventListener("click", (evt) => {
	const conteudo = document.getElementById("tabela").innerHTML;

	let estilo = "<style>";
	estilo += "table {width: 100%;font: 25px Calibri;}";
	estilo += "table, th, td {border: solid 2px #888; border-collapse: collapse;";
	estilo += "padding: 4px 8px;text-align: center";
	estilo += "</style>";

	const janela = window.o pen("", "", "height=700,width=700");

	janela.document.writeln("<html>");
	janela.document.writeln("<head>");
	janela.document.writeln("<title>Tabela para Impressão</title>");
	janela.document.writeln(estilo);
	janela.document.writeln("</head>");
	janela.document.writeln("<body>");
	janela.document.writeln(conteudo);
	janela.document.writeln("</body></html>");

	janela.print();
	janela.close();
});
