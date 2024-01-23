export function problem (lines){
    const valorTotal = lines[0]
    const notasDisponiveis = [100, 50, 20, 10, 5, 2, 1]

    function quantidadeNotas(valor, nota){
        const quantidade = Math.floor(valor /nota)
        return quantidade
    }

    function quantidadesPorNota (valor, notas){
        const listaNotas = notas.map(nota =>{
            const quantidade  = quantidadeNotas(valor, nota)
             valor = valor - (quantidade * nota)
            return {nota, quantidade}
        })
        return listaNotas
    }

    

    console.log(valorTotal)
    console.log(`${valorTotal} nota(s) de R$ 100,00`)
}