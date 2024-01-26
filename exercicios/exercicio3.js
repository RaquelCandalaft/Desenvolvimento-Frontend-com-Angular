/*
O iMC é um critério da Organização Mundial da Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.
Fórmula do IMC:
IMC=peso/(altura*altura)
Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

Condição:
-Abaixo de 18.5, abaixo do peso.
-Entre 18.5 e 25, peso normal
-Entre 25 e 30, acima do peso
-Entre 30 e 40, obeso
-Acima de 40, obesidade grave
 */

const peso = 65;
const altura = 1.65;
const imc = peso/Math.pow(altura,2);

if (imc < 18.5){
    console.log (('IMC = ') +imc.toFixed(1) + (' Abaixo do peso'))
}

else if (imc >=18.5 && imc <25){
    console.log (('IMC = ') +imc.toFixed(1) + (' Peso normal'))
} 

else if (imc >=25 && imc < 30){
    console.log (('IMC = ') +imc.toFixed(1) + (' Acima do peso'))
}

else if (imc >=30 && imc< 40){
    console.log (('IMC = ') +imc.toFixed(1) + (' Obeso'))
}

else{
    console.log (('IMC = ') +imc.toFixed(1) + (' Obesidade grave'))
}