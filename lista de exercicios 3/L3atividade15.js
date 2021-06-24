var  readline  =  require ( 'readline-sync' )

var  n  =  número . parseInt ( readline . question ( 'Digite um numero:' ) )

var  cont  =  0
for ( var  x  =  1 ;  x  <=  n ;  x ++ ) {
    if  ( n  %  x  ==  0   ) {
        cont ++
    }
}

if  ( cont  ==  2  ) {
    console . log ( 'O número é primo.' )

}  else  {
    console . log ( 'O número 117 não é primo.' )
}