export function problem(lines){
    const condicao1 = lines[0]
    const condicao2 = lines[1]
    const condicao3 = lines[2]
    

    if(condicao1 === "vertebrado" && condicao2 === "ave" && condicao3 === "carnivoro"){
        console.log("aguia")
    }
    else if(condicao1 === "vertebrado" && condicao2 === "ave" && condicao3 === "onivoro"){
        console.log("pomba")
    }
    else if(condicao1 === "vertebrado" && condicao2 === "mamifero" && condicao3 === "onivoro"){
        console.log("homem")
    }
    else if(condicao1 === "vertebrado" && condicao2 === "mamifero" && condicao3 === "herbivoro"){
        console.log("vaca")
    }

    else if(condicao1 === "invertebrado" && condicao2 === "inseto" && condicao3 === "hematofago"){
        console.log("pulga")
    }

    else if(condicao1 === "invertebrado" && condicao2 === "inseto" && condicao3 === "herbivoro"){
        console.log("lagarta")
    }

    else if(condicao1 === "invertebrado" && condicao2 === "anelideo" && condicao3 === "hematofago"){
        console.log("sanguessuga")
    }
    
    else if(condicao1 === "invertebrado" && condicao2 === "anelideo" && condicao3 === "onivoro"){
        console.log("minhoca")
    }





    
}