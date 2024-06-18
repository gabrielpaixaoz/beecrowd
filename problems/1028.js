export function problem (lines){
const valores = lines[0].split(' ').map(Number)

const ordernar = (numeros) => [...numeros].sort((x, y) => x - y)

const valoresOrdenados = ordernar(valores)

valoresOrdenados.forEach(valor => console.log(valor))
console.log('')
valores.forEach(valor => console.log(valor))

}