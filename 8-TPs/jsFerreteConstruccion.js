/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo 
y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  
de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, 
debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

var cantidad;
var cantAlambre;
var largo; 
var ancho; 
var radio;
var pi=3.14;
var cemento;
var cal;

function Rectangulo () 
{
	Medidas();
	var perimetroRectangulo=(largo*2)+(ancho*2);
	cantAlambre=perimetroRectangulo*3;
	alert("Necesita "+cantAlambre+ "m de alambre.");
}

function Circulo () 
{
	Medidas();
	var perimetroCirculo=2*pi*radio;
	cantAlambre=perimetroCirculo*3;
	alert("Necesita "+cantAlambre+ "m de alambre.");
}

function Materiales () 
{
	Medidas();
	var area=largo*ancho;
	cemento=area*2;
	cal=area*3;
	alert("Necesita "+cemento+" bolsas de cemento y "+cal+" de cal.");
}

function Medidas()
{
	largo=document.getElementById("Largo").value;
	ancho=document.getElementById("Ancho").value;
	radio=document.getElementById("Radio").value;
}