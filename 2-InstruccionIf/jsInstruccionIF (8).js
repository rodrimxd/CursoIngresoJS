function Mostrar()
{
//tomo la edad  
var edad = document.getElementById('edad').value;
edad = parseInt(edad);
var estadoCivil= document.getElementById('estadoCivil').value;

if (!(edad < 18 && estadoCivil!="Soltero"))
{
	alert("Es soltero y no es menor");
}
}//FIN DE LA FUNCIÓN