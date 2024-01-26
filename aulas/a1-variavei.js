/*
Faça um programa para calcular o valor de uma viagem.
Você terá 3 variáveis. Sendo elas:
1-Preço do combustível
2-Gasto médio de combustível do carro por KM
3-Distancia em KM da viagem

Imprima no console o valor que será gasto de combustível para realizar esta viagem
*/

const preco = 5.79;
const media = 10;
let distancia = 100;

let totalGasto=(preco*distancia)/media;
console.log(totalGasto.toFixed(2)); //toFixed(2)= Este método retorna uma string que representa o número com o número desejado de casas decimais.