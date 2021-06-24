var  readline  =  require ( 'readline-sync' )
var par  =  8
var impar  =  0
while  ( true ) {
    var  n  =  Número ( readline . question ( "Digite um numero:" ) )
    if  ( n  >  1000 ) {
        pausa
    }  else  {
        if  ( n  %  2  ==  0 ) {
          soma_par  = + n
        }  else   {
           soma_impar   = + n
        }
    }
}

console . log ( 'A soma dos números pares é:' +  par )
console . log ( 'A soma dos números impares é:' +  impar )