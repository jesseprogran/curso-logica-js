let jogador1 = parseInt(prompt("Numero do jogador 1"));
let jogador2 = parseInt(prompt("Numero do jogador 2"));
if(jogador1 === jogador2) {
  alert(" Vocês Empataram ");
} else{
    let sortear = parseInt(Math.random() * 2);
    if(sortear === 0){
        if(jogador1 < jogador2){
          alert("ganhou o jogador 1");
        }else{
          alert("ganhou o jogador 2");
        }
    }else {
       if(jogador1 > jogador2){
        alert("ganhou o jogador 1");
       }else {
        alert("ganhou o jogador 2");
       }
    }
}