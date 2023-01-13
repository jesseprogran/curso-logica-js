let familia = {
  receitas: [250, 20, 300, 40],
  despesas: [20.30, 1.70, 30.45, 10.34]
}

function soma(valor){
  let total = 0;
  
  for(let value of valor) {
    total += value
  }

  return total
}


function calcularTudo() {
  const calculoReceitas = soma(familia.receitas);
  const calculoDespesas = soma(familia.despesas);

  const total = calculoReceitas - calculoDespesas ;
  const estaOk = total >= 0;
  let mensagemTexto = "Negativo";

  if(estaOk){
    mensagemTexto = "Positivo";
  }

  console.log(`Seu saldo está ${mensagemTexto}:R$${total.toFixed(3)}`);// usado o tofixed pra formatação 
}

calcularTudo()