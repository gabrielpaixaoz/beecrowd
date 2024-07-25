export function problem(lines){
    const N = Number(lines[0])
    let numeros_pares = []

    if(5 < N < 2000){
        for(let i = 1; i <= N; i++){
            if(i % 2 == 0){
                numeros_pares.push(i)
            }
        }

        for(let i = 0; i <= numeros_pares.length - 1; i++){
            console.log(`${numeros_pares[i]}^2 = ${numeros_pares[i] * numeros_pares[i]}`)
        }
    }

   
}