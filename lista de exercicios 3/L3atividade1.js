Reales= [1, 3, 7, 15, 9, 987, 3456, 2345, 384512, 2468957888]
var Mayor=0
var Menor=Reales[1]
for (i = 0; i < Reales.length; i++) {
    if(Mayor<Reales[i])
    {
        Mayor=Reales[i]
    }  
    
    if(Menor>Reales[i])
    {
        Menor=Reales[i]
    } 
}
console.log("El Menor es: "+Menor)
console.log("El Mayor es: "+Mayor)
