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

*/


var numero= "36785043"
var semana = [50, 35, 105, 40, 25]; 
var dias = ["Lunes","Martes","Miércoles","Jueves", "Viernes"];
var total = 0;

var extra = (numero.charAt(numero.length-1));

alert(extra);
alert(numero+extra);

for (var i=0 ; i<semana.length; i++ ){
	if (semana[i]>50){
	console.log(dias[i]+"= "+semana[i]);
	
	}
	
}




