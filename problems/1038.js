export function problem(lines){
    let valor = parseFloat(lines[0])
    let imposto_restante
    let imposto8
    let imposto16
    let imposto_total
    if(valor >= 0 && valor <= 2000){
        console.log("Isento")
    }
    else if(valor >= 2000.01 && valor <= 3000){
        valor = valor - 2000
        imposto_restante = valor * 0.08
        console.log(`R$ ${imposto_restante.toFixed(2)}`)
        
    }
    else if(valor >= 3000.01 && valor <= 4500){
        imposto8 = 1000 * 0.08
        valor = valor - 3000
        imposto_restante = valor * 0.18
        imposto_total = imposto8 + imposto_restante
        console.log(`R$ ${imposto_total.toFixed(2)}`)

    }
    else if(valor > 4500){
        imposto8 = 1000 * 0.08
        imposto16 = 1500 * 0.18
        valor = valor - 4500
        imposto_restante = valor * 0.28
        imposto_total = imposto8 + imposto16 + imposto_restante
        console.log(`R$ ${imposto_total.toFixed(2)}`)
    }


    
}