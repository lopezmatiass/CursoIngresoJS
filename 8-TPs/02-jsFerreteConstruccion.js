/*2.

	Matías López
	TP 2 DIVISION I



	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var perimetro;
	var resultado;


	largo = document.getElementById('txtIdLargo').value;
	largo = parseInt(largo);
	ancho = document.getElementById('txtIdAncho').value;
	ancho = parseInt(ancho);

	perimetro = 2 * (largo + ancho);

	resultado = perimetro * 3;

	alert("se necesitan 3 alambres de " + resultado + " metros");
}
function Circulo () 
{
	var circulo; 
	var radio;
	var resultado;

	radio = document.getElementById('txtIdRadio').value;
	radio = parseInt(radio);

	circulo = Math.PI * 2 * radio;

	resultado = circulo * 3;

	resultado = resultado.toFixed(2);

	alert("se necesitan 3 alambres de " + resultado + " metros");
	
	
	
}
function Materiales () 
{

	var largo;
	var ancho;
	var area;
	var cal;
	var cemento;

	largo = document.getElementById('txtIdLargo').value;
	largo = parseInt(largo);
	ancho = document.getElementById('txtIdAncho').value;
	ancho = parseInt(ancho);

	area = largo * ancho;

	cal =  area * 3;
	cemento = area * 2;

	alert("se necesitan " + cemento + " bolsas de cemento y " + cal + " bolsas de cal");





	
}



//txtIdLargo - txtIdAncho - txtIdRadio