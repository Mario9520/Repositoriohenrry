//AND CONJUNCION (&&) PERMITE CONJUGAR DOS O MAS CONDICIONES
// SE DEBEN CUMPLIR TODAS PARA QUE EL RESULTADO SEA VERDADERO.

function mayorYMenorYPar(num) {
	if( num > 5 && num < 10  && num  % 2 === 0 ) console.log(true);
	else console.log(false);
};
mayorYMenorYPar(7);
mayorYMenorYPar(8); 


// OR DISYUNCION (||) IUGAL AL OPERADOR AND PERMITE EVALUAR DIFERNTES CONDICIONES.
// SOLO SE DEBE CUMPLIR UNA CONDICION PARA QUE REOTRNE VERDADERO.

function operadorOr(str) {
    if (str === 'Henry' || str.length < 2) console.log(true);
    else console.log(false);
 }
operadorOr('Henry');
operadorOr('Javascript');
operadorOr('H');



// NOT NEGACION ()
function negacion(permiso) {
    if (permiso) console.log('Tiene permiso');
 }
negacion(true);
negacion(false);

// FUNCNION COMPLEJA

function condicioncompleja(num){
  if (num > 9 && num % 2 === 0 || num === 3) console.log(true);
  else console.log(false); 
}
condicioncompleja(10);
condicioncompleja(8);
condicioncompleja(3);
condicioncompleja(5);

