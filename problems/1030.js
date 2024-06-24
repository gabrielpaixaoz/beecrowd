export function problem(lines){
    let valores = lines[0].split(' ').map(Number)
    
    let ordernar = (numeros) => [...numeros].sort((x,y) => y - x)

    let valoresOrdenados = ordernar(valores)

    let menor_Numero = valoresOrdenados[0]
    let maior_Numero = valoresOrdenados[1]
    let resto = menor_Numero % maior_Numero

    if(resto === 0){
        console.log("Sao Multiplos")
    }else{
        console.log("Nao sao Multiplos")
    }
}