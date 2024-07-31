export function problem(lines){
    let qtd = lines[0]
    let medias = []
    let numeros = []
    let resultados =[]
    
    for(let i = 1; i <= qtd; i++){
        medias.push(lines[i])
        
    }

    for(let i = 0; i <= medias.length; i++){
        numeros = medias[i].split(' ').map(Number)
       }
       
       
       numeros = medias[0].split(' ').map(Number)

    
    console.log(numeros)


}
