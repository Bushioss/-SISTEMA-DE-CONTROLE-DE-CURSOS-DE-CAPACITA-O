const inSelect = document.getElementById('seletor');
const inCheckbox = document.getElementById('checkbox');
const btEnviar = document.getElementById('btEnviar');
const inBuscaNome = document.getElementById('inPesquisaNome');
const inBuscaCurso = document.getElementById('inBuscaCurso');
const outTabela = document.getElementById("outTabela");

var Aprovado = 'Aprovado';

btEnviar.addEventListener("click", funSelect);

function criarThTable() {
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
  //reduzida pela função criarThTabela
  //gera as colunas da tabela
  /*outTabela.innerHTML = "";
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
  */
  criarThTable();
  for (var i = 0; i < vetAluno.length; i++) {
    var nomeAluno = vetAluno[i];
    var curso = vetCurso[i];
    var prova1 = vetProva1[i];
    var prova2 = vetProva2[i];
    var participacao = vetParticipacao[i];
    var qtFaltas = vetFalta[i];
    //os verteos abaixo, já são numbers,não precisa tranformar
    //transforma os dados em Number para o calculo da média ponderada
    //prova1 = Number(prova1);
    //prova2 = Number(prova2);
    //participacao = Number(participacao);
    //calcula  a média
    let mediaPonderada = (prova1 * 0.2 + prova2 * 0.4 + participacao * 0.4) / (0.2 + 0.4 + 0.4);
    let estaAprovado;// = false;
    if (qtFaltas >= 13) {
      //???
      estaAprovado = false;
    } else if (mediaPonderada >= 60) {
      estaAprovado = true;
    }
    let resultadoAluno = (estaAprovado ? 'Aprovado' : 'Reprovado') //resultado
    if (inCheckbox.checked == true) {
      if (curso.includes(inSelect.value) && Aprovado == resultadoAluno) {
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
        tdCursos.textContent = curso;
        tdProva1.textContent = prova1;
        tdProva2.textContent = prova2;
        tdParticipacao.textContent = participacao;
        tdMedia.textContent = mediaPonderada.toFixed(2);
        tdFalta.textContent = qtFaltas;
        tdResultado.textContent = resultadoAluno;
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
      if (curso.includes(inSelect.value)) {
        let trTabela = document.createElement("tr");
        let tdAlunos = document.createElement("td");
        let tdCursos = document.createElement("td");
        let tdProva1 = document.createElement("td");
        let tdProva2 = document.createElement("td");
        let tdParticipacao = document.createElement("td");
        let tdMedia = document.createElement("td");
        let tdFalta = document.createElement("td");
        let tdResultado = document.createElement("td");
        //preenche as célucas com os dados;
        tdAlunos.textContent = nomeAluno;
        tdCursos.textContent = curso;
        tdProva1.textContent = prova1;
        tdProva2.textContent = prova2;
        tdParticipacao.textContent = participacao;
        tdMedia.textContent = mediaPonderada.toFixed(2);
        tdFalta.textContent = qtFaltas;
        tdResultado.textContent = resultadoAluno;
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
  // //reduzida pela função criarThTabela
  //cria a primeira linha da tabela com Nome/Curso/nota1...
  /* outTabela.innerHTML = "";
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
   outTabela.appendChild(trColunas);*/
  criarThTable();

  for (var i = 0; i < vetAluno.length; i++) {
    //guarda o elemento presente no index no valor i atual
    var nomeAluno = vetAluno[i];
    var curso = vetCurso[i];
    var prova1 = vetProva1[i];
    var prova2 = vetProva2[i];
    var participacao = vetParticipacao[i];
    var qtFaltas = vetFalta[i];
    //transforma o elemento atual em listAlunos e  todo pra maiusculo. Ex: karllos ==> KARLLOS 
    nomeAluno =  nomeAluno.toUpperCase()
    var filtroNome = inBuscaNome.value.toUpperCase()
    // já sãp numbers,não precisa transformar
    //transforma os dados em Number para o calculo da média ponderada
    // listProva1 = Number(listProva1);
    // listProva2 = Number(listProva2);
    //listParticipacao = Number(listParticipacao);
    //calcula  a média
    let mediaPonderada = (listProva1 * 0.2 + listProva2 * 0.4 + listParticipacao * 0.4) / (0.2 + 0.4 + 0.4);
    let estaAprovado = false;
    if (listFaltas >= 13) {
    } else if (mediaPonderada >= 60) {
      estaAprovado = true
    }
    let resultadoAluno = (estaAprovado ? 'Aprovado' : 'Reprovado') //resultado
    if (inCheckbox.checked == true) {
      if (nomeAluno.includes(filtroNome) && Aprovado == resultadoAluno && listCursos.includes(inSelect.value)) {
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
        tdCursos.textContent = curso
        tdProva1.textContent = prova1
        tdProva2.textContent = prova2
        tdParticipacao.textContent = participacao
        tdMedia.textContent = mediaPonderada.toFixed(2)
        tdFalta.textContent = qtFaltas
        tdResultado.textContent = resultadoAluno
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
      if (listAlunos.includes(filtroNome) && listCursos.includes(inSelect.value)) {
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
  }
}

//função que irá montar a tabela de acordo com o filtro de cursos
function pesquisaCursos() {
  //reduzida pela função criarThTabela
  //cria a primeira linha da tabela com Nome/Curso/nota1...
  /*outTabela.innerHTML = ""
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
  outTabela.appendChild(trColunas);*/
  criarThTable();

  for (var i = 0; i < vetAluno.length; i++) {
    //guarda o elemento presente no index no valor i atual
    let nomeAluno = vetAluno[i];
    let curso = vetCurso[i];
    let prova1 = vetProva1[i];
    let prova2 = vetProva2[i];
    let participacao = vetParticipacao[i];
    let qtFaltas = vetFalta[i];
    //transforma o elemento atual em listAlunos e  todo pra maiusculo. Ex: karllos ==> KARLLOS 
    listCursos = listCursos.toUpperCase()
    var cursosLista = inBuscaCurso.value.toUpperCase()
    //transforma os dados em Number para o calculo da média ponderada
    let estaAprovado = false;
    //não precisa passsar para number    
    /*listProva1 = Number(listProva1);
    listProva2 = Number(listProva2);
    listParticipacao = Number(listParticipacao);*/
    //calcula  a média
    let outMedia = (listProva1 * 0.2 + listProva2 * 0.4 + listParticipacao * 0.4) / (0.2 + 0.4 + 0.4);
    //compara as faltas para ter o resultado final
    if (listFaltas >= 13) {
    } else if (outMedia >= 60) {
      estaAprovado = true;
    }
    let outAprovado = (estaAprovado ? 'Aprovado' : 'Reprovado');
    if (inCheckbox.checked == true) {
      if (listCursos.includes(cursosLista) && Aprovado == outAprovado) {
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
        tdAlunos.textContent = listAlunos;
        tdCursos.textContent = listCursos;
        tdProva1.textContent = listProva1;
        tdProva2.textContent = listProva2;
        tdParticipacao.textContent = listParticipacao;
        tdMedia.textContent = outMedia.toFixed(2);
        tdFalta.textContent = listFaltas;
        tdResultado.textContent = outAprovado;
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
      if (listCursos.includes(cursosLista)) {
        //listProva1 = Number(listProva1);
        //listProva2 = Number(listProva2);
        //listParticipacao = Number(listParticipacao);
        //calcula  a média
        let outMedia = (listProva1 * 0.2 + listProva2 * 0.4 + listParticipacao * 0.4) / (0.2 + 0.4 + 0.4);
        let estaAprovado = false;
        //compara as faltas para ter o resultado final
        if (listFaltas >= 13) {
        } else if (outMedia >= 60) {
          estaAprovado = true;
        }
        let outAprovado = (estaAprovado ? 'Aprovado' : 'Reprovado')
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
        tdAlunos.textContent = listAlunos;
        tdCursos.textContent = listCursos;
        tdProva1.textContent = listProva1;
        tdProva2.textContent = listProva2;
        tdParticipacao.textContent = listParticipacao;
        tdMedia.textContent = outMedia.toFixed(2);
        tdFalta.textContent = listFaltas;
        tdResultado.textContent = outAprovado;
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