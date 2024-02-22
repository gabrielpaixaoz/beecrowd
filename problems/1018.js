export function problem (lines){
    let valor = lines[0]
    const notas = [100, 50, 20, 10, 5, 2, 1]

    console.log(valor)

    notas.forEach(cedulas)

    function cedulas(nota){
        let qtdNotas = parseInt(valor/nota);
        console.log(`${qtdNotas} nota(s) de R$ ${nota},00`)
        valor = valor % nota
        return valor
    }

    console.log(valor)
}





























/*
    console.log(valor)

    notas.forEach(divisionCedules);

    function divisionCedules(nota){
        let qtdNotas = parseInt(valor/nota);
        console.log(`${qtdNotas} nota(s) de R$ ${nota},00`)
        valor = valor % nota
    }



}

 for (let nota of notas){
    let qtdNotas= parseInt(valor/nota);
    console.log(`${qtdNotas} notas(s) de ${nota},00`)
    valor = valor % nota;
} */







    /* function quantidadeNotas(valor, nota){
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

    function mostrarNotasNecessarias (valor, notas){
        const notasNecessarias = quantidadesPorNota(valor, notas)

        console.log(valor)

        notasNecessarias.forEach(({quantidade, nota})=>{
            console.log(`${quantidade} nota(s) de R$ ${nota},00`)
        }) 
    }

    mostrarNotasNecessarias(valorTotal, notasDisponiveis)
} 
*/