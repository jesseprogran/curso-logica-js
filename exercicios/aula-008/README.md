<h1 align="center">Resoluções de Exercícios 08</h1>

## Pedir para o usuário digitar dois número;
## mostrar uma mensagem informando se foi aprovado ou não.
## a nota de corte é 5.
## contudo, se qualquer uma das notas for zero, reprova automaticamente.

- let nota1 = parseInt(prompt("Primeira Nota"));
- let nota2 = parseInt(prompt("Segunda Nota"));
- let media = (nota1 + nota2) / 2;
   if (media > 5 && nota1 > 0 && nota2 > 0){
   alert("PARABÉNS!!  APROVADO.");
   }else {
   alert("REPROVADO");
   }