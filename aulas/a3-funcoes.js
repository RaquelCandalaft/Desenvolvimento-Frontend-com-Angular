function quadrado(valor){
    return valor * valor;
}

function incrementarJuros(valor,percentualDeJuros){
    const valorDeAcrescimo = (percentualDeJuros/100)*valor;
    return valor + valorDeAcrescimo
}


const quadradoDeDez = quadrado(10)
console.log(quadradoDeDez)

console.log (incrementarJuros(100,10));