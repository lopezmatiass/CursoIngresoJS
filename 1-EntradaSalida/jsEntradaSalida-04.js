/* 
López Matías
E/S04 DIV I



Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombreDelEmpleado;

	nombreDelEmpleado = prompt("Ingrese su nombre");

	document.getElementById('txtIdNombre').value = nombreDelEmpleado;
}

