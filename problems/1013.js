export function problem (lines){
    const [Km, distancia] = lines.map(Number)
    const calculo = Km/distancia

    console.log(`${calculo.toFixed(3)} km/l`)
}