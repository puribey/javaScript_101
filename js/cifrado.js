
/*
// CIFRADO 
var palabra = ["h","o","l","a"];
var arr1 = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var arr2 = [];
var n = 3;
var cifrado=[];


for (var i = 0; i <arr1.length ; i++){
	var j = arr1[i+n];

	if (i+n > arr1.length-1){
		j= arr1[(i+n)%arr1.length];
	}
	console.log(j);
	arr2[i] = j; 
}

// Comienza el cifrado

for (var i=0; i<palabra.length ; i++){
	
	for (var j = 0 ; j<arr1.length; j++){ //indexof
		if (palabra[i]==arr1[j]){
			cifrado[i]= arr2[j];
			
		}
	}
}

console.log(cifrado);

*/
//OTRA FORMA DE HACERLO MAS OPTIMO

var palabra = prompt("Escribir una palabra: ");
var arr1 = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var cifrado = [];
var n = 3;

for(var i = 0; i < palabra.length ; i++){
	for (var j = 0; j<arr1.length; j++){
		if (palabra[i]==arr1[j]) {
			j=arr1[(j+n)%arr1.length];
			console.log(j);
			cifrado[i]=j;
		}
	}
}

var cifradoFinal = cifrado.join("");

console.log(`La palabra ingresada es: ${palabra} y la palabra cifrada es: ${cifradoFinal}`);


