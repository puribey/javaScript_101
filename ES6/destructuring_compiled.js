"use strict";

//Asignación por destructuración(Si, asi le dicen. aka destructuring assignment)


/*hace posible la extracción de datos de arreglos u objetos usando una
sintaxis que equivale a la construcción de arreglos y objetos literales.
*/

var array = ["uno", "dos", "tres"];

// sin destructuración
var uno = array[0];
var dos = array[1];
var tres = array[2]; // necesitarias 3 lineas para asignar

// con destructuración
var uno = array[0],
    dos = array[1],
    tres = array[2]; // asignación en una sola linea

console.log(uno); //spoiler!(? -->"uno"


//¿podemos mezclar var, let y tu vieja? always!

var a, b;
var c = void 0,
    d = void 0;

//no importa que tu vieja no este asociada a un array, la metemos igual

a = 'Tu';
b = 'vieja';
c = 'esta';
d = 'buena';
var e = 'y',
    f = 'lo';
var g = 'saben',
    h = 'todos';


console.log(a, b, c, d, e, f, g, h);
// Tu vieja esta buena y lo saben todos


//podemos cambiar el orden

var x = 1;
console.log("x es " + x);
var y = 3;
console.log("y es " + y);

//cuando lo corramos X va a ser 3 e Y va a ser 1. magic!
var _ref = [y, x];
x = _ref[0];
y = _ref[1];
console.log("x es " + x);
console.log("y es " + y);

//BASTA DE ARRAYS, Y LOS OBJETOS?????

var obj = {
    tu: 'Hello',
    vieja: 'Object'
};

var tu = obj.tu,
    vieja = obj.vieja;

console.log(tu, vieja); // Hello Object
