function escrevaMeuNome(nome){
    return'Meu nome é: '+ nome
}


function verificaIdade(idade){
    if (idade >= 18){
        console.log(escrevaMeuNome('Raquel')+' Você é maior de idade');
    }else{
          console.log('Sorry');
        }
}

verificaIdade(18);