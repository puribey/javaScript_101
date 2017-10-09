
/*
//// LOOPS ////

/////////////////   WHILE   ////////////////

// While neg 

var x=100;

while (x>=1){
	console.log(x);
	x--;
}

console.log(`Sali con el valor de X = ${x}`);



console.log(`Sali con el valor de X = ${x}`);


var x=1;

while (x<=100){
	if (x%2==0) {
		console.log(x); 
	}
	
	x++;
}

console.log(`Sali con el valor de X = ${x}`); // `todo lo que escriba adentro de estas comillas se imprime`

var i=0;
while (1){
	alert ("hola");
	if (i == 10){
	break;
	}
	i++;
}



// No se cuando el usuario va a dejar de iterar entonces mientras el usuario no haga algo
// Forma de hacer que x vaya de a mas en mas 

x+=10 // va a aumentar de 10 en 10
x-=10 // va a decrecer de 10 en 10 




////////////////    DO WHILE     //////////////////

do {
	bloque de codigo a ejecutar. // minimo se ejecuta otra vez
} while (condicion);


do {
	dame user pass ()
	var ok= pass ingresada == pass
} while (!ok vuelvo a ejecutar)

// no se usa mucho 


////////////////    FOR    //////////////////


for (algo que se ejecuta siempre; condicion de corte; actualizacion){
	Se usa cuando conozco la longitud de lo que quiero iterar. 
	Es mas comodo. 
	Mas utilizado.
}


ej. 
var lista=...;
for (var i=0; i<lista.lenght;i++){
	
}

*/


console.log("Tabla del 9 con for")

var total;

for (var numero=0 ; numero <=10; numero++){
	total= numero*9;
	console.log(total);
}



console.log("Tabla del 9 con do/while")


var num =0;

do {
	tot= num*9;
	console.log(tot);
	num++;
}while(num <=10); 



console.log("Tabla del 9 con while")

var n = 0;

while (n<=10){
	t= n *9;
	console.log(t);
	n++;
}

/*

var total=0;
var n= 50;

for (var numero=1 ; numero <=n; numero++){
	total= total+numero;
	console.log(total);
}

var totalFinal=total/n;
console.log(totalFinal);


var total=1;
var n= 10;

for (var numero=1 ; numero<=n; numero++){
	total= total*numero;
	console.log(total);
}

*/





