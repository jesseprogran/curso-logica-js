
// function mostrarTabuada() {
//   let n1 = parseInt(prompt('Digite um número'));

//   let i = 1;

//   while(i <= 1000)
// }

// let primeiraIdade = 45;
// let segundaIdade = 45;
 
// if(primeiraIdade > segundaIdade) {
//    console.log("É Maior")
// }else if(primeiraIdade === segundaIdade) {
//    console.log("É Igual");
// }else {
//   console.log("É menor");
// }

// let expressao = (5 - 2) && (5 - ' ') && (5 - 2);
// console.log(expressao);

// let nome = "JESSÉ";
// let idade = 32;
// let possuiDoutorado = false;
// let emprego;
// let dinheiroNaConta = ' s';

// console.log(!!nome, !!idade, !!possuiDoutorado, !!emprego, !!dinheiroNaConta);

// let brasil = 207;
// let china = 1340;

// if(brasil > china) {
//   console.log("Brasil tem maior Habitantes")
// }else {
//   console.log("Brasil tem menor Habitantes")
// }



// if(('Gato' === 'gato') && (5  > 2 )){
//   console.log("Verdadeiro")
// }else {
//   console.log("Falso");
// }



function imc(peso, altura) {
  let imc = peso / (altura ** 2);
  return imc;
}

console.log(imc(115, 1.70))




function corFavorita(cor) {
  if(cor === 'vermelho'){
    return 'PT neles'
  }else if(cor === 'amarelo'){
    return 'Bolsonaro 22'
  }else {
    return ' Brasil ta lascado'
  }
}

function melhoresFilmes(filmes){
  if(filmes === 'Lagoa Azul') {
    return 'Meu melhor Filme';
  }else if(filmes === 'Homem Aranha'){
    return 'Massa de Mais';
  }else if(filmes === 'Batman'){
    return 'Não Gostei Muito';
  }else {
    return 'Não gostei dos filmes';
  }
}

console.log(melhoresFilmes('Homem Aranha'));
