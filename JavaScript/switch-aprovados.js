// nomes das matérias
//"Python Pandas: tratando e analisando dados", 
//"JavaScript: interfaces e Herança em Orientação a Objetos", 
//"React Native: criando um app",
//"Bootstrap 4: criando uma landing page responsiva", 
//"Kotlin e Spring: segurança e infraestrutura", 
//"Reconhecimento de imagens: Twitter e Computer Vision API", 
//"Lógica de programação I: crie programas com Javascript e HTML",
//"HTML5 e CSS3: crie uma página da Web", 
//"UX: metodologias práticas para designers", 
//"Modelagem de banco de dados relacional: modelagem lógica e física"

const inSelect = document.getElementById('seletor');
const inCheckbox = document.getElementById('checkbox');
const btEnviar = document.getElementById('btEnviar');
const tdTabela = document.getElementById("outTabela");

btEnviar.addEventListener("click", checkar);

function checkar() {
    console.log(inSelect.value);
    console.log(inCheckbox.value);
    outTabela.innerHTML = ""
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
    outTabela.appendChild(trColunas);
    for (var i = 0; i < aluno.length; i++) {
      let outAlunos = aluno[i];
      let outCursos = curso[i];
      let outProva1 = prova1[i];
      let outProva2 = prova2[i];
      let outParticipacao = participacao[i];
      let outFalta = falta[i];
        inSelect
        inCheckbox
      switch (inSelect, inCheckbox) {
        case(inSelect == "pythonPandas" && inCheckbox == "Aprovados"):
            alert()
            break;
      
        default:
            break;
      } 
}
}
//resolver botao