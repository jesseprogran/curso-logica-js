
let nota1 = parseInt(prompt("Primeira Nota"));
let nota2 = parseInt(prompt("Segunda Nota"));
let media = (nota1 + nota2) / 2;


/* Outra maneira de Resolver */

if( nota1 === 0 || nota2 === 0 || media <= 5){
  alert("REPROVADO");
}else{
  alert("PARABÉNS!!  APROVADO.");
}