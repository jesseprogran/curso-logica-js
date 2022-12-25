<h1 align="center">Resoluções de Exercícios 07</h1>

## fazer jogador1 digitar um numero.
## fazer jogador2 digitar outro numero.
## se forem iguais, mostrar mensagem 'empate'.
## sortear um numero entre 0 e 1.
## se o numero sorteado for 0, ganha quem escolher o numero Menor.
## se o numero sorteado for 1, ganha quem escolher o numero Maior.

- let jogador1 = parseInt(prompt("Numero do jogador   1"));
let jogador2 = parseInt(prompt("Numero do jogador 2"));
if(jogador1 === jogador2) {
  alert(" Vocês Empataram ");
} else{
      let sorteado = parseInt(Math.random() * 2);
      alert("sorteado" + sorteado);
      if(sorteado === 0 && jogador1 < jogador2 || sorteado === 1 && jogador1 > jogador2){
        alert("JOGADOR 1 GANHOU");
      } else{
        alert("JOGADOR 2 GANHOU");
      }
}