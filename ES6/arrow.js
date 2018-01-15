//Función Arrow

var data = [1, 2, 3];
data.forEach(function(elem){
    console.log(elem)
});

data.forEach(elem => { //primero el parametro y luego la flecha function
	console.log(elem);
});


var miFuncion = function(num) {
	return num + num;
}

var miFuncion = (num) => num + num; //parametro,flecha function + return

console.log(miFuncion(3));
