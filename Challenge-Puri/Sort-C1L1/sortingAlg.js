

var randomArr = [];

for (var i=0; i<15; i++){
	j = Math.floor(Math.random()*100);
	randomArr[i]=j;
}

console.log(`Este es el array de base ${randomArr}`);

p=randomArr.length-1; //pivote
var swap;

function quickSort(p){
for (p; p>0; p--){	
	for (var i=0 ; i < p ; i++){
		if (randomArr[p]<randomArr[i]){
			swap = randomArr[p];
			randomArr[p]=randomArr[i];
			randomArr[i]=swap;
				
		} 
	}
}
console.log(`Este es el array izq ${randomArr}`);
}

quickSort(p);





