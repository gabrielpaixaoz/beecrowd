export function problem(lines){
let NUMERO_1 = Number(lines[0])
let NUMERO_2 = Number(lines[1])


let numerosImpares = []



if(NUMERO_1 < NUMERO_2){
    
    for(let i = NUMERO_1 - 1; i < NUMERO_2;i++){
        if(i % 2 != 0){
            numerosImpares.push(i)
    }
}
}
else if(NUMERO_1 > NUMERO_2){

    for(let i = NUMERO_1 - 1; i > NUMERO_2;i--){
        if(i % 2 != 0){
            numerosImpares.push(i)
        }
    }
}

if(NUMERO_1 == NUMERO_2){
    let soma = 0
    console.log(soma)
}else{
    let soma = numerosImpares.reduce((acumlador, valor) => acumlador + valor, 0)
    console.log(soma)
}


}
