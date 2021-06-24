var  realine  =  require ( 'readline-sync' )

var  inicial  =  Número . parseInt ( realine . question ( 'valor inicial:' ) )
var  razao  =  Número . parseInt ( realine . question ( 'razao:' ) )

for ( var  x  =  1 ;  x  <=  10 ;  x ++ ) {
    console . log ( 'termo:' +   (  inicial * ( razao ** x )  )  )
}
