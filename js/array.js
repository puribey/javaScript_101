// ARRAYS 

// En js todos los indicies empiezan en 0 
// Si yo quiero poner un valor a muchas variables puedo crear una sola variable con un array

/* 

Ej.:

var semana = [0, 10, 25, 50, 100];

// Para ver la posicion se usa el nombre de la variable : semana[0] : lo que va a ser = a 0 

// Para ver el tipo de valor de una variable -- > 

var semana = [0, 10, 25, 50, 100];
var dias = 7; 
var hola = true;
var chau = "no"; 

alert(typeof semana);
alert(typeof dias);
alert(typeof hola);
alert(typeof chau);


var semana = [50, 35, 105, 40, 25]; 
var total = 0;

for (var i=0 ; i<semana.length; i++ ){
	console.log(semana[i]);
	total= total + (semana[i]);
	
}

alert(total);
alert(total/semana.length);


// Console.log de dos indices:

var semana = [50, 35, 105, 40, 25]; 
var dias = ["Lunes","Martes","Miércoles","Jueves", "Viernes"];
var total = 0;

for (var i=0 ; i<semana.length; i++ ){
	if (semana[i]>50){
	console.log(dias[i]+"= "+semana[i]);
	}
}


// Asignación de valores a un array 

var notasMusicales = [];
var cant = notasMusicales.length;

console.log(cant);

notasMusicales[0]= "Do";
notasMusicales[1]= "Re";
notasMusicales[2]= "Mi";
notasMusicales[3]= "Fa";
notasMusicales[4]= "Sol";
notasMusicales[5]= "La";
notasMusicales[6]= "Si";
notasMusicales[7]= "Do";

console.log(notasMusicales);

var ultimoElemento = notasMusicales.length-1; // esto va a mostrar el indice 
var contElemento = notasMusicales[notasMusicales.length-1]; // esto va a mostrar el contenido

console.log(ultimoElemento);
console.log(contElemento);


var pokemons = [];

pokemons[0]="Pikachu";
pokemons[1]="Charmander";
pokemons[2]="Squirtle";
pokemons[3]="Lapras";
pokemons[4]="Toggepi";
pokemons[5]="Vaporeon";
pokemons[6]="Chikorita";
pokemons[7]="Sindaquil";
pokemons[8]="Bulpix";
pokemons[9]="Ninetiles";

var pokeUlt = pokemons[pokemons.length-1];
var pokePrim = pokemons[0];
console.log(`${pokePrim} and ${pokeUlt}`);


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
*/

var X = ["a","l","f","a"];
var Y = ["a","l","f","a","j","o","r"];
var distinto = false;
var xL = X.length;
var yL = Y.length;
var N;
var M;
var igual = 0;

if (X.length == Y.length){
	for(var i=0; i<X.length; i++){
		if (X[i]!=Y[i]){
			distinto=true;
		}
	}
}
else {
	if(xL>yL){
		console.log("X es mas largo");
		N=yL;
		M=xL;
	}
	else {
		N=xL;
		M=yL;
		console.log("Y es mas largo");
	}
}

for (var i= 0 ; i<=X.length-1 ; i++){
	for (var n= 0 ; n<=Y.length-1 ; n++) {
		if (Y[n] == X[i]){
			igual +=1;
			console.log(igual);
		}
	}
}


