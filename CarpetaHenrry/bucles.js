// permite realizar acciones que son de caracter repetitivo de manera snecilla 

var suma = 0
//suma = suma +1;
//suma = suma +2;
//suma = suma +3;
//suma = suma +4;
//console.log (suma);
//for ([expresion-inicial]; [condicion]; [expresion-final])sentencia
for (var i = 0; i < 5; i++) {
    suma = suma + i;
    console.log('variable de interacion: ', i);
}
console.log('Variable suma: ', suma);

//while (condicion)
//sentencia
while(suma < 3) {
    suma = suma + 1;
    console.log(suma);
    };

