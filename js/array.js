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



////////////////////// Metodos de arrays ///////////////////////

var planetas = ["Mercurio",
				"Venus",
				"Tierra",
				"Marte",
				"Jupiter",
				"Saturno",
				"Urano",
				"Neptuno",
				"Pluton"];

// console.log(planetas.push("Ofiuco")); // va a dar 10, valor numerico .push suma un elemento al final del array

// console.log(planetas.push(["Luna","Sol"])); // va a dar 11 por que al ser un parametro se suma como una sola posicion

// console.log(planetas[10][1]); // va a dar sol 

// El metodo forEach recibe como parametro una funcion que puede recibir o no parametros. Esa funcion se va a ejecutar por cada elemento del array
// Tres parametros predeterminados en forEach: contenido , numero de indice , array 

planetas.forEach(function(planeta, indice){
	console.log(`El planeta es ${planeta} y su indice es ${indice}`);
});

planetas.forEach((planeta, indice) => {
	console.log(`El planeta es ${planeta} y su indice es ${indice}`);
});


// El metodo map crea un nuevo array y recibe como parametro una funcion, necesita una variable donde guardarse 


var numeros = [1,2,3,4,5,6,7];

var numerosMultiplicados = numeros.map(function(numero){
	return numero + 2;
});
console.log(`Array original: ${numeros}`);
console.log(`Array multiplicado: ${numerosMultiplicados}`);



var numeros = [];

for (var i = 0; i <=1000 ; i ++){
	numeros[i]=i;
}

console.log(numeros);

var numeroMasDiez = numeros.map(function(numero){
	return numero + 10;
});

console.log(numeroMasDiez);



var palabras = ["dont", "leave", "me", "hanging"];

var upper = palabras.map(function(palabra){
	return palabra.toUpperCase();
});

console.log(upper);

*/



