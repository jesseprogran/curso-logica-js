
// let n1 = parseFloat(prompt("Digite um número"));

// let inicio = 0;

// while( inicio <= 1000){
//   document.write(n1 + ' x ' + inicio + ' = ' + (n1 * inicio) + ' <br> ');
  
//   if(inicio % 10 === 0 && inicio > 0){
//     document.write('<hr>');
//   }

//   inicio = inicio + 1;
// }

// document.write("FIM");



// for(let i = 1; i <= 100; i++){
//   document.write(n1 + ' x ' + i + ' = ' + (n1 * i) + ' <br> ');

// }





let ano = 1004;

while(ano <= 2021){

  if(!(ano % 100 === 0) || (ano % 400 === 0)){
     document.write(ano + ' <br> ');
  }else{
    document.write(ano + " não é bissexto <br>");
  }
 
  ano += 4;
}