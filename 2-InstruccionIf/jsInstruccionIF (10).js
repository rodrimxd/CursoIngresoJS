function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 	
	var a = Math.floor((Math.random() *10 )+ 1);
	
		if(a >= 9){
			alert("EXCELENTE");			
		}
		else if(a >=4 && a<9){
			alert("EXCELENTE 2");			
		}
		else{
			alert("EXCELENTE 3");	
		}
	
}//FIN DE LA FUNCIÓN