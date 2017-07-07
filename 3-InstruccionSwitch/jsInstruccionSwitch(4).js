function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
switch(mesDelAño)
{
	case "Febrero":
	alert("28 dias");
	break;

	case "Abril":
	case "Junio":
	case "Septiembre":
	case "Noviembre":
	alert("30 dias");
	break;

	default:
	alert("31 dias");
	break;
}



}//FIN DE LA FUNCIÓN