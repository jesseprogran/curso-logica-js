
let numero = prompt("Digite um numero");
numero = parseFloat(numero);

let inicio = 1;

while(inicio <= 100){
  document.write(numero + ' x ' + inicio + ' = ' + (numero * inicio) + ' <br> ');

  inicio = inicio + 1;
}
document.write('TERMINOU');
