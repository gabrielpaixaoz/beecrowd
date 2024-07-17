export function problem(lines){
        let numeros = []
    
        for(let i = 0; i <= 4; i++){
            numeros.push(lines[i])
        }
    
        numeros = numeros.map(function(valor){
            return Number(valor);
        })
    
        let numeros_pares = numeros.filter(function(valor){
            return valor % 2 == 0
        })
        let numeros_impares = numeros.filter(function(valor){
            return valor % 2 != 0
        })
        let numeros_positivos = numeros.filter(function(valor){
            return valor > 0
        })
        let numeros_negativos = numeros.filter(function(valor){
            return valor < 0
        })

        console.log(`${numeros_pares.length} valor(es) par(es)`)
        console.log(`${numeros_impares.length} valor(es) impar(es)`)
        console.log(`${numeros_positivos.length} valor(es) positivo(s)`)
        console.log(`${numeros_negativos.length} valor(es) negativo(s)`)

}
