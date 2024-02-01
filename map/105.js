const dimensoes = [
    { altura: 10, comprimento: 20},
    { altura: 2, comprimento: 4},
    { altura: 1, comprimento: 1},
    { altura: 50, comprimento: 50}
  ]
    const soma = dimensoes.map(somando);

    function somando(item){
        return item.altura * item.comprimento
    }

    let teste = soma.reduce((total,valor) => total + valor, 0);


console.log(teste)
