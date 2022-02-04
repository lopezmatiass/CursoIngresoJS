/*3.	

Matías López
TP 03 DIVISION I





Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var	temperatura;
	var farenheit;
	var centigrados;

	temperatura = document.getElementById('txtIdTemperatura').value;
	temperatura = parseInt(temperatura);
	
	farenheit = (temperatura - 32) * 5 / 9;

	farenheit = farenheit.toFixed(2);


	alert(temperatura + " Farenheit son " + farenheit + " centígrados");



}

function CentigradosFahrenheit () 
{

	var	temperatura;
	var farenheit;
	var centigrados;

	temperatura = document.getElementById('txtIdTemperatura').value;
	temperatura = parseInt(temperatura);
	
	centigrados = (temperatura * 9 / 5) + 32;

	centigrados = centigrados.toFixed(2);

	alert(temperatura + " centígrados son " + centigrados + " Farenheit");
	
}
