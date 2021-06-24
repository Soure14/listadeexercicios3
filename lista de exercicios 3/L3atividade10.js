var  readline  =  require ( "readline-sync" )
var  data1  =  readline . pergunta ( "Dados Primeira:" )
var  data2  =  readline . pergunta ( "Segunda data:" )

var  diasTotais  =  ( data2 - data1 ) * 365  // desconsiderando bissexto

for  ( var  x  =  dados1  ;  x  <=  dados2 ;  x ++  ) {
    
    // se um ano para bissexto, acrescento +1 aos dias totais
    if  ( x  %  4  ==  0  &&  x  %  100   ==  0  ||  x  %  400  ==  0 ) {
        diasTotais=+ 1
        console . log ( x )
        
    }  else  {
        console . log ( ` $ { x } não bissexto, nenhum dia foi criado.` )
    }

}

console . log ( 'Ano decorridos:' +  diasTotais )