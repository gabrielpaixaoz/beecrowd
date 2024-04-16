export function problem (lines){
    let numeros = lines[0].split(' ')
    
   
    let numerosN = numeros.map(numero => parseFloat(numero))


    let mediaP = (numerosN[0] * 2) + (numerosN[1] * 3) +(numerosN[2] * 4) + (numerosN[3] * 1)
    
    let media = mediaP / 10


    // 2 3 4 1

 4 + 9 + 16 + 8

    console.log(numerosN)
    console.log(media.toFixed(1))
}
