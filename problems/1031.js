export function problem(lines){
let valores = lines[0].split(' ').map(Number)

let ordernar = (numeros) =>[...numeros].sort((x,y) => y - x)

let valoresOrdenados = ordernar(valores)

let A = valoresOrdenados[0]
let B = valoresOrdenados[1]
let C = valoresOrdenados[2]

if(A >= B + C){
    console.log("NAO FORMA TRIANGULO")
}
else{
    if((A*A) == (B*B) + (C*C)){
        console.log("TRIANGULO RETANGULO")
    }
    if((A*A) > (B*B) + (C*C)){
        console.log("TRIANGULO OBTUSANGULO")
    }
    if((A*A) < (B*B) + (C*C)){
        console.log("TRIANGULO ACUTANGULO")
    }
}
if (A == B && A == C){
    console.log("TRIANGULO EQUILATERO")
}
else if(A == B || A == C || C == B ){
    console.log("TRIANGULO ISOSCELES")
}

}