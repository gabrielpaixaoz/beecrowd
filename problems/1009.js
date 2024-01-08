export function problem (lines){
    const salario = Number(lines[1])
    const vendas = Number(lines[2])
    const porcentual = 0.15
    const aumento = vendas * porcentual
    const SalarioTotal = salario + aumento
    
    console.log(`TOTAL = R$ ${SalarioTotal.toFixed(2)}`)
}