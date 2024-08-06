 let maiorNumero = Number.MIN_SAFE_INTEGER
    let valores = lines.map(item => parseInt(item))

    for(let i = 0; i <= 100; i++){
        if(valores[i] > maiorNumero){
            maiorNumero = valores[i]
        }
    }

    let posicao = valores.indexOf(maiorNumero) + 1

    console.log(maiorNumero)
    console.log(posicao)
