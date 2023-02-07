/*
  Elabora um programa para uma revenda de veículos.
  o programa deve ler modelo e preço do veículo. Apresentar 
  como resposta o valor da entrada (50%) e o saldo em 12x.
*/

function mostrarPromocao() {
  let inVeiculo = document.getElementById("inVeiculo");
  let inPreco = document.getElementById("inPreco");
  let outVeiculo = document.getElementById("outVeiculo");
  let outEntrada = document.getElementById("outEntrada");
  let outParcela = document.getElementById("outParcela");
  let veiculo = inVeiculo.value;
  let preco = Number(inPreco.value);
  let entrada = preco * 0.50;
  let parcela = (preco * 0.50) / 12;

  outVeiculo.textContent = "Promoção " + veiculo;
  outEntrada.textContent = "Entrada de R$: " + entrada.toFixed(3);
  outParcela.textContent = "+ 12x de R$: " + parcela.toFixed(3); 
}

let btVePromocao = document.getElementById("btVerPromocao");
btVerPromocao.addEventListener("click",  mostrarPromocao);

