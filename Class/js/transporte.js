
//Ejercicio en clase

/* Consigna: 

Si viajo en subte = $$ - caminar - 40 min
Si viajo en bondi = $ - no caminar - 1 h
Si viajo en bici = gratis - no caminar - 1.30 hs

*/

var caminar = true;
var tiempo = true;
var dinero = 9;
var bondi =6.5;
var subte = 8;

if (dinero>=subte) {
    console.log("Voy en subte");
    if (tiempo==true) {
        console.log("Voy en bondi");
    } 
    else{
        if (caminar==true) {
            console.log("Voy en subte");
        }
        else {
            console.log("Voy en bondi");
        }
    }
}
else if (dinero>=bondi){
    console.log("Voy en bondi");
}
else{
    console.log("Voy en bici");
}