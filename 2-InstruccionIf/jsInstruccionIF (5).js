function Mostrar()
{
//tomo la edad  
var edad = document.getElementById('edad').value;
edad=parseInt(edad);

if (!(edad >=13 && edad<=17)) 
{
	alert("No es adolcente");
}

}//FIN DE LA FUNCIÓN