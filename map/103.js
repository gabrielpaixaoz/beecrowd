const frase = ['oi','tudo','bem?']
const fraseCaps = frase.map(FunctionUpper)

function FunctionUpper(item){
    return item.toUpperCase()
}
console.log(fraseCaps)