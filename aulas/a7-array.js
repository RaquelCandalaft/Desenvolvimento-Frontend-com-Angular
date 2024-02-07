const alunos = ['João','Vitor','Marina'];

alunos.push('Renan'); /*Add item na lista opção 1 */
alunos[4] = 'Vinicius'; /*Add item na lista opção2 */
alunos.push(10);

console.log(alunos[3]);
console.log(alunos);
console.log(alunos.pop()); /*remove ultimo item da lista e pode ser usado */
console.log(alunos.shift()); /*remove primeiro item da lista e pode ser usado */
console.log(alunos);
