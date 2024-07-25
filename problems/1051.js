export function problem(lines){
    let qtdValores = parseInt(lines[0])
    let numeros = []
    let oddNegative = false
    let zero = false
    let oddPositive = false
    let evenNegative = false
    let evenPositive = false


    if(qtdValores < 10000){

        for(let i = 1; i <= qtdValores; i++){
            numeros.push(Number(lines[i]))
        }
    
        for(let i = 1; i <= numeros.length; i++){
            if(lines[i] % 2 != 0 && lines[i] < 0){
                oddNegative = true
                console.log("ODD NEGATIVE")
            }
            else if(lines[i] == 0){
                zero = true
                console.log("NULL")
            }
            else if(lines[i] % 2 != 0 && lines[i] > 0){
                oddPositive = true
                console.log("ODD POSITIVE")
            }
            else if(lines[i] % 2 == 0 && lines[i] < 0){
                evenNegative = true
                console.log("EVEN NEGATIVE")
            }
            else if(lines[i] % 2 == 0 && lines[i] > 0){
                evenPositive = true
                console.log("EVEN POSITIVE")
            }
        
        }
    
       
    }


}