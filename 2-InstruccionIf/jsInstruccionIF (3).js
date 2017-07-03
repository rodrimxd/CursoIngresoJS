function Mostrar()
{
//tomo la edad
	var edad= document.getElementById('edad').value;
	edad=parseInt(edad);

	edad=(edad<18) ? alert("Es menor!!!"):alert("Es un viejo choto");	

	//otra forma de hacerlo
	/*if (edad<18) 
	{
		alert("Es Menor!!!");
	}
	else
	{
		alert("Es Mayor!!!");
	}*/
}//FIN DE LA FUNCIÓN