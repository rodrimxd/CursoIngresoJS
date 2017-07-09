/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
	var costo=35;
	var precioDescuento;
	var cantidad=document.getElementById('Cantidad').value;
	var marca=document.getElementById('Marca').value;
	var precioFinal =costo*cantidad;
	var precioFinalConDescuento;

	if (cantidad>5) 
	{
		precioDescuento=precioFinal*0.5;
	}
	else
	{
		if (cantidad==5) 
		{
			if (marca=="ArgentinaLuz") 
			{
				precioDescuento=precioFinal*0.4;
			}
			else
			{
				precioDescuento=precioFinal*0.3;
			}
		}
		if (cantidad==4) 
		{
			if (marca=="ArgentinaLuz" || marca=="FelipeLamparas") 
			{
				precioDescuento=precioFinal*0.25;
			}
			else
			{
				precioDescuento=precioFinal*0.2;
			}
		}
		if (cantidad==3) 
		{
			if (marca=="ArgentinaLuz") 
			{
				precioDescuento=precioFinal*0.15;
			}
			else
			{
				if (marca=="FelipeLamparas") 
				{
					precioDescuento=precioFinal*0.1;
				}
				else
				{
					precioDescuento=precioFinal*0.05;
				}
			}			
		}
		else
		{
			precioDescuento=precioFinal*0;
		}
	}

	precioFinalConDescuento=precioFinal-precioDescuento;
	if (precioFinalConDescuento>120) 
	{
		var IIBB= precioFinalConDescuento*0.1;
		var precioIIBB=precioFinalConDescuento+IIBB;

		alert("El importe a pagar es $" + precioIIBB + "?\nUsted pago $" + IIBB+ " de Ingreso Brutos.");	
	}
	else
	{
		alert(precioFinalConDescuento);	
	}
	
}
