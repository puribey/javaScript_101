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

*/


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



