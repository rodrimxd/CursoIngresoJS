function Mostrar()
{
//tomo la edad  
var edad = document.getElementById('edad').value;
edad = parseInt(edad);
	if (edad>=18) 
	{
		alert("La persona es mayor de Edad.");
	}

	//Con ternario
	//edad=(edad>=18) ?alert("La persona es mayor de Edad."):"";	
}//FIN DE LA FUNCIÓN