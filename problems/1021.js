export function problem (lines){
let valor = lines[0];
let moedas = [1, 0.50, 0.25, 0.10, 0.05, 0.01];
let notas = [100, 50, 20, 10, 5, 2];

let resto = valor * 100;

console.log("NOTAS:");
notas.forEach(nota =>{
    const qtdNotas = Math.floor(resto / (nota * 100));
    console.log(`${qtdNotas} nota(s) de R$ ${nota.toFixed(2)}`)
    resto %= nota * 100;
}) 



console.log("MOEDAS:")

moedas.forEach(moeda =>{
    const qtdMoedas = Math.floor(resto / (moeda * 100))
    valor = valor % moeda
    console.log(`${qtdMoedas} moeda(s) de R$ ${moeda.toFixed(2)}`)
    resto %= moeda * 100;
})

/*(function cedulas(nota){
    let qtdNotas = Math.floor(valor/nota);
    console.log(`${qtdNotas} nota(s) de R$ ${nota}.00`)
    valor = valor % nota
    return valor

}

 function centavos(moeda){
    let qtdMoedas = parseInt(valor/moeda);
    valor = valor % moeda
    let moedaFormatada = (moeda * 1.0).toFixed(2)
    console.log(`${qtdMoedas} moeda(s) de R$ ${moedaFormatada}`)
*/
}


//    

