/*
Matías López
E/S10 DIV I





Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var ingreseImporte;
	var descuento;
	var resultado;


	ingreseImporte = parseInt(document.getElementById('txtIdImporte').value);

	descuento = ingreseImporte * 25/100;

	resultado = ingreseImporte - descuento;

	document.getElementById("txtIdResultado").value=resultado;









}
