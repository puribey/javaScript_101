var modo= prompt("Desea pagar con efectivo o tarjeta?");
var ingrese= prompt("Ingrese el monto total de la compra:");
var monto=parseInt(ingrese); //convierte un string ingresado a numero
var desc=0;
var recargo=0;


if (modo=="efectivo"){
	if (monto>=500 && monto<1000) {
		desc=(monto*5)/100;
		total=(monto-desc);
		alert("Su monto a pagar es $"+total+".-");
	} 
 	else if (monto>=1000 && monto<2000) {
		desc=(monto*10)/100;
		total=(monto-desc);
		alert("Su monto a pagar es $"+total+".-");
	} 
 	else if (monto>2000){
		desc=(monto*20)/100;
		total=(monto-desc);
		alert("Su monto a pagar es $"+total+".-");
	}
	else if (monto<500){
 		alert("Usted no tiene ningún descuento o recargo. Su monto a pagar es $"+monto+".-");
 	}

} 
else if (modo=="tarjeta") {
	if (monto>=500 && monto<1000) {
		recargo=(monto*5)/100;
		total=(monto+recargo);
		alert("Su monto a pagar es $"+total+".-");
	} 
 	else if (monto>=1000 && monto<2000) {
		desc=(monto*10)/100;
		recargo=(monto*2.5)/100;
		total=(monto+recargo)-desc;
		alert("Su monto a pagar es $"+total+".-");
	} 
 	else if (monto>=2000){
		desc=(monto*10)/100;
		total=(monto-desc);
		alert("Su monto a pagar es $"+total+".-");
 	}
 	else if (monto<500){
 		alert("Usted no tiene ningún descuento o recargo. Su monto a pagar es $"+monto+".-");
 	}
}
