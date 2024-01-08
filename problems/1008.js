export function problem (lines){
    const Numero = Number(lines[0])
    const Salario_hora = Number(lines[1])
    const Horas = Number(lines[2])
    const Salario  = Salario_hora * Horas
    console.log(`NUMBER = ${Numero}`)
    console.log(`SALARY = U$ ${Salario.toFixed(2)}`)
}