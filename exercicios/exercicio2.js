/*
Faça um algoritimo que dada as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo
Média=(nota 1 + nota 2 + nota 3)/3
Classificaçaõ:
-Média menor que 5, reprovação;
-Média entre 5 e 7, recuperação;
-Média acima de 7, aprovado
*/

const nota1 = 7;
const nota2 = 7;
const nota3 = 7;
const media = ((nota1 + nota2 + nota3) / 3);

if (media >= 7) {
    console.log(media);
    console.log('Aprovado')
}

else if (media >= 5 && media < 7) {
    console.log(media);
    console.log('Em recuperação')
}

else {
    console.log(media);
    console.log('Reprovado')
}