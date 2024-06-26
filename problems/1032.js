export function problem(lines){
    let [primeiroHorario, segundoHorario] = lines[0].split(' ').map(Number)
    let horas = 24
    if(primeiroHorario >= segundoHorario){
        horas = (horas - primeiroHorario) + segundoHorario
        console.log(`O JOGO DUROU ${horas} HORA(S)`)
    }
    else{
        horas = segundoHorario - primeiroHorario
        console.log(`O JOGO DUROU ${horas} HORA(S)`)

    }
}