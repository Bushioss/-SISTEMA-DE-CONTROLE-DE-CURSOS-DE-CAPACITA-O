for (var i = 0; i < aluno.length; i++) {
  let outAlunos = aluno[i];
  let outCursos = curso[i];
  let outProva1 = prova1[i];
  let outProva2 = prova2[i];
  let outParticipacao = participacao[i];
  let outFalta = falta[i];
  
  outProva1 = Number(outProva1);
  outProva2 = Number(outProva2);
  outParticipacao = Number(outParticipacao);
  let outMedia = (outProva1 * 0.2 + outProva2 * 0.4 + outParticipacao* 0.4) / (0.2 + 0.4 + 0.4);
  let estaAprovado = false
  if (outFalta >= 13) {
  } else if (outMedia >= 60) {
    estaAprovado = true
  }
  let outAprovado = (estaAprovado ? 'Aprovado' : 'Reprovado') //resultado
  let trTabela = document.createElement("tr");
  let tdAlunos = document.createElement("td");
  let tdCursos = document.createElement("td");
  let tdProva1 = document.createElement("td");
  let tdProva2 = document.createElement("td");
  let tdParticipacao = document.createElement("td");
  let tdMedia = document.createElement("td");
  let tdFalta = document.createElement("td");
  let tdResultado = document.createElement("td")

  tdAlunos.textContent = outAlunos
  tdCursos.textContent = outCursos
  tdProva1.textContent = outProva1
  tdProva2.textContent = outProva2
  tdParticipacao.textContent = outParticipacao
  tdMedia.textContent = outMedia.toFixed(2)
  tdFalta.textContent = outFalta
  tdResultado.textContent = outAprovado
  trTabela.appendChild(tdAlunos);
  console.log(trTabela);
  trTabela.appendChild(tdCursos);
  trTabela.appendChild(tdProva1);
  trTabela.appendChild(tdProva2);
  trTabela.appendChild(tdParticipacao);
  trTabela.appendChild(tdMedia);
  trTabela.appendChild(tdFalta);
  trTabela.appendChild(tdResultado);

  const tdTabela = document.getElementById("outTabela");

  tdTabela.appendChild(trTabela);
}

