export function problem (lines){
let posicoes_new = posicoes.map(posicao => parseFloat(posicao))

    let posicaoX = posicoes_new[0]
    let posicaoY = posicoes_new[1]
    
    
    if(posicaoX > 0 && posicaoY > 0){
        console.log("Q1")
    }
    else if(posicaoX > 0 && posicaoY < 0){
        console.log("Q4")
    }
    else if(posicaoX < 0 && posicaoY > 0){
        console.log("Q2")
    }
    else if(posicaoX < 0 && posicaoY < 0){
        console.log("Q3")
    }
    else if(posicaoX == 0 && posicaoY > 0 || posicaoY < 0){
        console.log("Eixo Y")
    }
    else if(posicaoX > 0 || posicaoX < 0 && posicaoY == 0){
        console.log("Eixo X")
    }
    else if(posicaoX == 0 && posicaoY == 0){
        console.log("Origem")
    }
}