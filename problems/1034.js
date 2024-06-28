export function problem(lines){
    let [primeiroHorario, primeiroMinuto, segundoHorario ,segundoMinuto] =  lines[0].split(' ').map(Number)
    
    let hora = (24 - primeiroHorario) + segundoHorario
    let minuto = (60 - primeiroMinuto) + segundoMinuto

    if(hora > 24){
        hora = hora - 24
    }
    if(primeiroMinuto > segundoMinuto){
        hora = hora - 1
    }

    if(hora === 24 && minuto > 0 && primeiroMinuto != segundoMinuto){
        hora = 0
    }

    if(minuto >= 60){
        minuto = minuto - 60
    }
    console.log(`O JOGO DUROU ${hora} HORA(S) E ${minuto} MINUTO(S)`)

}