export function problem (lines){
    let numeros = lines[0].split(' ')
    let mediaExame = parseFloat(lines[1])
    let mediaFinal
    
    let numerosN = numeros.map(numero => parseFloat(numero))


    let mediaP = (numerosN[0] * 2) + (numerosN[1] * 3) +(numerosN[2] * 4) + (numerosN[3] * 1)
    
    let media = mediaP / 10

    console.log(`Media: ${media.toFixed(1)}`)
    if(media >= 7){
        console.log("Aluno aprovado.")
    }else if(media < 5.0){
        console.log("Aluno reprovado.")
    }else if(media >= 5 && media <= 6.9){
        console.log("Aluno em exame.")
        console.log(`Nota do exame: ${mediaExame.toFixed(1)}`)
        mediaFinal = (mediaExame + media)/2
        if(mediaFinal >= 5.0){
            console.log(`Aluno aprovado.`)
        }else{
            console.log(`Aluno reprovado.`)
        }
        console.log(`Media final: ${mediaFinal.toFixed(1)}`)
    }
}
