//tabela geral
const btGeral = document.getElementById('btGeral');
const buscaNome = document.getElementById('pesquisaNome');
const buscaCurso = document.getElementById('inBuscaCurso');
const tdTabela = document.getElementById("outTabela");

function tabelaGeral() {
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
    let outMedia = (outProva1 * 0.2 + outProva2 * 0.4 + outParticipacao * 0.4) / (0.2 + 0.4 + 0.4);
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
    let tdResultado = document.createElement("td");
    //preenche as célucas com os dados
    tdAlunos.textContent = outAlunos
    tdCursos.textContent = outCursos
    tdProva1.textContent = outProva1
    tdProva2.textContent = outProva2
    tdParticipacao.textContent = outParticipacao
    tdMedia.textContent = outMedia.toFixed(2)
    tdFalta.textContent = outFalta
    tdResultado.textContent = outAprovado

    trTabela.appendChild(tdAlunos);
    trTabela.appendChild(tdCursos);
    trTabela.appendChild(tdProva1);
    trTabela.appendChild(tdProva2);
    trTabela.appendChild(tdParticipacao);
    trTabela.appendChild(tdMedia);
    trTabela.appendChild(tdFalta);
    trTabela.appendChild(tdResultado);

    //captura o elemento da tabela
    const tdTabela = document.getElementById("outTabela");
    //monta a tabela
    tdTabela.appendChild(trTabela);
  }
}

btGeral.addEventListener("click", tabelaGeral);

function pesquisaNomes() {
  const tdTabela = document.getElementById("outTabela");
  tdTabela.innerHTML = ""
  let trColunas = document.createElement("tr");
  let initTdAlunos = document.createElement("td");
  let initTdCursos = document.createElement("td");
  let initTdProva1 = document.createElement("td");
  let initTdProva2 = document.createElement("td");
  let initTdParticipacao = document.createElement("td");
  let initTdMedia = document.createElement("td");
  let initTdFalta = document.createElement("td");
  let initTdResultado = document.createElement("td");
  initTdAlunos.textContent = "Nome"
  initTdCursos.textContent = "Curso"
  initTdProva1.textContent = "Nota 1"
  initTdProva2.textContent = "Nota 2"
  initTdParticipacao.textContent = "Participação"
  initTdMedia.textContent = "Média Ponderada"
  initTdFalta.textContent = "% Faltas"
  initTdResultado.textContent = "Resultado"
  trColunas.appendChild(initTdAlunos);
  trColunas.appendChild(initTdCursos);
  trColunas.appendChild(initTdProva1);
  trColunas.appendChild(initTdProva2);
  trColunas.appendChild(initTdParticipacao);
  trColunas.appendChild(initTdMedia);
  trColunas.appendChild(initTdFalta);
  trColunas.appendChild(initTdResultado);
  tdTabela.appendChild(trColunas);
  for (var i = 0; i < aluno.length; i++) {
    let outAlunos = aluno[i];
    let outCursos = curso[i];
    let outProva1 = prova1[i];
    let outProva2 = prova2[i];
    let outParticipacao = participacao[i];
    let outFalta = falta[i];

    outAlunos = outAlunos.toUpperCase()
    var nomesLista = buscaNome.value.toUpperCase()
    if (outAlunos.includes(nomesLista)) {
      outProva1 = Number(outProva1);
      outProva2 = Number(outProva2);
      outParticipacao = Number(outParticipacao);
      let outMedia = (outProva1 * 0.2 + outProva2 * 0.4 + outParticipacao * 0.4) / (0.2 + 0.4 + 0.4);
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
      let tdResultado = document.createElement("td");
      //preenche as célucas com os dados
      tdAlunos.textContent = outAlunos
      tdCursos.textContent = outCursos
      tdProva1.textContent = outProva1
      tdProva2.textContent = outProva2
      tdParticipacao.textContent = outParticipacao
      tdMedia.textContent = outMedia.toFixed(2)
      tdFalta.textContent = outFalta
      tdResultado.textContent = outAprovado

      trTabela.appendChild(tdAlunos);
      trTabela.appendChild(tdCursos);
      trTabela.appendChild(tdProva1);
      trTabela.appendChild(tdProva2);
      trTabela.appendChild(tdParticipacao);
      trTabela.appendChild(tdMedia);
      trTabela.appendChild(tdFalta);
      trTabela.appendChild(tdResultado);

      //monta a tabela
      tdTabela.appendChild(trTabela);


    }
  }
}
btGeral.addEventListener("click", tabelaGeral);

function pesquisaCursos() {
  const tdTabela = document.getElementById("outTabela");
  tdTabela.innerHTML = ""
  let trColunas = document.createElement("tr");
  let initTdAlunos = document.createElement("td");
  let initTdCursos = document.createElement("td");
  let initTdProva1 = document.createElement("td");
  let initTdProva2 = document.createElement("td");
  let initTdParticipacao = document.createElement("td");
  let initTdMedia = document.createElement("td");
  let initTdFalta = document.createElement("td");
  let initTdResultado = document.createElement("td");
  initTdAlunos.textContent = "Nome"
  initTdCursos.textContent = "Curso"
  initTdProva1.textContent = "Nota 1"
  initTdProva2.textContent = "Nota 2"
  initTdParticipacao.textContent = "Participação"
  initTdMedia.textContent = "Média Ponderada"
  initTdFalta.textContent = "% Faltas"
  initTdResultado.textContent = "Resultado"
  trColunas.appendChild(initTdAlunos);
  trColunas.appendChild(initTdCursos);
  trColunas.appendChild(initTdProva1);
  trColunas.appendChild(initTdProva2);
  trColunas.appendChild(initTdParticipacao);
  trColunas.appendChild(initTdMedia);
  trColunas.appendChild(initTdFalta);
  trColunas.appendChild(initTdResultado);
  tdTabela.appendChild(trColunas);
  for (var i = 0; i < aluno.length; i++) {
    let outAlunos = aluno[i];
    let outCursos = curso[i];
    let outProva1 = prova1[i];
    let outProva2 = prova2[i];
    let outParticipacao = participacao[i];
    let outFalta = falta[i];

    outCursos = outCursos.toUpperCase()
    var cursosLista = buscaCurso.value.toUpperCase()
    if (outCursos.includes(cursosLista)) {
      outProva1 = Number(outProva1);
      outProva2 = Number(outProva2);
      outParticipacao = Number(outParticipacao);
      let outMedia = (outProva1 * 0.2 + outProva2 * 0.4 + outParticipacao * 0.4) / (0.2 + 0.4 + 0.4);
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
      let tdResultado = document.createElement("td");
      //preenche as célucas com os dados
      tdAlunos.textContent = outAlunos
      tdCursos.textContent = outCursos
      tdProva1.textContent = outProva1
      tdProva2.textContent = outProva2
      tdParticipacao.textContent = outParticipacao
      tdMedia.textContent = outMedia.toFixed(2)
      tdFalta.textContent = outFalta
      tdResultado.textContent = outAprovado

      trTabela.appendChild(tdAlunos);
      trTabela.appendChild(tdCursos);
      trTabela.appendChild(tdProva1);
      trTabela.appendChild(tdProva2);
      trTabela.appendChild(tdParticipacao);
      trTabela.appendChild(tdMedia);
      trTabela.appendChild(tdFalta);
      trTabela.appendChild(tdResultado);

      //monta a tabela
      tdTabela.appendChild(trTabela);
    }
  }
}