export function problem (lines){

let [valorA, valorB, valorC, valorD] = lines[0].split(' ')// tiira os espaços do array, e transforma string em array


let somaAB = valorA + valorB;
let somaCD = valorC + valorD;

if(valorB > valorC && valorD > valorA && somaCD > somaAB && valorC > 0 && valorD > 0 && valorA % 2 === 0){
    console.log("Valores aceitos")
} else{
    console.log("Valores nao aceitos")
}
}




/*const [codigo1, qtd1, valor1] = lines[0].split(' ') // transforma string em array
   const [codigo2,qtd2,valor2] = lines[1].split(' ')*/

/*Leia 4 valores inteiros A, B, C e D. , e a soma de C com D for maior que a soma de A e B e se C e D, ambos, forem positivos e se a variável A for par escrever a mensagem "Valores aceitos", senão escrever "Valores nao aceitos".
*/