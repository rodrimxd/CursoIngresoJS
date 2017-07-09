/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;
var numero;

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
	numero=document.getElementById('numero').value;
	contadorIntentos+=1;
	
	if (numero==numeroSecreto) 
	{
		switch(contadorIntentos)
		{
			case 1:
				alert("usted es un Psíquico");	
			break;

			case 2:
				alert("excelente percepción");	
			break;

			case 3:
				alert("Esto es suerte");	
			break;

			case 4:
				alert("Excelente técnica");	
			break;

			case 5:
				alert("usted está en la media");	
			break;

			default:
				if (contadorIntentos>5 && contadorIntentos<11) 
				{
					alert("falta técnica");	
				}
				else
				{
					alert("afortunado en el amor!!");	
				}
			break;
		}
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