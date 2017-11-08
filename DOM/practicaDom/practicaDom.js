var frutas = ["Manzana","Banana","Pera","Sandia","Melon"];
var lista = document.getElementById('lista'); 

var btnlistar = document.getElementById('listar');
btnlistar.addEventListener('click',myFrutas); // dos parametros, el evento y el nombre de la funcion

function myFrutas(){
	for( var i= 0 ; i<frutas.length ; i++){
		// lista.style.display = 'none';
		var li = document.createElement('li'); // tengo que crear el li dentro del bucle 
		li.textContent = frutas[i];
		lista.appendChild(li);
		li.className = 'listaloca';
	}

}

var btnlimpiar = document.getElementById('limpiar');
btnlimpiar.addEventListener('click',limpiar);
var li2 = document.getElementsByTagName('li'); // tengo que guardar los 


function limpiar(){
	for (var j = 0; j<frutas.length; j++){
	lista.removeChild(li2[0]);
	console.log(li2);
	}
}

