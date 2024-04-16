export function problem (lines){
    let numeros = lines[0].split(' ')
    let mediaExame = parseFloat(lines[1])
    let mediaFinal
    
    let numerosN = numeros.map(numero => parseFloat(numero))


    let mediaP = (numerosN[0] * 2) + (numerosN[1] * 3) +(numerosN[2] * 4) + (numerosN[3] * 1)
    
    let media = mediaP / 10

    console.log(`Media: ${media.toFixed(1)}`)
    if(media >= 7){
        console.log("Aluno Aprovado.")
    }else if(media < 5.0){
        console.log("Aluno Reprovado.")
    }else if(media >= 5 && media <= 6.9){
        console.log("Aluno em Exame.")
        console.log(`Nota do exame: ${mediaExame}`)
        mediaFinal = (mediaExame + media)/2
        if(mediaFinal >= 5.0){
            console.log(`Aluno Aprovado.`)
        }else{
            console.log(`Aluno Reprovado.`)
        }
        console.log(`Media final: ${mediaFinal}`)
    }
}
