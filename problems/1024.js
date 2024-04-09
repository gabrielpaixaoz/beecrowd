export function problem (lines){
const numero = lines[0];

if(numero >= 25.01 && numero <= 50.00){
    console.log("Intervalo (25,50]")
}else if(numero <= 25.00 && numero >= 0){
    console.log("Intervalo [0,25]")
}else if(numero >= 75.01 && numero <= 100.00){
    console.log("Intervalo (75,100]")
}else if(numero >= 50.01 && numero <= 75.00){
    console.log("Intervalo (50,75)")
}else{
    console.log("Fora de intervalo")
}



}
