// Crie uma função para verificar se um valor é Truthy;
function minhaIdade(idade) {
  return  !!idade;
}


//Crie uma função matemática que retorne o perímetro de um quadrado 
// lembrando: Perímetro é a soma dos quatro lado do quadrado;

function perimetroQuadrado(soma){
   return soma * 4
}

console.log(perimetroQuadrado(40))


//Crie uma função que retorne o seu nome e sobre nome completo
// Ela deve possuir os parâmetro: nome e sobre nome;

function nomeCompleto(nome, sobrenome) {
  return nome + " " + sobrenome;
  return ` ${nome} ${sobrenome}` ; // usando o template strings
}

console.log(nomeCompleto('Jessé', 'Silva'));

// Crie uma função que verifica se o número é par;

function verificarNumeroEPar(numero){
    let resto = numero  %  2;
    if(resto === 0){
      return "esse número é  par"
    }else {
      return "esse número é impar"
    }
}