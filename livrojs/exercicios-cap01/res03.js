/*
    Elabore um programa para uma loja , o qual leia o preço de um produto e informe as opções de pagamentos da loja . calcule e informe o valor para pagamento a vista 10% de desconto e o valor em 3x.
*/

let precoProduto = Number(prompt("qual o preço do Produto?"));
let desconto = precoProduto * 0.10;
let avista = precoProduto - desconto;
let credito = 3;

valorTotalCredito = precoProduto / credito;

console.log(`pagamento avista com desconto foi de R$${avista.toFixed(2)}`);
console.log(`Se for no crédito fica um total de R$${precoProduto.toFixed(2)}, podendo  parcelar em até ${credito}x, ficando a parcela de R$${valorTotalCredito.toFixed(2)}.`);
