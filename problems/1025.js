export function problem (lines){
    let  [numeroLanche, quantidadeLanche] = lines[0].split(' ')

    let preco = 0

    switch(numeroLanche){
        case '1':
            preco = 4
            break
        case '2':
            preco = 4.50
            break
        case '3':
            preco = 5
            break
        case '4':
            preco = 2
            break
        case '5':
            preco = 1.50
            break
    }

    let precoTotal = preco * quantidadeLanche

    console.log(`Total: R$ ${precoTotal.toFixed(2)}`)
}
