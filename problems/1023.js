export function problem (lines){
    let [ValorA, ValorB, ValorC] = lines[0].split(' ')
    let delta = (Math.pow(ValorB,2)) - 4 * ValorA * (ValorC)
    
    let Respota1= (-ValorB + Math.sqrt(delta))/ (2 * ValorA)
    
    let Respota2 = (-ValorB - Math.sqrt(delta))/ (2 * ValorA)


    if(isNaN(Respota1) || isNaN(Respota2)){ // caso não for um número
        console.log("Impossivel calcular")
    } else{
        console.log(`R1 = ${Respota1.toFixed(5)}`)
        console.log(`R2 = ${Respota2.toFixed(5)}`)
    }


}