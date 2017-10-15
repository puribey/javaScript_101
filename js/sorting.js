
/*

// BUBBLE SORT 

var num = [6, 5, 3, 1, 8, 7, 2, 4];
console.log(num);
var swap = true; // esta var o bandera es para evitar multiples iteraciones si los numeros se ordenan rapido 

for (var i = 0 ; i<num.length && swap===true ; i++){

	swap = false;
	for(var j = 0 ; j<num.length-i ; j++){ // el -i hace que se reste un indice del array
		if (num[j]>num[j+1]){
			var numTemp = num[j]; 
			num[j]=num[j+1];
			num[j+1]=numTemp;

			swap =true;
		}
		console.log(i, j); // imprimo esto para ver los indices y las vueltas del for
	}
}

console.log(num);

///////////////////////////////////////////////////////

// SELECTION SORT

var num = [5,1,12,-5,16,2,12,14]
console.log(`Este es el array original: ${num}`);
var min;

for (var i=0 ; i<num.length ; i++){

	for (var j=0; j<num.length; j++ ){
		if (num[j]>num[i]){
			min = num[j];
			num[j]=num[i];
			num[i]=min;
			console.log(num);
		}
	}
}
console.log(num);

// La version correcta de SELECTION

var num = [5,1,12,-5,16,2,12,14]
console.log(`Este es el array original: ${num}`);
var numTemp;

for (var i=0 ; i<num.length; i++){
	var min= i;
	console.log(`Este es el numero i ${num[min]}`);
	for (var j=i+1; j<num.length; j++ ){ // este i+1 es lo que hace que se vaya dejando
		// de lado el primer numero del array 
		console.log(`Este es el numero j ${num[j]}`);
		if (num[j]<num[min]){
			min = j;
			
		}
	}	
	console.log(`Este es el numero min ${num[min]}`);
	numTemp= num[i];
	num[i]=num[min];
	num[min]=numTemp;
	console.log(num);
}
//console.log(num);

////////////////////////////////////////////

*/





