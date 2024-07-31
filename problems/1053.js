export function problem(lines){
    let qtd = lines[0]
    let medias  = []

    for(let i = 1; i <= qtd; i++){
        medias = lines[i]
        let [A,B,C] = medias.split(' ').map(Number)
        
        let media = (A * 2 + B * 3 + C * 5)/(2 + 3 + 5)
        console.log(media.toFixed(1))
    }
}
