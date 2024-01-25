const numeros = [1,2,3]
const numerosDobrados = numeros.map(dobrarNumeros)

function dobrarNumeros(item){
    return item * 2
}

console.log(numerosDobrados)