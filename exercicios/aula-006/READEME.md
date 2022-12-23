<h1 align="center">Resoluções de Exercícios 06</h1>

  ## Pedir para o usuário digitar dois número,
  ## Mostrar uma mensagem informando se foi aprovado ou não.
  ## A nota de corte é 5.

  - let numero1 = parseFloat(prompt("Digite a Primeira -  Nota"));
  - let numer2 = parseFloat(prompt("Digite a Segunda Nota"));
  - let media = (numero1 + numer2) / 2;

  - if(media > 6) {
     alert("Parabéns Você foi Aprovado");
  - }else{
     alert("Você foi Reprovado, Estude Mais.");
    }