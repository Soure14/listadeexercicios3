var  readline  =  require ( 'readline-sync' )
var  flag  =  false
while ( true ) {
    var  soma  =  0
    var  produto  =  1
    if  ( flag ) {
        pausa
    }  else  {

        subflag  =  0
        for  ( var  x  =  1 ;  x  <=  3 ;  x ++ ) {
            var  n  =  número . parseInt ( readline . question ( "Digite um numero:" ) )
            if  ( x  ==  1 ) {
                subflag  =  n
            }  else  {
                if   ( subflag  >  n ) {
                    produto  =  0
                    flag  =  true
                    pausa
                }  else  {
                    soma = +  n
                    produto =   n*1

                }
            }
        }
        console . log ( 'A média é:' +  soma / 3  )
        console . log ( 'A soma é:' +  soma )
        console . log ( 'o produto é:' +  produto )
    }
}
