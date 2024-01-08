export function problem (lines){
    const [Nota1, Nota2] = lines
    const PesoA = 3.5
    const PesoB = 7.5
    const media = (Nota1 * PesoA + Nota2 * PesoB)/ (PesoA + PesoB)
    console.log(`MEDIA = ${media.toFixed(5)}`)
}