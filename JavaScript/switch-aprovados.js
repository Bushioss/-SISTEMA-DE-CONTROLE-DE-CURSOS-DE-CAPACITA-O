const inSelect = document.getElementById('seletor');
const inCheckbox = document.getElementById('checkbox');
const btEnviar = document.getElementById('btEnviar');
const outTabela = document.getElementById("outTabela");

var Aprovado = 'Aprovado'

btEnviar.addEventListener("click", checkar);

function checkar() {
  //gera as colunas da tabela
  outTabela.innerHTML = "";
  let trColunas = document.createElement("tr");
  let initTdAlunos = document.createElement("td");
  let initTdCursos = document.createElement("td");
  let initTdProva1 = document.createElement("td");
  let initTdProva2 = document.createElement("td");
  let initTdParticipacao = document.createElement("td");
  let initTdMedia = document.createElement("td");
  let initTdFalta = document.createElement("td");
  let initTdResultado = document.createElement("td");
  initTdAlunos.textContent = "Nome";
  initTdCursos.textContent = "Curso";
  initTdProva1.textContent = "Nota 1";
  initTdProva2.textContent = "Nota 2";
  initTdParticipacao.textContent = "Participação";
  initTdMedia.textContent = "Média Ponderada";
  initTdFalta.textContent = "% Faltas";
  initTdResultado.textContent = "Resultado";
  trColunas.appendChild(initTdAlunos);
  trColunas.appendChild(initTdCursos);
  trColunas.appendChild(initTdProva1);
  trColunas.appendChild(initTdProva2);
  trColunas.appendChild(initTdParticipacao);
  trColunas.appendChild(initTdMedia);
  trColunas.appendChild(initTdFalta);
  trColunas.appendChild(initTdResultado);
  outTabela.appendChild(trColunas);

  for (var i = 0; i < vetAluno.length; i++) {
    let listAlunos = vetAluno[i];
    let listCursos = vetCurso[i];
    let listProva1 = vetProva1[i];
    let listProva2 = vetProva2[i];
    let listParticipacao = vetParticipacao[i];
    let listFaltas = vetFalta[i];
    //transforma os dados em Number para o calculo da média ponderada
    listProva1 = Number(listProva1);
    listProva2 = Number(listProva2);
    listParticipacao = Number(listParticipacao);
    //calcula  a média
    let mediaPonderada = (listProva1 * 0.2 + listProva2 * 0.4 + listParticipacao * 0.4) / (0.2 + 0.4 + 0.4);
    let estaAprovado = false
    if (listFaltas >= 13) {
    } else if (mediaPonderada >= 60) {
      estaAprovado = true
    }

    let outAprovado = (estaAprovado ? 'Aprovado' : 'Reprovado') //resultado
    //Switch que decide qual caso de acordo com o valor do Select
    if (inCheckbox.checked == true) {
      if (listCursos.includes(inSelect.value) && Aprovado == outAprovado) {
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
        tdAlunos.textContent = listAlunos;
        tdCursos.textContent = listCursos;
        tdProva1.textContent = listProva1;
        tdProva2.textContent = listProva2;
        tdParticipacao.textContent = listParticipacao;
        tdMedia.textContent = mediaPonderada.toFixed(2);
        tdFalta.textContent = listFaltas;
        tdResultado.textContent = outAprovado;
        trTabela.appendChild(tdAlunos);
        trTabela.appendChild(tdCursos);
        trTabela.appendChild(tdProva1);
        trTabela.appendChild(tdProva2);
        trTabela.appendChild(tdParticipacao);
        trTabela.appendChild(tdMedia);
        trTabela.appendChild(tdFalta);
        trTabela.appendChild(tdResultado);
        //monta a tabela
        outTabela.appendChild(trTabela);
      }
    }
    else {
      if (listCursos.includes(inSelect.value)) {
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
        tdAlunos.textContent = listAlunos
        tdCursos.textContent = listCursos
        tdProva1.textContent = listProva1
        tdProva2.textContent = listProva2
        tdParticipacao.textContent = listParticipacao
        tdMedia.textContent = mediaPonderada.toFixed(2)
        tdFalta.textContent = listFaltas
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
        outTabela.appendChild(trTabela);
      }
    }
  }
}
checkar();