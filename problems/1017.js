export function problem (lines){
    const [horas, distancia] = lines.map(Number)
    const litro = (horas * distancia)/12
    console.log(`${litro.toFixed(3)}`)
}