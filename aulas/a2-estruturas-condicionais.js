//verificar se o número é par
const numero = 0
const numeroPar = (numero %2)===0;
console.log(numeroPar);

if (numero === 0){
    console.log('O número é inválido')
}
    else if (numeroPar){
    console.log('Par')
}   else {console.log('ímpar')}

