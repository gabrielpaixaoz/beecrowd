export function problem(lines){
    const diaInicial_entrada = lines[0].split(' ').map(Number)
    const diaInicial = diaInicial_entrada[1]

    const diaFinal_entrada = lines[2].split(' ').map(Number)
    const diaFinal = diaFinal_entrada[1]
    let [horaInicial, minutoInicial, segundoInicial] = lines[1].split(' : ').map(Number)
    let [horaFinal, minutoFinal, segundoFinal] = lines[3].split(' : ').map(Number)
    


    let dia = diaFinal - diaInicial

    if(horaInicial > horaFinal){
        dia = dia - 1
    }
    else if(horaInicial == horaFinal && minutoInicial > minutoFinal){
        dia = dia - 1
    }
    else if(horaInicial == horaFinal && minutoInicial == minutoFinal && segundoInicial > segundoFinal){
        dia = dia - 1
    }


    
    let hora = (24 - horaInicial) + horaFinal
    let minuto = (60 - minutoInicial) + minutoFinal
    let segundo = (60 - segundoInicial) + segundoFinal
    
    if(segundoInicial > segundoFinal){
        minuto = minuto - 1
    }

    if(segundo >= 60){
        segundo = segundo - 60
    }

    if(hora >= 24){
        hora = hora - 24
    }

    if(minutoInicial > minutoFinal && horaInicial != horaFinal){
        hora = hora - 1
    }

    if (hora === 24 && minuto > 0 && minutoInicial != minutoFinal){
        hora = 0
    }

    if(minuto >= 60){
        minuto = minuto - 60
    }

 

    console.log(`${dia} dia(s)`)
    console.log(`${hora} hora(s)`)
    console.log(`${minuto} minuto(s)`)
    console.log(`${segundo} segundo(s)`)
    
}