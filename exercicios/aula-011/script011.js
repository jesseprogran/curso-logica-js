function pegueNota(nota) {

  let notaA = nota >= 90 && nota <= 100;
  let notaB = nota >= 80 && nota <= 89;
  let notaC = nota >= 70 && nota <= 79;
  let notaD = nota >= 60 && nota <= 69;
  let notaF = nota  < 60 && nota >= 0;
  let notaFinal;

  if (notaA) {
    notaFinal = "A"
  } else if (notaB){
    notaFinal = "B"
  } else if (notaC){
    notaFinal = "C"
  } else if(notaD){
    notaFinal = "D"
  } else if (notaF){
    notaFinal = "F"
  } else{
    notaFinal ="Nota Inválida"
  }

  return notaFinal;

}

console.log(pegueNota(100));
console.log( pegueNota(-10));
console.log(pegueNota(70));
console.log(pegueNota(60));
console.log(pegueNota(85));
console.log(pegueNota(90));
console.log(pegueNota(68));
console.log(pegueNota(0));

