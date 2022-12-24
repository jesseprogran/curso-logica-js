
let nota1 = parseInt(prompt("Primeira Nota"));
let nota2 = parseInt(prompt("Segunda Nota"));
let media = (nota1 + nota2) / 2;
if (media > 5 && nota1 > 0 && nota2 > 0){
  alert("PARABÉNS!!  APROVADO.");
}else {
  alert("REPROVADO");
}