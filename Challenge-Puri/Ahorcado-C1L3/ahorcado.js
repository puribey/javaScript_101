var treinta = ["CACAO","ENANO","CABLE","JABON","MADRE",
				"FABULA","HABLAR","IBERIA","LABIAL","OBJETO",
				"ZAPALLO","SABANAS","QUEJOSA","PIADOSA","MUNDANO",
				"EBANISTA","GABINETE","CARADURA","ELEFANTE","TECHADOR",
				"FOTOGRAFIA","COMPUTADORA","DEPARTAMENTO","BRABUCONES","ESPACIALISTA",
				"ESCANDALOSO","INSOPORTABLE","GUITARRISTA","DUMBLEDORE","CHOCOLATE"];

var guess;
console.log(guess);
var bajo=[];
var medio=[];
var alto=[];
var p;
var puntosGame = 0;
var restaPuntos = 5;
var nivel1 = [];
var nivel2 = [];
var nivel3 = [];
var letrasBien = [];
var letrasMal = [];
var palabras = 0;
//console.log(treinta[0].length);

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
	var elegido1 = Math.floor(Math.random()*bajo.length);
	//console.log(bajo[elegido]);
	var elegido2 = Math.floor(Math.random()*medio.length);
	var elegido3 = Math.floor(Math.random()*alto.length);
	nivel1.push(bajo[elegido1]);
	bajo.splice(elegido1,1);

	nivel2.push(medio[elegido2]);
	medio.splice(elegido2,1);

	nivel3.push(alto[elegido3]);
	alto.splice(elegido3,1);
	
	
	if(nivel1[i].length == 5){
		puntosGame = puntosGame + 25;
	} else {
		puntosGame = puntosGame + 30;
	}

}	

console.log(`Este es el array del nivel 1: ${nivel1}`);
console.log(`Este es el array del nivel 2: ${nivel2}`);
console.log(`Este es el array del nivel 3: ${nivel3}`);

console.log(nivel1[0].length);



if (palabras == 0 ){
	alert("El Nivel 1 tiene 4 palabras. Comenzamos?");
	for(var i = 0; i < nivel1.length; i++){
		console.log(nivel1.length);
		alert(`La palabra numero ${i+1} tiene ${nivel1[i].length} letras`);
		for(var j=0; j<nivel1[i].length && letrasBien.length != nivel1[i].length; j++){
				console.log(nivel1[i].length);
				console.log(nivel1[i]);
				guess = prompt("Ingrese una letra o arriesgue una palabra").toUpperCase();
				
				if (guess == nivel1[i][j]){
					letrasBien.push(guess);
					alert(`Encontramos la letra ${guess} en la posicion ${j}`);
				} else {
					letrasMal.push(guess);
					alert(`Lo sentimos la letra ${guess} no se encuentra en la palabra. Sus letras arriesgadas son ${letrasMal}` );
				}
			
		}
		
	}
}


