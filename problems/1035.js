export function problem(lines){
    let salario = parseFloat(lines[0])
    let reajuste
    let porcentual
    let novo_salario = 0
    
    if(salario >= 0 && salario <= 400){
        reajuste = salario * 0.15
        porcentual = 15
    }
    else if(salario >= 400.01 && salario <= 800){
        reajuste = salario * 0.12
        porcentual = 12
    }
    else if(salario >= 800.01 && salario <= 1200){
        reajuste = salario * 0.10
        porcentual = 10
    }
    else if(salario >= 1200.01 && salario <= 2000){
        reajuste = salario * 0.07
        porcentual = 7
    }
    else if(salario > 2000){
        reajuste = salario * 0.04
        porcentual = 4
    }

    novo_salario = salario + reajuste


    console.log(`Novo salario: ${novo_salario.toFixed(2)}`)
    console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`)
    console.log(`Em percentual: ${porcentual} %`)
}