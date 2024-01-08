export function problem (lines){
    const [Nota1, Nota2, Nota3] = lines
    const PesoA = 2
    const PesoB = 3
    const PesoC = 5
    const media = (Nota1 * PesoA + Nota2 * PesoB + Nota3 * PesoC)/(PesoA + PesoB + PesoC)
    
    console.log(`MEDIA = ${media.toFixed(1)}`)
}