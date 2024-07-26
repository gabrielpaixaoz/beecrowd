export function problem(lines){
    let N = lines[0]
    let numeros =[]


    if(N < 10000){
        for(let i = 1; i <= 10000; i++){
        if(i % N == 2){
            numeros.push(i)
        }
        }
        for(let i = 0; i < numeros.length; i++){
            console.log(numeros[i])
        }
    }

    
}