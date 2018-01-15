var q, w, e, r, t, y;  //por un lado tenemos disintas variables

//var q; <--same, obviously
//var w;
//var e;
//var r;
//var t;
//var y;

function tuvieja() //por el otro tenemos una funcion que retorna un array
{
    return [1, 6, 7, 4, 8, 0];
}

//Aca el feature de ES6
//asigna desde la funcion los valores a las variables
//La posicion 2 7)y 4(8) nos las podemos saltear si queremos

[q, w, , r, , y] = tuvieja(); //q=1;w=6;´´=7;r=4;´´=8;y=0;

console.log(y);//tiene que consolear 0
