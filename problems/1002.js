export function problem (lines){
    let n = 3.14159
    let raio = lines[0]
    let Aoriginal = n * Math.pow(raio, 2)
    let A = parseFloat(Aoriginal.toFixed(4))




    console.log(`A=${A}`)

}


/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n'); 
*/