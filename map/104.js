const alunos = [
    { nome: 'Diogo', media: 5.5 },
    { nome: 'Julia', media: 9.5 },
    { nome: 'Roberto', media: 1.5 },
    { nome: 'Tiago', media: 6.0 }
  ];
const alunosPassados = alunos.filter(checkPass);

function checkPass(item){
    return item.media > 6.0
}

console.log(alunosPassados)
