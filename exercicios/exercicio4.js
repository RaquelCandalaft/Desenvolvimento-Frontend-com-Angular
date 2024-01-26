/*
Elabore um algoritmo em javascript que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o calculo adequado.
Código Condição de Pagamento
1-À vita no débito, recebe 10% de desconto
2-À vista no dinheiro ou pix, recebe 15% de desconto
3-Em duas vezes, preço normal de etiqueta sem juros
4-Acima de duas vezes, preço normal da etiqueta mais juros de 10% 

 */

const precoDaEtiqueta = 100
const formaDePagamento = 4

if (formaDePagamento === 1 ){
    console.log=(precoDaEtiqueta - (precoDaEtiqueta*0.1))

} else if(formaDePagamento===2){
    console.log=(precoDaEtiqueta - (precoDaEtiqueta*0.15))

}else if (formaDePagamento===3){
    console.log(precoDaEtiqueta)

}else{
    console.log(precoDaEtiqueta+(precoDaEtiqueta*0.1))
}
