function salvarNomes() {
    // Obter os valores dos campos de texto
    var nome1 = document.getElementById("nome1").value;
    var nome2 = document.getElementById("nome2").value;
    var nome3 = document.getElementById("nome3").value;
    
    // Verificar se os campos estão preenchidos
    if (nome1 == "" || nome2 == "" || nome3 == "") {
      document.getElementById("mensagem").innerHTML = "Por favor, preencha todos os campos.";
      document.getElementById("mensagem").style.display = "block";
      return;
    }
    
    // Limpar a mensagem de erro, caso exista
    document.getElementById("mensagem").innerHTML = "";
    document.getElementById("mensagem").style.display = "none";
    
    // Adicionar os nomes na lista
    var listaNomes = document.getElementById("listaNomes");
    var li1 = document.createElement("li");
    li1.appendChild(document.createTextNode(nome1));
    var li2 = document.createElement("li");
    li2.appendChild(document.createTextNode(nome2));
    var li3 = document.createElement("li");
    li3.appendChild(document.createTextNode(nome3));
    listaNomes.innerHTML = "";
    listaNomes.appendChild(li1);
    listaNomes.appendChild(li2);
    listaNomes.appendChild(li3);
  }