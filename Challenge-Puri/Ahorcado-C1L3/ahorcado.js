
// var ids = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var treinta = ["CACAO","ENANO","CABLE","JABON","MADRE",
				"FABULA","HABLAR","IBERIA","LABIAL","OBJETO",
				"ZAPALLO","SABANAS","QUEJOSA","PIADOSA","MUNDANO",
				"EBANISTA","GABINETE","CARADURA","ELEFANTE","TECHADOR",
				"FOTOGRAFIA","COMPUTADORA","DEPARTAMENTO","BRABUCONES","ESPACIALISTA",
				"ESCANDALOSO","INSOPORTABLE","GUITARRISTA","DUMBLEDORE","CHOCOLATE"];

var bajo=[];
var medio=[];
var alto=[];
var p;
var puntosGame = 0;
var restaPuntos = 5;
var nivel1 = [];
var palMagica = document.getElementById('palMagica');
var divpalabra = document.getElementById('divpalabra');
var letra;
var x = [];
//console.log(treinta[0].length);


/*********** BOTONES CON LETRAS ************/
var html = '';
var c;
for (var i = 65; 90 >= i; i++) {// A-65, Z-90
  c = String.fromCharCode(i);
  // console.log(c); //para ver las letras 
  html += '<button onclick="setLetter(\'' + c + '\');" id="'+ c +'" class="btnLetra">' + c + '</button>';
}
document.getElementById('box').innerHTML = html;

var setLetter = function(alfabeto) {

  //divpalabra.innerHTML += alfabeto;
  puntosGame = puntosGame - restaPuntos;
  document.getElementById('divPuntos').innerHTML = '<p class="txt">El total de puntos del nivel es de ' + puntosGame + ' puntos </p>';
  //console.log(alfabeto);

  for (var j=0; j<nivel1.length;j++){
  	var cont = nivel1[j].length; //cantidad de letras que tiene cada palabra
  	//console.log(cont); 
  	if (nivel1[j] == nivel1[0]){
  		for (var k=0 ; k<cont; k++){
  			//console.log(nivel1[j][k]); // cada letra de cada palabra 
  			if (nivel1[j][k]== alfabeto) {
  				//console.log(nivel1[j][k]);
  				x[k] = alfabeto;
  				divpalabra.innerHTML += alfabeto + '(' +k + ')';	
  				console.log(x[k]);
  				
  			} 
  		}
  	}
};




/************* SELECCION DE PALABRAS ************/

for (var i =0; i<treinta.length;i++){
		p = treinta[i].length;
		if (p>=5 && p<=6){
			bajo.push(treinta[i]);
		} else if (p>6 && p<=8) {
			medio.push(treinta[i]);
		} else {
			alto.push(treinta[i]);
		}
	} 

// console.log(bajo); console.log(medio); console.log(alto);


for (var i=0; i<=3;i++){
	var elegido = Math.floor(Math.random()*bajo.length);
	//console.log(bajo[elegido]);
	nivel1.push(bajo[elegido]);
	bajo.splice(elegido,1);
	//console.log(` este es el array del nivel 1: ${nivel1}`);
	
	if(nivel1[i].length == 5){
		puntosGame = puntosGame + 25;
	} else {
		puntosGame = puntosGame + 30;
	}

}	

	document.getElementById('divPuntos').innerHTML = '<p class="txt">El total de puntos del nivel es de ' + puntosGame + ' puntos </p>';
	//console.log(puntosGame);
	// return nivel1;

	for (var j=0; j<nivel1.length;j++){
		var cont = nivel1[j].length; //cantidad de letras que tiene cada palabra
		console.log(cont); 
		if (nivel1[j] == nivel1[0]){
			for (var k=0 ; k<cont; k++){
				console.log(nivel1[j][k]); // cada letra de cada palabra 
				x.push("X");
				palMagica.textContent = x;	
			}
		}
	}
	












/*
<button id="3" onClick="reply_click(this.id)">B3</button>
function reply_click(clicked_id){
    alert(clicked_id);
}
*/