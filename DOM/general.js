var cajas = document.getElementsByClassName('caja');

cajas[0].textContent = "Chau mundo";

var segundaCaja = document.getElementById('segundaCaja');

segundaCaja.innerHTML = '<h3>Hola planeta</h3>'

var caja = document.createElement('div');
var contenido = document.createTextNode('Hello');
caja.appendChild(contenido);
caja.setAttribute('class','caja');

var contenedor = document.getElementById('contenedor');
contenedor.appendChild(caja);

