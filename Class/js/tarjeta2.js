var numero= "567830845";
console.log(numero);
var esSegDig= true;
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

var anteUltNum = total*9;

var anteUltNum = anteUltNum.toString();

var extra = (anteUltNum.charAt(anteUltNum.length-1));

var numFinal = numero+extra;

alert(numFinal);