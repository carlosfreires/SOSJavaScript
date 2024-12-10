{/*Operador de Atribuição E (&&=)   O operador de atribuição E (&&=) é uma forma concisa e eficiente de atribuir um valor a uma variável apenas se essa variável já tiver um valor truthy. Em outras palavras, ele serve como um atalho para verificar se uma variável já possui um valor considerado verdadeiro e, se sim, atribuir um novo valor.
Sintaxe:
variavel &&= valor;
Se variavel for truthy (qualquer valor que não seja false, 0, -0, "", null, undefined ou NaN), a expressão à direita do operador (neste caso, valor) será atribuída a variavel.
Se variavel for falsy, o valor existente será mantido.
Exemplo 1:*/
let nome = "João"; //declara a variavel nome e atribui o valor String João 
nome &&= "Maria"; // nome recebe maria pois já joão é um valor truthy
console.log(nome);//imprime o valor da variavel nome

// Exemplo 2:
let idade ; // declara a variavel idade sem atribuir nenhum valor recebendo assim undefined
idade &&= 30; // realizada a operação logica e atribuição a variavel. idade não será alterada, pois é undefined (falsy)
console.log(idade) // imprime o valor da variavel idade

// Exemplo 3:
let valor = 0; // declara a variavel valor e atribui o valor Number 0
valor &&= 10; // valor continua sendo 0, pois é falsy
console.log(valor); // imprime o valor da variavel valor 
}