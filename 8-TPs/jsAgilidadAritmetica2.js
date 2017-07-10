/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */

var temporizador=setInterval(fnTempo, 4000);
var respuesta;
var numero1;
var numero2;
var signo;
var resultado;

function comenzar()
{
	numero1=Math.floor((Math.random() *10 )+ 1);
	document.getElementById('PrimerNumero').value=numero1;
	numero2=Math.floor((Math.random() *10 )+ 1);
	document.getElementById('SegundoNumero').value=numero2;
	signo=Math.floor((Math.random() *4 )+ 1);
	switch(signo)
	{
		case 1:
			document.getElementById('Operador').value="+";
			numero1=parseInt(numero1);
			numero2=parseInt(numero2);
			resultado=numero1+numero2;
		break;

		case 2:
			document.getElementById('Operador').value="-";
			resultado=numero1-numero2;
		break;

		case 3:
			document.getElementById('Operador').value="x";
			resultado=numero1*numero2;
		break;

		case 4:
			document.getElementById('Operador').value="/";
			resultado=numero1+numero2;
		break;
	}
	

}//FIN DE LA FUNCIÓN
function Responder()
{
	respuesta=document.getElementById('Respuesta').value;
	if (respuesta==resultado) 
	{
		alert("Es Correcto!!!");		
	}
	else
	{
		alert("La pifiaste U___U");
	}
	//alert(resultado);
}//FIN DE LA FUNCIÓN


function fnTempo() {
    alert('TIEMPO FUERA!');

    respuesta=document.getElementById('Respuesta').value;
	if (respuesta==resultado) 
	{
		alert("Es Correcto!!!");		
	}
	else
	{
		alert("ES INCORRECTO!!! U___U");
	}

    comenzar();
	document.getElementById('Respuesta').value=null;
}