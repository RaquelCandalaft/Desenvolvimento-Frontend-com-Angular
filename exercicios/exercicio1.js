/*
Faça um programa para calcular o valor de uma viagem. Você terá 5 variáveis. Sendo elas:
1-Preço do etanol
2-preço da gasolina
3-o tipo de combustivel que está no seu carro
4-Gasto médio de combustível do carro por KM
5-Distancia em KM da viagem
Imprima no console o valor que será gasto para realizar esta viagem
*/
const etanol = 5.79;
const gasolina = 7.80;
const tipo = "gasolina"
const media = 11;
let distancia = 130;


if (tipo === "etanol"){
    const totalGasto=((etanol*distancia)/media)
    console.log(totalGasto.toFixed(2))
}
    else {
        const totalGasto=((gasolina*distancia)/media)
        console.log(totalGasto.toFixed(2))

    }
