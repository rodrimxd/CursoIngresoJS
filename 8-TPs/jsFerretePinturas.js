/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados 
con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit 
(ej.: "0  centígrados son 32 Fahrenheit ").*/ 


var temp;
var faren;
var centigrados;
var CentFaren;
var FarenCent;

function FahrenheitCentigrados () 
{
	temp=document.getElementById('Temperatura').value;
	

	FarenCent=(((temp-32)*0.5)/10)+((temp-32)*0.5);
	centigrados=FarenCent;
	alert(centigrados + "ºC");
	
}

function CentigradosFahrenheit () 
{
	temp=document.getElementById('Temperatura').value;
	

	CentFaren=(((temp*2)-((temp*2)/10))+32);
	faren=CentFaren;
	alert(faren + "ºF");
}
