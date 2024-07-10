export function problem(lines){
    let contas = []
    for(let i = 0; i <= 100; i++){
        contas.push(lines[i])
    }

    let contasFiltradas = contas.filter(function(valor){
        return valor !== undefined
    })

    contasFiltradas = contasFiltradas.map(function(valor){
        return Number(valor);
    })

    let soma = contasFiltradas.reduce(function(acumulador, valorAtual){
        return acumulador + valorAtual
    }, 0);

    console.log(contasFiltradas)
    console.log(soma)
}