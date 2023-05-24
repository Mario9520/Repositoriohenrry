// funcion

function sumatres(x) {
    console.log(x + 3);
};
sumatres(5);

//pirmero forma 
function sumatres(x) {
 return x + 3;
};

//segundo forma

var sumatres = function(x){
    return x + 3;
};

//tercero forma

var sumatres = (x) => {
    return x + 3;
};

//ejemplo de consol.log
// se debe eliminar despues de usar, 
//solo funciona com una ayuda visual al momento de prograr.

var animal = "caballo"

console.log(animal);

// funcion2.js

function cuidadoconelconsolelog(nombre){
    console.log(nombre);
    return nombre;
}

function otrafuncion() {
    return (
        "el nombre retornado por la funcion 'cuidadoconelconsolelo' es:"+
        cuidadoconelconsolelog('camilo'));
}




