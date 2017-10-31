var plano = [
			[0,0,0,0,0,0,0,0,0,0],
			[0,0,0,2,2,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0],
			[0,1,0,0,0,0,0,0,3,0],
			[0,0,0,0,0,0,0,0,3,0],
			[0,0,0,0,0,0,0,0,3,0],
			[0,0,0,0,0,0,0,0,0,0],
			[0,0,4,4,4,4,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0]];

var planoVisible = [
			[0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0]];


var submarino =1;
var destructor=[2,2];
var crucero=[3,3,3];
var acorazado=[4,4,4,4];

var tiroSub=0;
var tiroDes=0;
var tiroCru=0;
var tiroAco=0;
var ganaste= false; 

while (ganaste==false){
var fuego1= parseInt(prompt(`Ingrese un numero del 1 al 10:`));
var fuego2= parseInt(prompt(`Ingrese otro numero del 1 al 10:`));
var tiro= plano[fuego1][fuego2];
var guess= planoVisible[fuego1][fuego2];

console.log(tiro);

toco(tiro);



function toco (tiro){
	if (tiro != 1 && tiro!= 2 && tiro!= 3 && tiro != 4){
		alert(`Agua!`);
		planoVisible[fuego1][fuego2]=" ";
		mapa(planoVisible);
	} 
	else if (tiro == 1) {
		tiroSub=1;
		alert(`Mataste al submarino!`);
		planoVisible[fuego1][fuego2]=1;
		mapa(planoVisible);
	}
	else {
		alert(`Tocado!`);
		switch(tiro){
			case 2:
			tiroDes+=1;
			planoVisible[fuego1][fuego2]=2;
			mapa(planoVisible);
			if(tiroDes==2){
				alert(`Destructor MUERTO`)
			}
			break;
			case 3: 
			tiroCru+=1;
			planoVisible[fuego1][fuego2]=3;
			mapa(planoVisible);
			if(tiroCru==3){
				alert(`Crucero MUERTO`)
			}
			break;
			case 4:
			tiroAco+=1;
			planoVisible[fuego1][fuego2]=4;
			mapa(planoVisible);
			if(tiroAco==4){
				alert(`Acorazado MUERTO`)
			}
			break;
		}
		if (tiroDes==2 && tiroCru==3 && tiroAco==4 && tiroSub==1){
			ganaste = true;
			alert(`Lu tenia razon, haz ganado maldito demonio!`);
			mapa(planoVisible);
		}
		
	}
}


}

function mapa (planoVisible){
	for(var i = 0; i < 10; i++){
		for(var j = 0; j < 10; j++){
			console.log(planoVisible[i][j]);
		}
	}
}




