/*1.	

	Matías López
	TP 1 DIVISIÓN I





Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{


	var precioUno;
	var precioDos;
	var precioTres;
	var resultado;


	precioUno = document.getElementById('txtIdPrecioUno').value;
	precioUno = parseInt(precioUno);
	precioDos = document.getElementById('txtIdPrecioDos').value;
	precioDos = parseInt(precioDos);
	precioTres = document.getElementById('txtIdPrecioTres').value;
	precioTres = parseInt(precioTres);

	resultado = precioUno + precioDos + precioTres;

	alert("El resultado de su suma es " + resultado);

	
}
function Promedio () 
{
	

	var precioUno;
	var precioDos;
	var precioTres;
	var resultado;
	


	precioUno = document.getElementById('txtIdPrecioUno').value;
	precioUno = parseInt(precioUno);
	precioDos = document.getElementById('txtIdPrecioDos').value;
	precioDos = parseInt(precioDos);
	precioTres = document.getElementById('txtIdPrecioTres').value;
	precioTres = parseInt(precioTres);

	resultado = ((precioUno + precioDos + precioTres) / 3);

	
	resultado = resultado.toFixed(2);


	alert("Su resultado es " + resultado);






}
function PrecioFinal () 
{

	var precioUno;
	var precioDos;
	var precioTres;
	var promedio;
	var resultado;
	

	precioUno = document.getElementById('txtIdPrecioUno').value;
	precioUno = parseInt(precioUno);
	precioDos = document.getElementById('txtIdPrecioDos').value;
	precioDos = parseInt(precioDos);
	precioTres = document.getElementById('txtIdPrecioTres').value;
	precioTres = parseInt(precioTres);

	promedio = (precioUno + precioDos + precioTres) *21/100;

	resultado = (precioUno + precioDos + precioTres) + promedio;

	resultado = resultado.toFixed(2);

	alert("Su precio final es " + resultado);

	
}