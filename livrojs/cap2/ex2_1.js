// Declarando a função
function mostrarPrograma() {
  // obtém o conteúdo do campo (id=) nome
  let nome = document.getElementById("nome").value;
  // exibe no parágrafo (resposta): "olá " e o nome informado
  document.getElementById("resposta").textContent = "Olá " + nome;
}

// cria uma referencia ao botão (com id=) mostrar
let mostrar = document.getElementById("mostrar");
// registra para o botão "mostrar" um ouvinte para o evento click, que ao ser clicado irá chamar a função mostrarPrograma.
mostrar.addEventListener("click", mostrarPrograma)