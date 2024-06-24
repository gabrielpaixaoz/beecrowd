export function problem(lines){
let [A, B, C] = lines[0].split(' ').map(Number)
    
if(A >= B + C){
    console.log("NAO FORMA TRIANGULO")
}
if((A**2) == (B**2) + (C**2)){
    console.log("TRIANGULO RETANGULO")
}

}