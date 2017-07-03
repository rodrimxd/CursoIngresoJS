/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var n1 = document.getElementById('numeroUno').value;
	var n2 = document.getElementById('numeroDos').value;
	var r;

	n1=parseInt(n1);
	n2=parseInt(n2);
	r=n1+n2;
	alert(r);
}

function restar()
{
	
	var n1 = document.getElementById('numeroUno').value;
	var n2 = document.getElementById('numeroDos').value;
	var r;
	
	r=n1-n2;
	alert(r);	
}

function multiplicar()
{ 
	var n1 = document.getElementById('numeroUno').value;
	var n2 = document.getElementById('numeroDos').value;
	var r;
	
	r=n1*n2;
	alert(r);		
}

function dividir()
{
	var n1 = document.getElementById('numeroUno').value;
	var n2 = document.getElementById('numeroDos').value;
	var r;
	
	r=n1/	n2;
	alert(r);	
}

