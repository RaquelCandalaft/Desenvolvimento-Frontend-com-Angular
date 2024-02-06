/*
Crie uma classe para representar pessoas. Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC=peso/(altura*altura)).
Instancie uma pessoa chamada José que tenha 70kg e 1.75 de altura e peça ao José dizer o valor de seu IMC.
 */

class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calcularImc(){
        return (this.peso / (this.altura*this.altura)).toFixed(2);
    }

    classificarImc(){
        const imc = this.calcularImc();
        if (imc < 18.5){
            return ('Abaixo do peso');
        }
        
        else if (imc >=18.5 && imc <25){
            return ('Peso normal');
        } 
        
        else if (imc >=25 && imc < 30){
            return ('Acima do peso');
        }
        
        else if (imc >=30 && imc< 40){
            return ('Obeso');
        }
        
        else{
            return ('Obesidade grave');
        }
    }
}    

jose = new Pessoa('José',70,1.75);
console.log(jose.calcularImc(70,1.75));
console.log(jose.classificarImc());

const raquel = new Pessoa('Raquel',68,1.65);
console.log(raquel.calcularImc());
console.log(raquel.classificarImc());
