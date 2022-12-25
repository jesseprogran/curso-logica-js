<h1 align="center">Resoluções de Exercícios 09</h1>

## Pedir para o usuário digitar dois um número de 1 a 6;
## mostrar na tela uma mensagem diferente para cada número.

  - let n1 = parseInt(prompt("Digite um Número"));
  switch(n1){
    case 1:
      alert("Muito Bom");
      break;
    case 2:
      alert("Feliz Natal");
      break;
    case 3:
      alert("Feliz Ano Novo");
      break;
    case 4:
      alert("Deus Proverá");
      break;
    case 5:
      alert("hohohoho...Papai Noél Chegou");
      break;
    case 6:
      alert("Cadê os Presentes");
      break;
    default:
      alert("ESCOLHA UM NÚMERO DE 1 A 6");           
  }