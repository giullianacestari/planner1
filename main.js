function adicionarLinha() {
  var tabela = document.getElementById("tabelaTarefas");
  var linha = tabela.insertRow();
  var celulaDisciplina = linha.insertCell(0);
  var celulaDescricao = linha.insertCell(1);
  var celulaPrazo = linha.insertCell(2);
  var celulaStatus = linha.insertCell(3);

  celulaDisciplina.innerHTML =
    "<input type='text' id='novaTarefa' name='novaTarefa' placeholder='digite'>";
  celulaDescricao.innerHTML =
    "<input type='text' id='descricaoTarefa' name='descricaoTarefa' >";
  celulaPrazo.innerHTML =
    "<input type='date' id='prazoTarefa' name='prazoTarefa' >";
  celulaStatus.innerHTML =
    "<input type='checkbox' id='statusTarefa' name='statusTarefa' >";
}

