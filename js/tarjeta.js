var numero= prompt("Ingrese un numero: ");
console.log(numero);
var esSegDig= false;
var total=0;

for(var i = numero.length - 1; i >= 0 ; i--){
	if (esSegDig==true){
		console.log("Multiplicado por 2= "+ parseInt(numero.charAt(i))*2);
		var x= parseInt(numero.charAt(i))*2;
		esSegDig=false;	
		if (x>9) {
			x-=9;
		}
		total+=x;
	}
	else {
		console.log("Sin multiplicar= "+ parseInt(numero.charAt(i)));
		esSegDig=true;	
		total+=parseInt(numero.charAt(i));
	}
}

console.log("El total es: "+total);


// operador Ternario 
//alert(total%10===0 ? "bien ahi" : "mal ahi");

// Normalmente sería 
if (total%10===0){
	alert("Bien ahi");
}
else {
	alert("Mal ahi");
}




/*

// Otra opción 
// En los loops una buena manera es asignando la inversa del parametro 

for(var i = numero.length - 1; i >= 0 ; i--){
	if (esSegDig==true){
		console.log("Multiplicado por 2= "+ parseInt(numero.charAt(i))*2);
		
	}
	else {
		console.log("Sin multiplicar= "+ parseInt(numero.charAt(i)));
			
	}

	esSegDig=!esSegDig;
}

*/