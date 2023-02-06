/*

  Elaborar um programa para uma vídeo Locadora, que leia o título e a duração de um filme em minutos. Exiba o título e converta a duração para horas e minutos.

*/



// declarando a função
function horasMinuto() {
  // criar referência aos elementos da página.
  let inTitulo = document.getElementById("inTitulo");
  let inDuracao = document.getElementById("inDuracao");
  let outTitulo = document.getElementById("outTitulo");
  let outResposta = document.getElementById("outResposta");
  // obtém conteúdo dos campos de entrada.
  let titulo = inTitulo.value;
  let duracao = Number(inDuracao.value);
  // arredonda para baixo o resultado da divisão.
  let horas = Math.floor(duracao / 60);
  // obtém o resto da divisão entre os números.
  let minutos = duracao % 60;
  // altera o conteúdo dos parágrafos de resposta.
  outTitulo.textContent = titulo;
  outResposta.textContent = horas + "horas(s) e " + minutos + "minutos(s)";
}

// cria a referencia ao elemento btConverter (botão).
let btConverter = document.getElementById("btConverter");
// registra um evento associado ao botão para carregar uma função.
btConverter.addEventListener("click", horasMinuto);
