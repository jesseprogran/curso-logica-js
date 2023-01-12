<h1 align="center">Resoluções de Exercícios 10</h1>

## Pedir para o usuário digitar um número e mostrar a tabuada desse numero de 1 a 1000.

- let numero = prompt("Digite um numero");
- numero = parseFloat(numero);

- let inicio = 1;

- while(inicio <= 1000){
  document.write(numero + ' x ' + inicio + ' = ' + (numero * inicio) + ' <br> ');

  inicio = inicio + 1;
}
document.write('TERMINOU');