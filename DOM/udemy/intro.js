// selectores del DOM

//document.getElementById("header") // trae el nodo
//document.getElementsByClass("list") // trae array de lista
//document.querySlectror("#header") // trae el nodo
//document.querySlectror(".list") // te aparece el nodo de la lista
//document.querySlectrorAll(".list")   // trae array de lista
//document.querySlectror(".list").children  //trae los dos items de la lista

//innerHTML para el contenido del nodo 

/********** Create things  ***********/

//ELEMENTS
//document.createElement('p') //<p></p>
//p.innerText = 'this us the created'
//document.body.appendChild(p) //para agregarle cosas al body 


//ATTRIBUTES 
//var att = document.createAttribute('id');
// att.value = "create";
//p.setAttributeNode(att);

function getElementByAttribute(attribute, value){
	var all = document.getElementsByTagName('*'); //all elements
	var found = [];

	for (var i = 0; i <all.length; i++){
		element = all[i];
		console.log(element);
		if(all[i].getAttribute(attribute) === value){
			found.push(all[i]);
			console.log("encontrado");
		}
	}
	return found;
}

getElementByAttribute('class','list');


/********** Events  ***********/

// click, resize, keydown / keypress / keyup , mouseover , load 

// CALLBACKS
// funcion que se pasa a otra funcion y se ejecutan cuando se da un evento 
/* window.addEventListener('load',function(event){
	console.log('All resources finished loading!');
}); */

document.getElementById('one').addEventListener('click',function(){
	console.log("you clicked the button");
});

var two = document.getElementById('two');
document.getElementById('two').addEventListener('mouseover',function(){
	two.innerText = "you hover";
});

//CUSTOM EVENTS

/*

document.body.addEventListener('timeEvent',stateTime);

function stateTime(e){
	alert("event time is: " +e.detail);
}

var myEvent = new CustomEvent('timeEvent', {
	'detail':new Date()
});

document.body.dispatchEvent(myEvent);

*/

/*********** AJAX (Section4) ***********/

// evita complete refresh , released in 2005 
// hace requests con HTTP
// Synchronous VS Asynchronous programming 

//AJAX AND HTTP METHODS
// get(requests or pulls), post(submits or create), delete
// Status Codes => 100 (request received and understood)
// 200 (success)
// 300 (redirections)
// 400(error)
// 500 (server's messed up) 

/*********** JSON (Section5)  ***********/

//Es un lenguaje en si mismo 
//KEYS AND VALUES (keyvalue pair)

var moana = {
	"name":"Moana",
	"age":16,
	"ocean":{
		"chosen":true,
		"voyaged":false
	}
}

console.log(moana.name); //Moana

// JSON.stringify() //turn json into a string
// JSON.parse() //turn a string into json

/*********** SCOPE  ***********/

// 2 types =>
// global (fuera de cualquier function)
// local (en la function)

// this variable => call method (count parameters) ,
// apply method (array)
// bind method(agrego un valor de this en el parametro)


/*********** ES6 (Section6)  ***********/

// TRANSPILING and POLYFILLING 
// polyfill => emulate api, fill in parts of your future code 
// transpilling => transform your code 

// LET vs CONST 
// blockscope es un bloque en una function entre {}

// let => no puede ser redefinida dentro de un scope 
// const => estas no pueden ser redefinidas en ningun lado, 
// se puede usar un mismo const dentro de un bloque 

/* const hola = "hola" // "hola"
hola = "chau" //error */


// DEFAULT VALUES 
// can be expressions or functions 
/* function hola(x=20, y=30){
	console.log(x+y);
}*/ // valor preasignado 

// DESTRUCTURING 
// pull data from objects into an array 

let person = {
	first:'lucy',
	last:'mola',
	city:'chicago'
}

let {first, last, city, friend='jack'} = person 

// let {first:firstName, last:lastName, city:cityName} = person

// swap 
/* var x = "hola"; 
var y = "chau";

[x,y]=[y,x];
x // chau 
y // hola 
*/ 

// LITERALS 
// object literals => concised methos = sintaxis concisa 
// template literals => strings y concatenacion => now `hi, ${name}!`;(interpolation)

let a = 5;
let b =10; 

function multiply(a,b){
	return a*b;
}
console.log(`Addition: a and b are ${a*b}`);
// or 
console.log(`Lets do funtion here. ${multiply}`);

//ARROW FUNCTIONS
// they are always funtion 
// they are anonymus 
// no cambia el this , se vuelve estatico 



