//Asignación por destructuración(Si, asi le dicen. aka destructuring assignment)


/*hace posible la extracción de datos de arreglos u objetos usando una
sintaxis que equivale a la construcción de arreglos y objetos literales.
*/

var array = ["uno", "dos", "tres"];

// sin destructuración
var uno  = array[0];
var dos  = array[1];
var tres = array[2]; // necesitarias 3 lineas para asignar

// con destructuración
var [uno, dos, tres] = array; // asignación en una sola linea

console.log(uno); //spoiler!(? -->"uno"





//¿podemos mezclar var, let y tu vieja? always!

var a, b;
let c, d;

[ a, b, c, d ] = [ 'Tu', 'vieja', 'esta', 'buena' ];
//no importa que tu vieja no este asociada a un array, la metemos igual

var [ e, f ] = [ 'y', 'lo' ];
let [ g, h ] = [ 'saben', 'todos' ];

console.log( a, b, c, d, e, f, g, h );
// Tu vieja esta buena y lo saben todos



//podemos cambiar el orden

var x = 1;
console.log("x es "+x);
var y = 3;
console.log("y es "+y);

[x, y] = [y, x]; //cuando lo corramos X va a ser 3 e Y va a ser 1. magic!
console.log("x es "+x);
console.log("y es "+y);


//BASTA DE ARRAYS, Y LOS OBJETOS?????

var obj = {
    tu: 'Hello',
    vieja: 'Object'
};

var { tu, vieja } = obj;
console.log( tu, vieja ); // Hello Object
