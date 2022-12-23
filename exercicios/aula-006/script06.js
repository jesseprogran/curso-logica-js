let numero1 = parseFloat(prompt("Digite a Primeira Nota"));
let numer2 = parseFloat(prompt("Digite a Segunda Nota"));
let media = (numero1 + numer2) / 2;

if(media > 6) {
  alert("Parabéns Você foi Aprovado");
}else{
  alert("Você foi Reprovado, Estude Mais.");
}