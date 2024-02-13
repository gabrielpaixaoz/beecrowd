export function problem (lines){
let segundos = lines[0]

let horas = parseInt(segundos / 3600)
segundos = segundos % 3600;
let minutos = parseInt(segundos / 60)
segundos = segundos % 60;
console.log(`${horas}:${minutos}:${segundos}`)

}





   
/*
let segundos = lines[0]

let horas = parseInt(segundos / 3600)
segundos = segundos % 3600;
let minutos = parseInt(segundos / 60)
segundos = segundos % 60;
console.log(`${horas}:${minutos}:${segundos}`)
    */