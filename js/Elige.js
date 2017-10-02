alert("Usted avanza al Este.");
if (confirm("Se encuentra a un OSO. Deseas enfrentarlo? (Aceptar=SI Cancelar=NO") == true) {
    txt = "El oso te lastima. Avance al Este hasta el Hospital";
    alert("Tu estupida valentia te recompensó con una enfermerita del amor y deciden ir a bailar al SUR. THE END");
} 

else {
    txt = "Escapas cobardemente al SUR y te encuentras un tractor.";
    var respuesta;
	do{	
        var respuesta=prompt("Te subes al tractor. Decides ir al SUR(1), al ESTE(2) o al OESTE?(3)?");
        if (respuesta==1){
            alert("Te aburrés de manejar, vas a casa a ver NETFLIX y te quedás dormido ZzZzzz... THE END")
        }
        else if (respuesta==2){
            alert("Manejas al ESTE, y ves a una enfermera saliendo del hospital. La impresionas con tu TRACTOR y la invitas a bailar al SUR. THE END")
        }
        else if (respuesta==3) {
            alert("FIREEEE!!! Tienes un accidente y te vas directo al INFIERNO, digo, SUR. THE END")
        }
        else {
            alert("Respuesta invalida")
        }
    }
    while (respuesta!=1 || respuesta!=2 || respuesta!=3);
}