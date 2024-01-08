export function problem (lines){
    let pi = 3.14159
    let raio = Number(lines[0])
    const area = pi * raio **2

    console.log(`A=${area.toFixed(4)}`)

}


/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n'); 
*/