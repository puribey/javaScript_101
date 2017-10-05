
/* 

// EJERCICIO NUMERO 1

var numero = prompt("Ingrese un numero");

if (numero%2 == 0){
	alert("el numero es par");
}
  
else {
	alert("el numero es impar");
}


///////////////////////////////////////////


// EJERCICIO NUMERO 2

let dias = prompt("Ingrese un numero del 1 al 7:");

switch(dias){
	case "1":
	alert("Lunes");
	break;
	case "2":
	alert("Martes");
	break;
	case "3":
	alert("Miercoles");
	break;
	case "4":
	alert("Jueves");
	break;
	case "5":
	alert("Viernes");
	break;
	case "6":
	alert("Sabado");
	break;
	case "7":
	alert("Domingo");
	break;
	default:
	alert("El numero no es valido");
	break;
}


///////////////////////////////////////////



// EJERCICIO NUMERO 3

var mes= prompt("Ingrese un mes:");

if (mes=="Febrero"){
	alert("Este mes tiene 28 días");
}

else if (mes == "Abril" || mes=="Junio" || mes=="Septiembre" ||mes =="Noviembre"){
	alert("Este mes posee 30 días");
}
else{
	alert("Este mes tiene 31 días");
}




var mes= "Enero";

switch (mes){
	case "Enero":
	alert("31 días");
	break;
	case "Febrero":
	alert("28 días");
	break;
	case "Marzo":
	alert("31 días");
	break;
	case "Abril":
	alert("31 días");
	break;
	case "Mayo":
	alert("31 días");
	break;
	case "Junio":
	alert("30 días");
	break;
	case "Julio":
	alert("31 días");
	break;
	case "Agosto":
	alert("31 días");
	break;
	case "Septiembre":
	alert("30 días");
	break;
	case "Octubre":
	alert("31 días");
	break;
	case "Noviembre":
	alert("30 días");
	break;
	case "Diciembre":
	alert("31 días");
	break;
	default:
	alert("Este mes no existe");
	break;
}


var mes= parseInt(prompt("Escriba un nuemero:"));

switch (mes){
	case 1:
	alert("31 días");
	break;
	case 2:
	alert("28 días");
	break;
	case 3:
	alert("31 días");
	break;
	case 4:
	alert("31 días");
	break;
	case 5:
	alert("31 días");
	break;
	case 6:
	alert("30 días");
	break;
	case 7:
	alert("31 días");
	break;
	case 8:
	alert("31 días");
	break;
	case 9:
	alert("30 días");
	break;
	case 10:
	alert("31 días");
	break;
	case 11:
	alert("30 días");
	break;
	case 12:
	alert("31 días");
	break;
	default:
	alert("Este mes no existe");
	break;
}




///////////////////////////////////////////


// EJERCICIO NUMERO 4

var numero;

if (numero<0){
	alert("Cuanta negatividad!");
}
else {
	alert("Cuanta positividad!");
}




///////////////////////////////////////////


// EJERCICIO NUMERO 5

var letra = prompt("Ingrese una letra del abcedario:");

if (letra=="a" || letra=="i" || letra=="o" || letra=="u" || letra=="e"){
	alert("Es un vocal!");
}
else {
	alert("No es vocal");
}



var letra = prompt("Elija una letra de abcedario: ");

switch(letra){
	case "A":
	case "a":
	alert("Esta letra es una vocal");
	break;
	case "E":
	case "e":
	alert("Esta letra es una vocal");
	break;
	case "I":
	case "i":
	alert("Esta letra es una vocal");
	break;
	case "U":
	case "u":
	alert("Esta letra es una vocal");
	break;
	case "O":
	case "o":
	alert("Esta letra es una vocal");
	break;
	default:
	alert("Esta letra es una consonante");
	break;
}



///////////////////////////////////////////


// EJERCICIO NUMERO 6

var x =parseInt(prompt("Ingrese el valor de x:"));
var y =parseInt(prompt("Ingrese el valor de y:"));
var z =parseInt(prompt("Ingrese el valor de z:"));
var total;


if (x>y){
	var total= x-z;
	console.log("El total de la resta entre x y z es: "+total);
	if (total>y){ 
		console.log("El total de la resta entre x y z es: "+total+". Y ademas es mayor que y.");
	}

} else {
	var total = (x+z)*y;
	console.log("El total de la suma entre x y z multiplicado por z es: "+total);
}


// Otra version

if (total<y){
	total=(x+z)*y;
}


// Otra version

if (!(total>y)){
	total=(x+z)*y;
}



///////////////////////////////////////////


// EJERCICIO NUMERO 7 

var sueldo = 40000;
var vigencia = parseInt(prompt("Ingrese el total de años trabajados: "));
var total;
var aumento;

if (vigencia>10){
	// var sueldo = sueldo + 0.1*sueldo 
	var aumento= (sueldo*10)/100;
	var total= sueldo+aumento;
	alert("Por haber trabajado más de 10 años en esta empresa, su sueldo será de: $"+total+".-");
}
else if (vigencia<=10 && vigencia>5){
	var aumento= (sueldo*7)/100;
	var total= sueldo+aumento;
	alert("Por haber trabajado más de 5 años en esta empresa, su sueldo será de: $"+total+".-");
}
else if (vigencia<=5 && vigencia>3){
	var aumento= (sueldo*5)/100;
	var total= sueldo+aumento;
	alert("Por haber trabajado más de 3 años en esta empresa, su sueldo será de: $"+total+".-");
}
else {
	var aumento= (sueldo*3)/100;
	var total= sueldo+aumento;
	alert("Por haber trabajado más de 3 años en esta empresa, su sueldo será de: $"+total+".-");
}



////////////////////// LEVEL UP : 2 ///////////////////////////////


// EJERCICIO 1


var canje = 1000;
var puntos = parseInt(prompt("Ingrese sus puntos"));
var premium = confirm("Es usted premium?");
var pesos;



// Version mia 

if (canje<puntos){
	alert("Usted se lleva el producto de inmediato!");
}
else if (puntos>=(canje*50)/100){
	pesos = (canje-puntos)/3
	alert("Usted podra completar su canje con dinero siendo el total: $"+pesos+".-");
}
else if (puntos>=(canje*50)/100 && premium==true) {
	pesos = (canje-puntos)/5
	alert("Usted podra completar su canje con dinero siendo el total: $"+pesos+".-");
}
else {
	alert("Sus puntos no le alcanzan. Lo sentimos.")
}

*/












