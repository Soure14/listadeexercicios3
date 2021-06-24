var  readline  =  require ( 'readline-sync' )
var  maior_Media  =  0
var  menor_Media =  0
var  somaN  =  0
var  auxi  =  0

while  ( true ) {
    var  n  =  número . parseInt ( readline . question ( "Digite a media:" ) )
    if  ( n  <  0 ) {
        pausa
    }  else  {
        auxi ++
        somaN   =  n++
        if  ( auxi  ==  1 ) {
            maior_Media  =  menor_Media  =  n
        }  else  {
            if  ( maior_Media  <  n ) {
                maior_Media  =  n
            }

            if  ( menor_Media  >  n  ) {
                menor_Media  =  n
            }
        }
    }
    
}

var  media  =  somaN  /  auxi

console . log ( 'maior média é:' +  maior_Media )
console . log ( 'menor média é:' +  menor_Media )
console . log ( 'A média geral é:' +  media )
