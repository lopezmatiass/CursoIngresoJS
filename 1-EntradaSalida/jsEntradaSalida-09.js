/*
Matías López
E/S09 DIV I



Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var ingreseImporte;
	var aumento;
	var resultado;


	ingreseImporte = parseInt(document.getElementById('txtIdSueldo').value);

	aumento = ingreseImporte * 10/100;

	resultado = ingreseImporte + aumento;

	document.getElementById("txtIdResultado").value=resultado;

}
