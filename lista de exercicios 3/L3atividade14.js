var  readline  =  require ( 'readline-sync' )

var  n  =  número . parseInt ( readline . question ( 'Digite um numero:' ) )
var  arrayP  =  [ ]
var  arrayI  =  [ ]
for ( var  x  =  1 ;  x  <=  n ;  x ++ ) {
    if ( x  %  2  ==  0 ) {
        arrayP . empurre ( x )
    }  else  {
        arrayI . empurre ( x )
    }
}

console . log ( 'Números pares da sequência:' + arrayP )
console . log ( 'Números impares da sequência:' +  arrayI )