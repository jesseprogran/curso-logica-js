/*
    Elabore um programa para uma pizzaria o qual leia o valor total de uma conta e quantos clientes vão pagala. calcule e informe o valor a ser pago por cliente.
*/

let valorTotal = Number(prompt("Qual o valor total da compra"));
let cliente = Number(prompt("Número de clientes"))

let result = valorTotal / cliente;

console.log(` O valor total da compra foi de R$${valorTotal.toFixed(2)} e os ${cliente} cliente vão pagar R$${result.toFixed(2)} cada um.`);