export function problem(lines){
    let [primeiroHorario, primeiroMinuto, segundoHorario ,segundoMinuto] =  lines[0].split(' ').map(Number)
    let horas = 24
    let minutos = 60
    if(primeiroHorario > segundoHorario){
        horas = (horas - primeiroHorario) + segundoHorario
    }
    else if(primeiroHorario < segundoHorario){
        horas = segundoHorario - primeiroHorario
    }
    else if(primeiroHorario === segundoHorario){
        horas = 0
    }
    

    if(primeiroMinuto > segundoMinuto){
        minutos = minutos - (primeiroMinuto - segundoMinuto)
        if(horas > 0){
        horas = horas - 1
        }
        
    }
    else if(primeiroMinuto < segundoMinuto){
        minutos =  segundoMinuto - primeiroMinuto
    }
    else if(primeiroMinuto === segundoMinuto){
        minutos = 0
    }

    if(primeiroHorario === segundoHorario && primeiroMinuto === segundoMinuto){
        horas = 24
        minutos = 0
    }

   
    console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`)
}