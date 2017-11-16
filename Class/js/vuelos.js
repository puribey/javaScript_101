var vueloLargo = 1000;
var hostel = 100;
var vueloCorto = 1500;
var dias = 6;

alert("Su vuelo + el hostel vale $"+(vueloLargo + (hostel*dias))+".-")

if (vueloLargo + (hostel*dias) < vueloCorto){
	alert("Tomar vuelo largo");
} 

else {
	alert("Tomar vuelo corto");
}