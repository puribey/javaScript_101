// var cajas = document.getElementsByTagName('div');
var cajas = document.getElementsByClassName('caja'); // todas las clases se meten en un array

cajas[0].textContent = "Chau mundo";

var segundaCaja = document.getElementById('segundaCaja');

segundaCaja.innerHTML = '<h3>Hola planeta</h3>' // crear un etiqueta html dentro de otro elemento

var caja = document.createElement('div');
var contenido = document.createTextNode('Hello');
caja.appendChild(contenido);
caja.setAttribute('class','caja violeta'); // dar atributos a una var 

var contenedor = document.getElementById('contenedor'); 
contenedor.appendChild(caja); // uso para meterle un hijo a algo

segundaCaja.style.background = 'blue'; // uso de etiqueta Style para dar estilo

// contenedor.insertBefore(caja, cajas[2]); // movemos caja a posicion deseada

//contenedor.replaceChild(caja, cajas[2]); // saca uno y pone otro 
contenedor.removeChild(caja,cajas[4]);