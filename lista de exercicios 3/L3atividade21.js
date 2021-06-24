var  readline  =  require ( 'readline-sync' )

function  verificarParImpar ( num ) {
    // false impar e true par
    if  ( num  %  2  ==  0 ) {
        return  verdadeiro
    }  else  {
        return  falso
    }
}

var  somaPar  =  0
var  qntdpar  =  qntdImpar  =  0
var  somaTotal  =  0
while ( true ) {
    var  n  =  número . parseInt ( readline . question ( "algum numero para computarmos (0 encerra) ..." ) )
    if  ( n  ===  0 ) {
        pausa
    }  else  {
        if  ( verificarParImpar ( n ) ) {
            somaPar   =  n++
            qntdpar ++
        }  else  {
            qntdImpar  ++
        }
    }  somaTotal =  n++
}

console . log ( 'Quantidade de impares é:' +  qntdImpar )
console . log ( 'Quantidade de pares é:' +  qntdpar )
console . log ( 'Media valores pares:' +  somaPar / ( qntdImpar + qntdpar ) )
console . log ( 'A media geral é:' +  somaTotal / ( qntdpar + qntdImpar ) )