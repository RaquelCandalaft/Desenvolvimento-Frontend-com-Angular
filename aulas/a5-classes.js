class Pessoa{
    nome;
    idade;
    anoDeNascimento;

    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} `);
    }
}

const vitor = new Pessoa();
vitor.nome = 'Vitor Guerra';
vitor.idade = 25;

const renan = new Pessoa();
renan.nome = 'Renan Silva';
renan.idade = 30;

console.log(vitor);
console.log(renan);

vitor.descrever();
renan.descrever();