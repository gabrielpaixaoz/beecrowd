export function problem (lines){
   const [codigo1, qtd1, valor1] = lines[0].split(' ') // transforma string em array
   const [codigo2,qtd2,valor2] = lines[1].split(' ')

   const valorPago = (qtd1 * valor1) + (qtd2 * valor2)

   console.log(`VALOR A PAGAR: R$ ${valorPago.toFixed(2)}`)
}