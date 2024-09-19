const inSelect = document.getElementById('seletor');
const inCheckbox = document.getElementById('checkbox');
const btEnviar = document.getElementById('btEnviar');
const inBuscaNome = document.getElementById('inPesquisaNome');
const inBuscaCurso = document.getElementById('inBuscaCurso');
const outTabela = document.getElementById("outTabela");
const outSeletor = document.getElementById("seletor");

var Aprovado = 'Aprovado';

btEnviar.addEventListener("click", funSelect);
//função que cria as opções do select no html.
function opcoesSelect() {
  //cria novo vetor onde os cursos serão guardados nesse vetor apenas uma vez
  vetCursosLista = [];
  for (var i = 0; i < vetCurso.length; i++) {
    if (!vetCursosLista.includes(vetCurso[i])) {
      vetCursosLista.push(vetCurso[i]);
    }
  }
  for (let i = 0; i < vetCursosLista.length; i++) {
    let novaOption = document.createElement("option");
    novaOption.textContent = vetCursosLista[i];
    novaOption.value = vetCursosLista[i];
    outSeletor.appendChild(novaOption);
  }
}
//executa a função uma vez para as opções serem carregadas.
opcoesSelect();
function criarTh() {
  //gera as colunas da tabela
  outTabela.innerHTML = "";
  let trColunas = document.createElement("tr");
  let initTdAlunos = document.createElement("th");
  let initTdCursos = document.createElement("th");
  let initTdProva1 = document.createElement("th");
  let initTdProva2 = document.createElement("th");
  let initTdParticipacao = document.createElement("th");
  let initTdMedia = document.createElement("th");
  let initTdFalta = document.createElement("th");
  let initTdResultado = document.createElement("th");
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
}
function funSelect() {
  criarTh();
  for (var i = 0; i < vetAluno.length; i++) {
    let nomeAluno = vetAluno[i];
    let cursoAtual = vetCurso[i];
    let resultProva1 = vetProva1[i];
    let resultProva2 = vetProva2[i];
    let resultParticipacao = vetParticipacao[i];
    let numFaltas = vetFalta[i];
    //transforma os dados em Number para o calculo da média ponderada
    resultProva1 = Number(resultProva1);
    resultProva2 = Number(resultProva2);
    resultParticipacao = Number(resultParticipacao);
    //calcula  a média
    let mediaPonderada = (resultProva1 * 0.2 + resultProva2 * 0.4 + resultParticipacao * 0.4) / (0.2 + 0.4 + 0.4);
    let estaAprovado = false;
    if (numFaltas >= 13) {
    } else if (mediaPonderada >= 60) {
      estaAprovado = true
    }
    let resultadoDoAluno = (estaAprovado ? 'Aprovado' : 'Reprovado') //resultado (usando ternário)
    if (inCheckbox.checked == true) {
      if (cursoAtual.includes(inSelect.value) && Aprovado == resultadoDoAluno) {
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
       tdAlunos.textContent = nomeAluno;
       tdCursos.textContent = cursoAtual;
       tdProva1.textContent = resultProva1;
       tdProva2.textContent = resultProva2;
       tdParticipacao.textContent = resultParticipacao;
       tdMedia.textContent = mediaPonderada.toFixed(2);
       tdFalta.textContent = numFaltas;
       tdResultado.textContent = resultadoDoAluno;
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
      if (cursoAtual.includes(inSelect.value)) {
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
       tdAlunos.textContent = nomeAluno;
       tdCursos.textContent = cursoAtual;
       tdProva1.textContent = resultProva1;
       tdProva2.textContent = resultProva2;
       tdParticipacao.textContent = resultParticipacao;
       tdMedia.textContent = mediaPonderada.toFixed(2);
       tdFalta.textContent = numFaltas;
       tdResultado.textContent = resultadoDoAluno;
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
function pesquisaNomes() {
  criarTh();
  for (var i = 0; i < vetAluno.length; i++) {
    //guarda o elemento presente no index no valor i atual
    let nomeAluno = vetAluno[i];
    let cursoAtual = vetCurso[i];
    let resultProva1 = vetProva1[i];
    let resultProva2 = vetProva2[i];
    let resultParticipacao = vetParticipacao[i];
    let numFaltas = vetFalta[i];
    //transforma o elemento atual em nomeAluno e  todo pra maiusculo. Ex: karllos ==> KARLLOS 
    nomeAluno = nomeAluno.toUpperCase()
    var filtroNome = inBuscaNome.value.toUpperCase()
    //transforma os dados em Number para o calculo da média ponderada
    resultProva1 = Number(resultProva1);
    resultProva2 = Number(resultProva2);
    resultParticipacao = Number(resultParticipacao);
    //calcula  a média
    let mediaPonderada = (resultProva1 * 0.2 + resultProva2 * 0.4 + resultParticipacao * 0.4) / (0.2 + 0.4 + 0.4);
    let estaAprovado = false;
    if (numFaltas >= 13) {
    } else if (mediaPonderada >= 60) {
      estaAprovado = true
    }
    let resultadoDoAluno = (estaAprovado ? 'Aprovado' : 'Reprovado') //resultado
    if (inCheckbox.checked == true) {
      if (nomeAluno.includes(filtroNome) && Aprovado == resultadoDoAluno && cursoAtual.includes(inSelect.value)) {
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
        tdAlunos.textContent = nomeAluno
        tdCursos.textContent = cursoAtual
        tdProva1.textContent = resultProva1
        tdProva2.textContent = resultProva2
        tdParticipacao.textContent = resultParticipacao
        tdMedia.textContent = mediaPonderada.toFixed(2)
        tdFalta.textContent = numFaltas
        tdResultado.textContent = resultadoDoAluno
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
      if (nomeAluno.includes(filtroNome) && cursoAtual.includes(inSelect.value)) {
        let resultadoDoAluno = (estaAprovado ? 'Aprovado' : 'Reprovado') //resultado
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
        tdAlunos.textContent = nomeAluno;
        tdCursos.textContent = cursoAtual;
        tdProva1.textContent = resultProva1;
        tdProva2.textContent = resultProva2;
        tdParticipacao.textContent = resultParticipacao;
        tdMedia.textContent = mediaPonderada.toFixed(2);
        tdFalta.textContent = numFaltas;
        tdResultado.textContent = resultadoDoAluno;
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
//função que irá montar a tabela de acordo com o filtro de cursos
function pesquisaCursos() {
  //cria a primeira linha da tabela com Nome/Curso/nota1...
  criarTh();
  for (var i = 0; i < vetAluno.length; i++) {
    //guarda o elemento presente no index no valor i atual
    let nomeAluno = vetAluno[i];
    let cursoAtual = vetCurso[i];
    let resultProva1 = vetProva1[i];
    let resultProva2 = vetProva2[i];
    let resultParticipacao = vetParticipacao[i];
    let numFaltas = vetFalta[i];
    //transforma o elemento atual em nomeAluno e  todo pra maiusculo. Ex: karllos ==> KARLLOS 
    cursoAtual = cursoAtual.toUpperCase();
    var cursosLista = inBuscaCurso.value.toUpperCase();
    //transforma os dados em Number para o calculo da média ponderada
    let estaAprovado = false;
    resultProva1 = Number(resultProva1);
    resultProva2 = Number(resultProva2);
    resultParticipacao = Number(resultParticipacao);
    //calcula  a média
    let outMedia = (resultProva1 * 0.2 + resultProva2 * 0.4 + resultParticipacao * 0.4) / (0.2 + 0.4 + 0.4);
    //compara as faltas para ter o resultado final
    if (numFaltas >= 13) {
    } else if (outMedia >= 60) {
      estaAprovado = true;
    }
    let resultadoDoAluno = (estaAprovado ? 'Aprovado' : 'Reprovado');
    if (inCheckbox.checked == true) {
      if (cursoAtual.includes(cursosLista) && Aprovado == resultadoDoAluno) {
        //cria a linha da tabela e as células 
        let trTabela = document.createElement("tr");
        let tdAlunos = document.createElement("td");
        let tdCursos = document.createElement("td");
        let tdProva1 = document.createElement("td");
        let tdProva2 = document.createElement("td");
        let tdParticipacao = document.createElement("td");
        let tdMedia = document.createElement("td");
        let tdFalta = document.createElement("td");
        let tdResultado = document.createElement("td");
        //preenche as célucas com os dados no index de i
        tdAlunos.textContent = nomeAluno;
        tdCursos.textContent = cursoAtual;
        tdProva1.textContent = resultProva1;
        tdProva2.textContent = resultProva2;
        tdParticipacao.textContent = resultParticipacao;
        tdMedia.textContent = outMedia.toFixed(2);
        tdFalta.textContent = numFaltas;
        tdResultado.textContent = resultadoDoAluno;
        //preenche a linha com as células
        trTabela.appendChild(tdAlunos);
        trTabela.appendChild(tdCursos);
        trTabela.appendChild(tdProva1);
        trTabela.appendChild(tdProva2);
        trTabela.appendChild(tdParticipacao);
        trTabela.appendChild(tdMedia);
        trTabela.appendChild(tdFalta);
        trTabela.appendChild(tdResultado);
        //envia a linha para a tabela
        outTabela.appendChild(trTabela);
      }
    }
    else {
      if (cursoAtual.includes(cursosLista)) {
        resultProva1 = Number(resultProva1);
        resultProva2 = Number(resultProva2);
        resultParticipacao = Number(resultParticipacao);
        //calcula  a média
        let outMedia = (resultProva1 * 0.2 + resultProva2 * 0.4 + resultParticipacao * 0.4) / (0.2 + 0.4 + 0.4);
        let estaAprovado = false;
        //compara as faltas para ter o resultado final
        if (numFaltas >= 13) {
        } else if (outMedia >= 60) {
          estaAprovado = true;
        }
        let resultadoDoAluno = (estaAprovado ? 'Aprovado' : 'Reprovado')
        //cria a linha da tabela e as células 
        let trTabela = document.createElement("tr");
        let tdAlunos = document.createElement("td");
        let tdCursos = document.createElement("td");
        let tdProva1 = document.createElement("td");
        let tdProva2 = document.createElement("td");
        let tdParticipacao = document.createElement("td");
        let tdMedia = document.createElement("td");
        let tdFalta = document.createElement("td");
        let tdResultado = document.createElement("td");
        //preenche as célucas com os dados no index de i
        tdAlunos.textContent = nomeAluno;
        tdCursos.textContent = cursoAtual;
        tdProva1.textContent = resultProva1;
        tdProva2.textContent = resultProva2;
        tdParticipacao.textContent = resultParticipacao;
        tdMedia.textContent = outMedia.toFixed(2);
        tdFalta.textContent = numFaltas;
        tdResultado.textContent = resultadoDoAluno;
        //preenche a linha com as células
        trTabela.appendChild(tdAlunos);
        trTabela.appendChild(tdCursos);
        trTabela.appendChild(tdProva1);
        trTabela.appendChild(tdProva2);
        trTabela.appendChild(tdParticipacao);
        trTabela.appendChild(tdMedia);
        trTabela.appendChild(tdFalta);
        trTabela.appendChild(tdResultado);
        //envia a linha para a tabela
        outTabela.appendChild(trTabela);
      }
    }
  }
}
/*function criarTr() {
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
    tdAlunos.textContent = nomeAluno;
    tdCursos.textContent = cursoAtual;
    tdProva1.textContent = resultProva1;
    tdProva2.textContent = resultProva2;
    tdParticipacao.textContent = resultParticipacao;
    tdMedia.textContent = mediaPonderada.toFixed(2);
    tdFalta.textContent = numFaltas;
    tdResultado.textContent = resultadoDoAluno;
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
}*/