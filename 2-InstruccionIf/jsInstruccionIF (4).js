function Mostrar()
{
//tomo la edad  
var edad = document.getElementById('edad').value;
edad=parseInt(edad);

if (edad<13) 
{
	alert("Menor");
}else if (edad>17) 
{
	alert("Mayor");
}else
{
	alert("Es un maldito adolecente :P");
}


}//FIN DE LA FUNCIÓN