/*
function nombres (nombre, apellido){
	console.log(`Mi nombre es ${nombre} y mi apellido es ${apellido}`);
}

nombres("Priscila", "Bey");

function conejos(mes){

	var n1 = 0;
	var n2 = 1;
	var n3;

	for (var i = 0; i<=mes; i++){
		n3=n1+n2;
		n1=n2;
		n2=n3;
	}
	return n3;
}

console.log(conejos(35));


// FUNCIONES RECURSIVAS funcion que se necesita a si misma para calcular el valor actual 
// ESTO NO ESTA DEL TODO BIEN 

function fibonacci(n){
	var x=1;

	for (var i =0; i<=n; i++){
		x= fibonacci(i-1) + fibonacci(i-2);
	}
	return x;
}

var conejo = fibonacci(20);
console.log(fibonacci(20));

//

function fibo(num) {
	if (num<=1) return 1;
	return fibonacci(num-1) + fibonacci (num-2);
}

var cantConejos = fibonacci(10);
console.log(cantConejos);

*/

// BUSCANDO A NEMO CON FUNCIONES 

var buscado = "Nemo";
var nombres= ["Dori", "Buzz", "Cenicienta", "Mulan", "Nemo", "Mushu", "Pongo"];

function buscandoANemo(buscado,nombres){
	var encontrado= false;
	for(var i = 0; i <nombres.length ; i++){
		if (buscado==nombres[i]){
			encontrado=true;
		}
	}
	return encontrado;
}

// otra manera de hacerlo seria sacando la variable encontrado
// poner un return true dentro del if 
// poner un return false fuera del for

var encontreANemo = buscandoANemo(buscado,nombres);

if (encontreANemo==true){
	console.log(`Encontre a Nemo!`);
}



