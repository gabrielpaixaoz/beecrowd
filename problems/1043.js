export function problem(lines){
    let numeros = []

    for(let i = 0; i <= 4; i++){
        numeros.push(lines[i])
    }

    numeros = numeros.map(function(valor){
        return Number(valor);
    })

    let numeros_filtrados = numeros.filter(function(valor){
        return valor % 2 == 0
    })

    console.log(`${numeros_filtrados.length} valores pares`)
}