export function problem (lines){
let dias = lines[0]
let anos = parseInt(dias/365)
dias = dias % 365
let meses = parseInt(dias/30)
dias = dias % 30



console.log(`${anos} ano(s)`)
console.log(`${meses} mes(es)`)
console.log(`${dias} dia(s)`)
}
