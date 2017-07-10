/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

var PrecioUno;
var PrecioDos;
var PrecioTres;
var suma;
var promedio;
var precioFinal;

function Sumar () 
{
	Precios();	
	suma=PrecioUno+PrecioDos+PrecioTres;
	alert(suma);
}

function Promedio () 
{
	Precios();
	suma=PrecioUno+PrecioDos+PrecioTres;
	promedio=suma/3;
	alert(promedio);
}

function PrecioFinal () 
{
	Precios();
	suma=PrecioUno+PrecioDos+PrecioTres;
	precioFinal=suma*1.21;
	alert(precioFinal);
}

function Precios()
{
	PrecioUno=document.getElementById("PrecioUno").value;
	PrecioDos=document.getElementById("PrecioDos").value;
	PrecioTres=document.getElementById("PrecioTres").value;
	PrecioUno=parseInt(PrecioUno);
	PrecioDos=parseInt(PrecioDos);
	PrecioTres=parseInt(PrecioTres);
}