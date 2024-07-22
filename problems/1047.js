export function problem(lines){
    let numero = lines[0]
    let numerosImpares = []


    for(let i = numero; i <= 9999999; i++){
        if(i % 2 != 0){
            numerosImpares.push(i)
        }
        if(numerosImpares.length >= 6){
            break
        }
    }
    for(let i = 0; i <= 5; i++){
        console.log(numerosImpares[i])
    }
}