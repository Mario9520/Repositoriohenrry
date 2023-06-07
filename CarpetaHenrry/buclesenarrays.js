// FOR
var arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}

// encontrar letra p
function encontrarletrap(string){
    var letras = string.split('');

    for(let i = 0; i < letras.length; i++) {
     if(letras[1] === "p"){
        console.log("si contiene la letra p");
     }   
    }
}
encontrarletrap("javascript");
encontrarletrap("Henrry");

// WHILE
var arr = [];
while (arr.length < 5) {
   arr.push('boom');
}
console.log(arr);

// ejmeplo poco comun (intentar evitar)
//var arr = [];
//var n = 1;
//while (n < 3){
//    arr.push(Math.random())
//}

