export function problem (lines){
    const [A,B,C] = lines[0].split(' ').map(Number)
    const triangulo = (A*C)/2
    const pi = 3.14159
    const circulo = pi * Math.pow(C, 2)
    const trapezio = (A+B)*C/2
    const quadrado = Math.pow(B, 2)
    const retangulo = A * B

    console.log(`TRIANGULO: ${triangulo.toFixed(3)}`)
    console.log(`CIRCULO: ${circulo.toFixed(3)}`)
    console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`)
    console.log(`QUADRADO: ${quadrado.toFixed(3)}`)
    console.log(`RETANGULO: ${retangulo.toFixed(3)}`)
}