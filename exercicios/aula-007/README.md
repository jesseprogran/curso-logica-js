<h1 align="center">Resoluções de Exercícios 07</h1>

## fazer jogador1 digitar um numero.
## fazer jogador2 digitar outro numero.
## se forem iguais, mostrar mensagem 'empate'.
## sortear um numero entre 0 e 1.
## se o numero sorteado for 0, ganha quem escolher o numero Menor.
## se o numero sorteado for 1, ganha quem escolher o numero Maior.

-  let jogador1 = parseInt(prompt("Numero do jogador 1"));
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