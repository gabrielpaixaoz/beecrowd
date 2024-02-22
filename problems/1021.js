export function problem (lines){
let valor = lines[0]
let moedas = [1.00, 0.50, 0.25, 0.10, 0.05, 0.01]
let notas = [100, 50, 20, 10, 5, 2]



console.log("NOTAS:")
notas.forEach(cedulas)


function cedulas(nota){
    let qtdNotas = parseInt(valor/nota);
    console.log(`${qtdNotas} nota(s) de R$ ${nota}.00`)
    valor = valor % nota
    return valor

}

console.log("MOEDAS:")

moedas.forEach(centavos)

function centavos(moeda){
    let qtdMoedas = parseInt(valor/moeda);
    valor = valor % moeda
    let moedaFormatada = (moeda * 1).toFixed(2)
    console.log(`${qtdMoedas} moeda(s) de R$ ${moedaFormatada}`)

}

}