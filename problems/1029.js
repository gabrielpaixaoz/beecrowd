export function problem(lines){
    let [a, b, c] = lines[0].split(' ').map(Number)
    let resultado
    function triangulo(n1,n2,n3){
        let perimetro = n1 + n2 + n3
        return perimetro
    }

    function trapezio(n1,n2,n3){
        let area = (n1 + n2) * n3 / 2
        return area
    }

    if(a + b > c && a + c > b && b + c > a){
        resultado = triangulo(a,b,c)
        console.log(`Perimetro = ${resultado.toFixed(1)}`)
    }
    else{
        resultado = trapezio(a, b, c)
        console.log(`Area = ${resultado.toFixed(1)}`)
    }

}