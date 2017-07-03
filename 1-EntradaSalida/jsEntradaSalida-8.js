/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var D = document.getElementById('numeroDividendo').value;
	var d = document.getElementById('numeroDivisor').value;
	var r=D%d;
	alert(r);
}
