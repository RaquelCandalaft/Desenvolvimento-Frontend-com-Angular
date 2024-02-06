/*
1-Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por km rodado.
Crie um método que dado a quantidade de km e o preço do combustível nos dê o valor gasto em reais para realizar este percuso.
 */

class Carros{
    marca;
    cor;
    gastoMedioPorKm;

    constructor (marca,cor,gastoMedioPorKm){
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calculaGasto(distanciaEmKm,precoCombustivel){
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }
}    

const uno = new Carros('fiat','prata', 1/12);
console.log(uno.calculaGasto(70,5));
const palio = new Carros('fiat','preto',1/10);
console.log(palio.calculaGasto(30,4.50))