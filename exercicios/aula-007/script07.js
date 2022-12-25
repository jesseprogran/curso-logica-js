let jogador1 = parseInt(prompt("Numero do jogador 1"));
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