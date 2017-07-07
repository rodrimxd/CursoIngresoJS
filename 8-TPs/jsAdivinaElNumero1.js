/*Al comenzar el juego generamos un número 
secreto del 1 al 100, 
en la pantalla del juego
dispondremos de un cuadro de texto para
ingresar un número y un botón 
“Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;


function comenzar()
{
	
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto = Math.floor((Math.random() *100 )+ 1);
	//alert(numeroSecreto );
	console.log(numeroSecreto);
	contadorIntentos=0;
	document.getElementById('intentos').value=contadorIntentos;

}

function verificar()
{
	var numero;
	numero=document.getElementById('numero').value;
	contadorIntentos+=1;
	if (numero==numeroSecreto) 
	{
		alert("piola wachin. Lo hiciste en " + contadorIntentos + " intentos");				
		document.getElementById('numero').value=0;
	}
	else
	{
		if (numero>numeroSecreto) 
		{
			alert("te pasaste");
		}
		else
		{
			alert("te falta");
		}
	}
	document.getElementById('intentos').value=contadorIntentos;
}