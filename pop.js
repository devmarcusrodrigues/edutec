// Função para abrir e fechar modais
function setupModal(idBotao, idModal) {
    const botao = document.getElementById(idBotao);
    const modal = document.getElementById(idModal);
    const spanFechar = modal.getElementsByClassName("fechar")[0];
    const botaoFechar = modal.getElementsByClassName("fecharModal")[0];
  
    // Abrir o modal
    botao.onclick = function() {
      modal.style.display = "block";
    };
  
    // Fechar o modal ao clicar no "x"
    spanFechar.onclick = function() {
      modal.style.display = "none";
    };
  
    // Fechar o modal ao clicar no botão "Fechar"
    botaoFechar.onclick = function() {
      modal.style.display = "none";
    };
  
    // Fechar o modal ao clicar fora dele
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }
  
  // Configurar modais para cada tipo de genética
  setupModal("classica", "modalClassica");
  setupModal("molecular", "modalMolecular");
  setupModal("evolutiva", "modalEvolutiva");
  setupModal("genomica", "modalGenomica");
  