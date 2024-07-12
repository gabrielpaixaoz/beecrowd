export function problem(lines){
    let numeros = []
    
    for(let i = 0; i <= 5; i++){
        numeros.push(lines[i])
    }

    numeros = numeros.map(function(valor){
        return Number(valor);
    })

    let numeros_filtrados = numeros.filter(function(valor){
        return valor >= 0
    })

    let soma = numeros_filtrados.reduce(function(acumulador, valorAtual){
        return acumulador + valorAtual
    }, 0);

    let contagem = numeros_filtrados.length

    let media = soma / contagem

    console.log(`${numeros_filtrados.length} valores positivos`)
    console.log(media.toFixed(1))
}