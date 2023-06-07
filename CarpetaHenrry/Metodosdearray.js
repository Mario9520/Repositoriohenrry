//los metodos son funciones nativas dentro de un lenguaje
// 
// PUSH y UNSHIFT (sirven para agregar elementos al inicio o al final del arreglo.)
var colores = ['Amarillo', 'Azul'];
colores.push('Rojo'); // al final del array.
colores.unshift('Verde'); // al inicio del array.
console.log(colores);

// POP y SHIFT (elimina elementos de un array.)
colores.shift(); //elimina y devuelve el primer elemento de un arreglo.
colores.pop(); //elimina y devuelve el último elemento de un arreglo.
console.log(colores);

// INCLUDES (sirve para evaluar si un elmento pertenece a un array.)
var pintores = ['Picasso', 'Velázquez', 'Van Gogh', 'Dalí'];
var existeDali = pintores.includes('Dalí');
console.log(existeDali);

// EVERY (si todos los elmentos de un array cumplen con una misma condicion.)
var numeros = [ 1, 6, 8, 9, 43 ];
var cumplenCondicion = n
numeros.every( ( num ) => { num > 5 } );
console.log(cumplenCondicion);

// SPLIT (separar) permite convertir arrays en string y string en arrays.
//palabra.split('separa uno por uno los elementos de un string').
var palabra = 'Henri';
var palabraSeparada = palabra.split('');
console.log(palabraSeparada);

// JOIN (unir) 
var palabraArreglada = palabraSeparada.join('');
console.log(palabraArreglada);

// FOREACH
var numeros = [ 1, 2, 3, 4 ];
numeros.forEach( (num) => { console.log(num) } )

// MAP
var numeros = [ 1, 2, 3, 4 ];
var masUno = numeros.map( (num) => { return num + 1 } );
console.log(masUno);