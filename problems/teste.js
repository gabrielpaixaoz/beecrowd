export function problem(lines){
    function timeToSeconds(days, hours, minutes, seconds) {
        return days * 24 * 3600 + hours * 3600 + minutes * 60 + seconds;
      }
    const diaInicial_entrada = lines[0].split(' ').map(Number)
    const diaInicio = diaInicial_entrada[1]

    const diaFinal_entrada = lines[2].split(' ').map(Number)
    const diaFim = diaFinal_entrada[1]

      
      // Datas e horas fornecidas
      const [horaInicio, minutoInicio, segundoInicio] = lines[1].split(' : ').map(Number)
      const [horaFim, minutoFim, segundoFim] = lines[3].split(' : ').map(Number)
      
      // Convertendo as datas e horas para segundos
      const inicioTotalSegundos = timeToSeconds(diaInicio, horaInicio, minutoInicio, segundoInicio);
      const fimTotalSegundos = timeToSeconds(diaFim, horaFim, minutoFim, segundoFim);
      
      // Calculando a diferença em segundos
      const diferencaSegundos = fimTotalSegundos - inicioTotalSegundos;
      
      // Convertendo a diferença para dias, horas, minutos e segundos
      const dias = Math.floor(diferencaSegundos / (24 * 3600));
      let restanteSegundos = diferencaSegundos % (24 * 3600);
      const horas = Math.floor(restanteSegundos / 3600);
      restanteSegundos %= 3600;
      const minutos = Math.floor(restanteSegundos / 60);
      const segundos = restanteSegundos % 60;
      
     console.log(`${dias} dia(s)`)
     console.log(`${horas} hora(s)`)
     console.log(`${minutos} minuto(s)`)
     console.log(`${segundos} segundo(s)`)
}
// Função para converter horas, minutos e segundos em segundos totais

  