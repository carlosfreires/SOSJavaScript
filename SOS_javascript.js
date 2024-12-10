console.log('--------------------------SOS javascript------------------------')//escreve o titulo do documento
console.log('um guia dos assuntos mais importantes abordados em javascript até aqui.')//escreve uma breve descrição do documento
console.log('++++++++++++++++++++++++++++++++++++++++')//Imprime +++++++++++++++++++++++++++++++++++++++++ para pular assunto

console.log('------------------Armaznamento de dados temporarios------------------')// escreve o titulo do assunto direto abaixo
{function variaveis (){
/* Variaveis
Utilizadas para armazenar dados durante a execução do script.
Escopo: Limitado ao bloco de código onde foram declaradas.
Exemplos com let e var:
/* let >> */ let nome = 'Carlos'; // Limita o escopo da variável ao bloco, instrução ou expressão em que é usada.*/
/* var >> */ var sobreNome = 'Freires'; // Define a variável globalmente ou no escopo de uma função, independentemente do escopo do bloco.
console.log('>>Variaveis:') // imprime >>Variaveis:
console.log(nome, sobreNome); // imprime na tela as duas variaveis
console.log('----------------------------------------') //imprime ---------------------------------------- para pular linha
/*OBS:
 >>"Let" não é inicializada, enquanto "var" é inicializada como "undefined".
 >> Se tentar usar uma variável "let" antes de sua declaração, terá um "Reference Error". 
 >> O uso de "var" é bastante incomum devido ao escopo global, que pode gerar diversos problemas. 
*/} variaveis();

function constantes (){
/*Constantes
Semelhantes às variáveis, mas seu valor não pode ser alterado após a declaração.
Escopo: O escopo das constantes em JavaScript é de bloco, semelhante ao das variáveis declaradas com a palavra-chave let.
Exemplo:*/ const PI = 3.14159; //declara uma variável constante, ou seja, uma variável que não pode ser alterada ou reatribuída.
console.log('>>Constantes:') // imprime >>Constantes:
console.log(PI); // imprime o value atribuido a constante.
console.log('----------------------------------------') //imprime ---------------------------------------- para pular linha
} constantes ();
}
console.log('++++++++++++++++++++++++++++++++++++++++')//Imprime +++++++++++++++++++++++++++++++++++++++++ para pular assunto
{
function tiposPrimitivos(){
console.log('Tipos Primitivos:');
/*Tipos Primitivos
Em JavaScript, os tipos de dados primitivos são os blocos construtores fundamentais dos valores. Diferentemente dos objetos, esses valores são imutáveis, o que significa que uma vez atribuídos, não podem ser modificados diretamente.
os tipos primitivos são:*/
//Number: Representa números inteiros e de ponto flutuante.
/*Exemplo:*/ let idade = 30; let altura = 1.79;
console.log('Number');
console.log('int: ' + idade,'| Float: ' + altura);
console.log('----------------------------------------') //imprime ---------------------------------------- para pular linha
/*String: Representa cadeias de texto.
Exemplo:*/ let saudação = "Olá, mundo!";
console.log('String');
console.log(saudação);
console.log('----------------------------------------') //imprime ---------------------------------------- para pular linha
/*Boolean: Representa valores booleanos (verdadeiro ou falso).
Exemplo:*/ let éVerdadeiro = true; let éFalso = false;
console.log('Boolean');
console.log('éVerdadeiro: ' + éVerdadeiro,'| éFalso: '+ éFalso);
console.log('----------------------------------------') //imprime ---------------------------------------- para pular linha
/*null: Representa a ausência intencional de qualquer valor.
Exemplo:*/ let valorNulo = null;
console.log('null');
console.log('valorNulo: '+valorNulo);
console.log('----------------------------------------') //imprime ---------------------------------------- para pular linha
/*undefined: Representa uma variável que foi declarada mas ainda não foi atribuída.
Exemplo:*/let variavelSemAtribuicao;
console.log('undefined');
console.log('variavelSemAtribuicao: '+variavelSemAtribuicao);
console.log('----------------------------------------') //imprime ---------------------------------------- para pular linha
/*Symbol: Representa um valor único e imutável. É usado principalmente para propriedades de objetos.
Para criar um Symbol, simplesmente chamamos a função Symbol():*/
console.log('Symbol'); //imprime Symbol na tela
let symbol1 = Symbol(); //cria uma constante e atribui o tipo-primitivo symbol
let symbol2 = Symbol(); //cria uma constante e atribui o tipo-primitivo symbol
let teste = symbol1 === symbol2; // cria uma função para receber o teste logico (verdadeiro ou falso) na comparação entre as duas variaveis
console.log(teste);// imprime na tela a variavel contendo o valor do teste logico (true ou false)
/*Cada chamada a Symbol() cria um novo valor único, por isso symbol1 e symbol2 serão sempre diferentes, mesmo se forem criados com a mesma chamada à função.
Exemplo como propriedades de objetos:*/
const obj = {}; //cria um objeto vazio
const mySymbol = Symbol(); //cria uma constante e atribui o tipo-primitivo symbol
obj[mySymbol] = 'valor secreto'; //cria um atributo ou propriedade do tipo primitivo no objeto
console.log(obj) //mostra o objeto criado
/*Exemplo como chaves em Mapas:*/
const myMap = new Map(); //cria uma constante e atribui um metodo contrutor Map() [metodo de arrey]  
const sym1 = Symbol(); //cria uma constante e atribui o tipo-primitivo symbol
myMap.set(sym1, 'valor');//dentro da função myMap() é executada a função set(sym1,'valor') com dois parametros.
console.log(myMap)// imprime a o resultado da função myMap
/*OBS:
Unicidade: Cada Symbol é único.
Inmutabilidade: Uma vez criado, o valor de um Symbol não pode ser alterado.
Não enumerável: Por padrão, as propriedades de um objeto que utilizam Symbols como chave não são enumeráveis, ou seja, não aparecerão em um loop for...in.
Conversão para string: Você pode converter um Symbol para uma string, mas o resultado não será o mesmo Symbol original.
exemplo pratico:*/
const sym12 = Symbol(); //cria uma constante e atribui o tipo-primitivo symbol
const sym23 = Symbol(); //cria uma constante e atribui o tipo-primitivo symbol

console.log(sym12 === sym23); // Imprime false (são diferentes)

// Usando um Symbol como chave de objeto
const obj1 = {};// cria um objeto vazio
obj[sym12] = 'valor'; //cria um atributo ou propriedade do tipo primitivo symbol no objeto
console.log(obj1[sym12]); // Imprime 'valor'

const obj2 = {};// cria um objeto vazio
obj[sym23] = 'valor2';//cria um atributo ou propriedade do tipo primitivo no objeto
console.log(obj2[sym23]); // Imprime 'valor2'


//outros exemplos:

const simbolo = Symbol(); //cria uma constante e atribui o tipo-primitivo symbol
candango={};// cria um objeto vazio
candango.nome = 'Carlos'; //cria um atributo ou propriedade no objeto
candango.sobreNome = 'freires'; //cria um atributo ou propriedade no objeto
candango.idade= 34; //cria um atributo ou propriedade no objeto
candango[simbolo] = {categoria:'brabo', indicado: '2'}; //cria um atributo ou propriedade do tipo primitivo symbol no objeto (em forma de objeto) no objeto
console.log(candango); // imprime o objeto
console.log(candango[simbolo]) //imprime os atributos e descrição dos atributo
console.log(candango[simbolo].categoria)// imprime apenas o atributo.


const simbolo2 = Symbol('categoria');//cria uma constante e atribui o tipo-primitivo symbol
candango2={}// cria um objeto vazio
candango2.nome = 'Valeska'; //cria um atributo ou propriedade no objeto
candango2.sobreNome = 'Strogonoph';//cria um atributo ou propriedade no objeto
candango2.idade = 27;//cria um atributo ou propriedade no objeto
candango2[simbolo2] = "brabona"; //cria um atributo ou propriedade no objeto
console.log(candango2); // imprime o objeto
console.log(candango2[simbolo2]); //imprime apenas o atributo.
console.log('----------------------------------------') //imprime ---------------------------------------- para pular linha
/*BigInt: Representa números inteiros de precisão arbitrária. É usado para trabalhar com números extremamente grandes.
Isso significa que você pode trabalhar com números tão grandes quanto quiser, sem se preocupar com os limites de Number.
Para criar um BigInt, basta adicionar um n no final de um número literal:
exemplo:*/
console.log('BigInt');//imprime BigInt
let numeroMuitoGrande1 = 123456789012345678901234567890n;//cria uma variavel e atribui um dado do tipo BigInt
let numeroMuitoGrande2 = 987654321098765432109876543210n;//cria uma variavel e atribui um dado do tipo BigInt

//Você pode realizar as operações aritméticas básicas com BigInts:
let somaMuitoGrande = numeroMuitoGrande1 + numeroMuitoGrande2; //cria uma variavel que recebe a soma das variaveis contendo os BigInt
let multMuitoGrande = numeroMuitoGrande1 * numeroMuitoGrande2; //cria uma variavel que recebe a multiplicação das variaveis contendo os BigInt
console.log(somaMuitoGrande);//imprime o resultado da soma
console.log(multMuitoGrande);//imprime o resultado da multiplicação.
//O resultado também será um BigInt
/*OBS:
Não é possível misturar BigInt e Number: Tentar realizar operações entre BigInt e Number resultará em um erro.
BigInt é imutável: Uma vez criado, um BigInt não pode ser modificado.
Operações bit a bit: Algumas operações bit a bit estão disponíveis para BigInts, mas não todas.*/
}tiposPrimitivos();
}
console.log('++++++++++++++++++++++++++++++++++++++++')//Imprime +++++++++++++++++++++++++++++++++++++++++ para pular assunto

{function operadores(){
/*Operadores
são essenciais para realizar cálculos, comparações, atribuições e outras tarefas em programação.

Operadores Aritimeticos: 
*/console.log('Operadores Aritimeticos:');

{/*Adição: +  >> soma
exemplo:*/
console.log('Adição +')
let a = 7; let b = 5.2; //declara as variaveis a e b e atriu um valor Number a elas
let c = 'carlos'; let d ='13'; //declara as variaveis a e b e atriu um valor String a elas
let t = 123445933n; let u = 38237237623n; //declara as variaveis t e u e atriu um valor BigInt a elas
let e = a + b; let f = c + d; let g = a + d;h = t + u;/*i = t + a*/ i = t + h//cria variaveis e atribui a soma dos valores as mesmas
console.log('Number + Number=' + e); //imprime o sesultado da soma de duas variaveis Number
console.log('string + string=' + f); //imprime o sesultado da concatenação de duas variaveis Number
console.log('Number + string=' + g); //imprime o sesultado da concatenação de duas variaveis Number e string
console.log('BigInt + BigInt=' + h);
/*console.log('BigInt - Number=' + i)//imprime o resultado da soma de duas variaveis BigInt e Number
OBS: é impossivel somar BigInt com Number ou String. retorna erro.*/
console.log('BigInt + BigInt=' + i);//imprime o resultado da soma de duas variaveis BigInt. a variavel que recebe a soma de duas BigInt também será uma BigInt
//OBS: O operador + apenas soma as variaveis do tipo Number ou BigInt, as String são concatenadas quando quando utilizado o operador +
}
{/*Subtração: -  >> subtrair
exemplo:*/
console.log('Subtração -')
let a = 7; let b = 5.2; //declara as variaveis a e b e atriu um valor Number a elas
let c = 'carlos'; let d ='13';//declara as variaveis c e d e atriu um valor String a elas
let t = 123445933n; let u = 38237237623n; //declara as variaveis t e u e atriu um valor BigInt a elas
let e = a - b; let f = c - d; let g = a - d;h = t - u; /*i = t - a*/ i = t - h;//cria variaveis e atribui a subtração dos valores as mesmas
console.log('Number - Number=' + e); //imprime o resultado da subtração de duas variaveis Number
console.log('string - string=' + f); //imprime o resultado NaN pois é impossivel a operação de subtração com Strings
console.log('Number - string=' + g); //imprime o resultado da subtração entre dois Numbers ja que ele reconhece a string '13' como number nesse tipo de operação.
console.log('BigInt - BigInt=' + h)//imprime o resultado da subtração de duas variaveis BigInt
/*console.log('BigInt - Number=' + i)//imprime o resultado da subtração de duas variaveis BigInt e Number
OBS: é impossivel subtrair BigInt com Number ou String. retorna erro.*/
console.log('BigInt - BigInt=' + i)//imprime o resultado da subtração de duas variaveis BigInt. a variavel que recebe a subtração de duas BigInt também será uma BigInt
}
{/*Multiplicação: *   >> Multiplicar
Exemplo:*/
console.log('Multiplicação *')
let a = 7; let b = 5.2; //declara as variaveis a e b e atriu um valor Number a elas
let c = 'carlos'; let d ='13';//declara as variaveis c e d e atriu um valor String a elas
let t = 123445933n; let u = 38237237623n; //declara as variaveis t e u e atriu um valor BigInt a elas
let e = a * b; let f = c * d; let g = a * d;h = t * u; /*i = t * a*/ i = t * h;//cria variaveis e atribui a multiplicação dos valores as mesmas
console.log('Number * Number=' + e); //imprime o resultado da multiplicação de duas variaveis Number
console.log('string * string=' + f); //imprime o resultado NaN pois é impossivel a operação de multiplicação com Strings
console.log('Number * string=' + g); //imprime o resultado da multiplicação entre dois Numbers ja que ele reconhece a string '13' como number nesse tipo de operação.
console.log('BigInt * BigInt=' + h)//imprime o resultado da multiplicação de duas variaveis BigInt
/*console.log('BigInt - Number=' + i)//imprime o resultado da multiplicação de duas variaveis BigInt e Number
OBS: é impossivel subtrair BigInt com Number ou String. retorna erro.*/
console.log('BigInt * BigInt=' + i)//imprime o resultado da multiplicação de duas variaveis BigInt. a variavel que recebe a multiplicação de duas BigInt também será uma BigInt
}
{/*Divisão: /   >> Dividir
Exemplo:*/
console.log('Divisão /')
let a = 7; let b = 5.2; //declara as variaveis a e b e atriu um valor Number a elas
let c = 'carlos'; let d ='13';//declara as variaveis c e d e atriu um valor String a elas
let t = 123445939889879898987989998799893n; let u = 38237237623n; //declara as variaveis t e u e atriu um valor BigInt a elas
let e = b / a; let f = c / d;  let g = d / a;  h = t / u;   /*i = t / a*/    i = t / h;    //cria variaveis e atribui a Divisão dos valores as mesmas
console.log('Number / Number=' + e); //imprime o resultado da Divisão de duas variaveis Number
console.log('string / string=' + f); //imprime o resultado NaN pois é impossivel a operação de Divisão com Strings
console.log('Number / string=' + g); //imprime o resultado da Divisão entre dois Numbers ja que ele reconhece a string '13' como number nesse tipo de operação.
console.log('BigInt / BigInt=' + h)//imprime o resultado da Divisão de duas variaveis BigInt
/*console.log('BigInt - Number=' + i)//imprime o resultado da Divisão de duas variaveis BigInt e Number
OBS: é impossivel subtrair BigInt com Number ou String. retorna erro.*/
console.log('BigInt / BigInt=' + i)//imprime o resultado da Divisão de duas variaveis BigInt. a variavel que recebe a Divisão de duas BigInt também será uma BigInt
}
{/*Módulo : %   >> Resto da divisão
Exemplo:*/
console.log('Módulo %')
let a = 7; let b = 5.2; //declara as variaveis a e b e atriu um valor Number a elas
let c = 'carlos'; let d ='13';//declara as variaveis c e d e atriu um valor String a elas
let t = 123445939889879898987989998799893n; let u = 38237237623n; //declara as variaveis t e u e atriu um valor BigInt a elas
let e = b % a; let f = c % d;  let g = d % a;  h = t % u;   /*i = t % a*/    i = t % h;    //cria variaveis e atribui a Divisão dos valores as mesmas
console.log('Number % Number=' + e); //imprime o resto da divisão de duas variaveis Number
console.log('string % string=' + f); //imprime o resultado NaN pois é impossivel a operação de Divisão com Strings
console.log('Number % string=' + g); //imprime o resto da divisão entre dois Numbers ja que ele reconhece a string '13' como number nesse tipo de operação.
console.log('BigInt % BigInt=' + h)//imprime o resto da divisão de duas variaveis BigInt
/*console.log('BigInt - Number=' + i)//imprime o resto da divisão de duas variaveis BigInt e Number
OBS: é impossivel subtrair BigInt com Number ou String. retorna erro.*/
console.log('BigInt % BigInt=' + i)//imprime o resto da divisão de duas variaveis BigInt. a variavel que recebe a Divisão de duas BigInt também será uma BigInt
}
{/*Exponenciação (**)    >> utilizado para realizar a operação de exponenciação, ou seja, elevar um número a uma determinada potência. É uma forma mais concisa e intuitiva de expressar a operação de potenciação em comparação com o método Math.pow().
Exemplo:*/
console.log('Exponenciação ** ')
let a = 7; let b = 5.2; //declara as variaveis a e b e atriu um valor Number a elas
let c = 'carlos'; let d ='13';//declara as variaveis c e d e atriu um valor String a elas
let t = 123445939889879898987989998799893n; let u = 2n; //declara as variaveis t e u e atriu um valor BigInt a elas
let e = b ** a; let f = c ** d;  let g = d ** a;  h = t ** u;   /*i = t ** a*/   //i = t ** h;    //cria variaveis e atribui a potenciação dos valores as mesmas
console.log('Number ** Number=' + e); //imprime a potenciação de duas variaveis Number
console.log('string ** string=' + f); //imprime o resultado NaN pois é impossivel a operação de potencia com Strings
console.log('Number ** string=' + g); //imprime a potenciação de dois Numbers ja que ele reconhece a string '13' como number nesse tipo de operação.
console.log('BigInt ** BigInt=' + h)//imprime a potenciação de duas variaveis BigInt
/*console.log('BigInt - Number=' + i)//imprime potenciação de duas variaveis BigInt e Number
OBS: a potencia envolvendo BigInt com Number ou String. retorna erro.*/
//console.log('BigInt ** BigInt=' + i)//A operação resultou em erro devido o valor resultante da potenciação ser muito grande. 
// foi testado a operação entre um Number e um BigInt e resulta em erro, os dois valores precisam ser BigInt.
}
{/*Operador de Incremento ++   >>  operador unário que serve para aumentar o valor de uma variável numérica em uma unidade. É uma forma abreviada de somar 1 a uma variável.
Existem duas formas de usar o operador de incremento:
Pré-incremento (++x): O valor da variável é incrementado antes de ser usado na expressão.
Pós-incremento (x++): O valor da variável é incrementado após ser usado na expressão.
Exemplo:*/
console.log('Operador de Incremento ++')
// Pré-incremento
console.log('Pré-incremento')
let x = 5; //declara uma variavel x e atribui o valor 5 do tipo Number a ela
console.log(++x); // Imprime 6 e x agora vale 6
console.log(x);
// Pós-incremento
console.log('Pós-incremento')
let y = 5;//declara uma variavel y e atribui o valor 5 do tipo Number a ela
console.log(y++); // Imprime 5 e y agora vale 6
console.log(y);

let a = 7; let b = 5.2; //declara as variaveis a e b e atriu um valor Number a elas
let c = 'carlos'; let d ='13';//declara as variaveis c e d e atriu um valor String a elas
let t = 123445939889879898987989998799893n;//declara a variavel t  e atriu um valor BigInt a ela
console.log('Pré-incremento em tipos primitivos')
console.log('variavel (a) Number int:',a) //imprime a variavel a do tipo Number int
console.log('variavel (a) Number int: ',++a); // Imprime a+1
console.log('variavel (a) Number int: ',a); // imprimi a após o incremento
console.log('variavel (b) Number float:',b) //imprime a variavel a do tipo Number float
console.log('variavel (b) Number float: ',++b); // Imprime b+1
console.log('variavel (b) Number float: ',b); // imprimi b após o incremento
console.log('variavel (c) String:',c) //imprime a variavel c do tipo String
console.log('variavel (c) String: ',++c); // Imprime NaN, c+1 (não é possivel somar 1 a uma String)
console.log('variavel (c) String: ',c); // imprimi NaN, (não é possivel somar 1 a uma String)
console.log('variavel (d) String: ',d); // imprimi a variavel d do tipo string
console.log('variavel (d) String: ',++d); // Imprime d+1, Ao ser identificado pelo interpretador que a variavel guarda um valor string que pode ser convertifo em Number, a conversão é realizada para permitir a operação.
console.log('variavel (d) String: ',d); // imprimi d após o incremento(a variavel agora passa a armazenar um dado do tipo Number)
console.log('variavel (t) BigInt: ',t); // imprimi a variavel t do tipo BigInt
console.log('variavel (t) BigInt: ',++t); // Imprime t+1
console.log('variavel (t) BigInt: ',t); // imprimi t após o incremento.
console.log('Pós-incremento em tipos primitivos')
console.log('variavel (a) Number int:',a) //imprime a variavel a do tipo Number int
console.log('variavel (a) Number int: ',a++); // Imprime a (uma unidade é somada após o valor ser mostrado)
console.log('variavel (a) Number int: ',a); // imprimi a após o incremento
console.log('variavel (b) Number float:',b) //imprime a variavel a do tipo Number float
console.log('variavel (b) Number float: ',b++); // Imprime b (uma unidade é somada após o valor ser mostrado)
console.log('variavel (b) Number float: ',b); // imprimi b após o incremento
console.log('variavel (c) String:',c) //imprime a variavel c do tipo String (Nesse caso imprime NaN porque carrega o valor do teste anterior)
console.log('variavel (c) String: ',c++); // Imprime NaN, c+1 (não é possivel somar 1 a uma String)
console.log('variavel (c) String: ',c); // imprimi NaN, (não é possivel somar 1 a uma String)
console.log('variavel (d) String: ',d); // imprimi a variavel d do tipo string (nesse caso Number pois ela carrega o valor do ultimo teste)
console.log('variavel (d) String: ',d++); // Imprime d, e soma 1 unidade após o valor ser mostrador (Ao ser identificado pelo interpretador que a variavel guarda um valor string que pode ser convertifo em Number, a conversão é realizada para permitir a operação).
console.log('variavel (d) String: ',d); // imprimi d após o incremento (a variavel agora passa a armazenar um dado do tipo Number)
console.log('variavel (t) BigInt: ',t); // imprimi a variavel t do tipo BigInt
console.log('variavel (t) BigInt: ',t++); // Imprime t+1
console.log('variavel (t) BigInt: ',t); // imprimi t após o incremento.
}
{/*Operador de Decremento --   >>  operador unário que serve para aumentar o valor de uma variável numérica em uma unidade. É uma forma abreviada de subtrair 1 a uma variável.
Existem duas formas de usar o operador de decremento:
Pré-decremento (--x): O valor da variável é incrementado antes de ser usado na expressão.
Pós-decremento (x--): O valor da variável é incrementado após ser usado na expressão.
Exemplo:*/
console.log('Operador de Decremento --')
// Pré-decremento
console.log('Pré-decremento')
let x = 5; //declara uma variavel x e atribui o valor 5 do tipo Number a ela
console.log(--x); // Imprime 4 e x agora vale 4
console.log(x);
// Pós-decremento
console.log('Pós-decremento')
let y = 5;//declara uma variavel y e atribui o valor 5 do tipo Number a ela
console.log(y--); // Imprime 5 e y agora vale 4
console.log(y);

let a = 7; let b = 5.2; //declara as variaveis a e b e atriu um valor Number a elas
let c = 'carlos'; let d ='13';//declara as variaveis c e d e atriu um valor String a elas
let t = 123445939889879898987989998799893n;//declara a variavel t  e atriu um valor BigInt a ela
console.log('Pré-decremento em tipos primitivos')
console.log('variavel (a) Number int:',a) //imprime a variavel a do tipo Number int
console.log('variavel (a) Number int: ',--a); // Imprime a-1
console.log('variavel (a) Number int: ',a); // imprimi a após o decremento
console.log('variavel (b) Number float:',b) //imprime a variavel a do tipo Number float
console.log('variavel (b) Number float: ',--b); // Imprime b-1
console.log('variavel (b) Number float: ',b); // imprimi b após o decremento
console.log('variavel (c) String:',c) //imprime a variavel c do tipo String
console.log('variavel (c) String: ',--c); // Imprime NaN, c-1 (não é possivel subtrair 1 a uma String)
console.log('variavel (c) String: ',c); // imprimi NaN, (não é possivel subtrair 1 a uma String)
console.log('variavel (d) String: ',d); // imprimi a variavel d do tipo string
console.log('variavel (d) String: ',--d); // Imprime d-1, Ao ser identificado pelo interpretador que a variavel guarda um valor string que pode ser convertifo em Number, a conversão é realizada para permitir a operação.
console.log('variavel (d) String: ',d); // imprimi d após o decremento(a variavel agora passa a armazenar um dado do tipo Number)
console.log('variavel (t) BigInt: ',t); // imprimi a variavel t do tipo BigInt
console.log('variavel (t) BigInt: ',--t); // Imprime t-1
console.log('variavel (t) BigInt: ',t); // imprimi t após o decremento.
console.log('Pós-decremento em tipos primitivos')
console.log('variavel (a) Number int:',a) //imprime a variavel a do tipo Number int
console.log('variavel (a) Number int: ',a--); // Imprime a (uma unidade é diminuida após o valor ser mostrado)
console.log('variavel (a) Number int: ',a); // imprimi a após o decremento
console.log('variavel (b) Number float:',b) //imprime a variavel a do tipo Number float
console.log('variavel (b) Number float: ',b--); // Imprime b (uma unidade é diminuida após o valor ser mostrado)
console.log('variavel (b) Number float: ',b); // imprimi b após o decremento
console.log('variavel (c) String:',c) //imprime a variavel c do tipo String (Nesse caso imprime NaN porque carrega o valor do teste anterior)
console.log('variavel (c) String: ',c--); // Imprime NaN, c-1 (não é possivel subtrair 1 a uma String)
console.log('variavel (c) String: ',c); // imprimi NaN, (não é possivel subtrair 1 a uma String)
console.log('variavel (d) String: ',d); // imprimi a variavel d do tipo string (nesse caso Number pois ela carrega o valor do ultimo teste)
console.log('variavel (d) String: ',d--); // Imprime d, e diminui 1 unidade após o valor ser mostrador (Ao ser identificado pelo interpretador que a variavel guarda um valor string que pode ser convertifo em Number, a conversão é realizada para permitir a operação).
console.log('variavel (d) String: ',d); // imprimi d após o decremento (a variavel agora passa a armazenar um dado do tipo Number)
console.log('variavel (t) BigInt: ',t); // imprimi a variavel t do tipo BigInt
console.log('variavel (t) BigInt: ',t--); // Imprime t-1
console.log('variavel (t) BigInt: ',t); // imprimi t após o decremento.
}
{/*Operador Lógico OU (||)  é utilizado para realizar operações lógicas e tomar decisões em seu código. Ele retorna true se pelo menos um dos operandos for true, e false somente se ambos os operandos forem false.
O operador || avalia os operandos da esquerda para a direita.
Se o primeiro operando for truthy, ele será retornado e a avaliação dos outros operandos será interrompida.
Caso todos os operandos sejam falsy, o último operando será retornado.

Valores truthy e falsy:
Truthy: Valores que são considerados verdadeiros em contextos booleanos. Exemplos: true, números diferentes de zero, strings não vazias, objetos e arrays.
Falsy: Valores que são considerados falsos em contextos booleanos. Exemplos: false, 0, -0, "", null, undefined, NaN.

Exemplo:*/
console.log('Operador Lógico OU || ')
// Exemplo 1:
let resultado = true || false; // declara a variavel resultado e atribui a operação logica 'verdadeiro ou falso'. O resultado será true
console.log(resultado);// imprime o resultado true
// Exemplo 2:
let x = 0; //declara a variavel x e atribui o valor 0 do tipo Number
let y = 5; //declara a variavel y e atribui o valor 5 do tipo Number
let z = x || y; //declara a variavel z e atribui a operação logica 'verdadeiro ou falso'.  z será 5, pois y é truthy
console.log(z);// imprime o valor 5, pois y é truthy.
// Exemplo 3:
let nome1 = null; // declara a variavel nome1 e atribui o tipo primitivo null
let saudacao = nome1 || "Anônimo"; // declara a variavel saudacao e atribui a operação logica 'verdadeiro ou falso'. saudacao será "Anônimo"
console.log(saudacao);// imprime a saudação que nesse caso será "Anônimo"

/*usos comuns:
Valores padrão:
Exemplo:*/
let nome2 = null;
let nomeCompleto = nome2 || "Usuário";
console.log(nomeCompleto);
//Se nome for null ou undefined, nomeCompleto será "Usuário".
/*Condições:
Exemplo:*/
function acesso(idade){
if (idade >= 18 || temAutorizacao) {
    // O usuário pode entrar
    console.log('O usuário pode entrar')
}} acesso(21)
//O usuário pode entrar se tiver 18 anos ou mais, ou se tiver autorização.
/*Encadeamento:
Exemplo:*/
let aT = null; let bT = 7; cT = undefined;
let valorZ = aT || bT || cT;
console.log(valorZ)
//O valor de valor será o primeiro valor truthy entre a, b e c. Nesse caso a variavel bT que recebeu o valor Number 7;
/*Importante: O operador || não realiza uma conversão para booleano: Ele retorna o valor do primeiro operando truthy, que pode não ser um booleano.
Curto-circuito: A avaliação é interrompida assim que um valor truthy é encontrado, o que pode ser útil para evitar erros em expressões complexas.*/
}
{/*Operador Lógico E (&&)  O operador lógico E (&&), em JavaScript, é usado para realizar operações lógicas e tomar decisões em seu código. Ele retorna true somente se todos os operandos forem true, caso contrário, retorna false.
Assim como o operador ||, o && avalia os operandos da esquerda para a direita.
 Se o primeiro operando for falsy, ele será retornado e a avaliação dos outros operandos será interrompida.
 Caso todos os operandos forem truthy, o último operando será retornado.

Valores truthy e falsy:
Truthy: Valores que são considerados verdadeiros em contextos booleanos. Exemplos: true, números diferentes de zero, strings não vazias, objetos e arrays.
Falsy: Valores que são considerados falsos em contextos booleanos. Exemplos: false, 0, -0, "", null, undefined, NaN.

Exemplo:*/
console.log('Operador Lógico E && ')
// Exemplo 1:
let resultado = true && true; // resultado será true
console.log(resultado);
// Exemplo 2:
let x = 5;
let y = 0;
let z = x && y; // z será 0, pois y é falsy
console.log(z);
// Exemplo 3:
let nome = "João";
let idade = 30;
let podeDirigir = nome && idade >= 18; // podeDirigir será true
console.log(podeDirigir);

/*usos comuns:
Condições compostas:
Exemplo:*/
function carteira(idade,possuiCarteiraDeMotorista){
if (idade >= 18 && possuiCarteiraDeMotorista) {
    // O usuário pode dirigir
    console.log('O usuário pode dirigir')
}}carteira(21,true);
//O usuário só pode dirigir se tiver 18 anos ou mais e possuir carteira de motorista.
/*Validação de dados:
Exemplo:*/
function validação(nome,email,senha){
if (nome && email && senha) {
    // Todos os campos foram preenchidos
    console.log('Todos os campos foram preenchidos');
}}validação('carlos', 'carlos@email.com','Abacate@zul123');
//Verifica se todos os campos de um formulário foram preenchidos.
/*Encadeamento:
Exemplo:*/
let aT = null; let bT = 7; cT = 'casa';
let valorZ = aT && bT && cT;
console.log(valorZ)
//O valor de valor será o primeiro valor falsy entre a, b e c, ou o último se todos forem truthy.
/*Importante: O operador || não realiza uma conversão para booleano: Ele retorna o valor do primeiro operando truthy, que pode não ser um booleano.
Curto-circuito: A avaliação é interrompida assim que um valor truthy é encontrado, o que pode ser útil para evitar erros em expressões complexas.*/
}

{/*Operador de Negação Lógica (!) operador unário que realiza a negação lógica de um operando. Em outras palavras, ele inverte o valor booleano de uma expressão.
Se o operando for true, o resultado da negação será false
Se o operando for false, o resultado da negação será true
Em outros tipos de dados o JavaScript converterá implicitamente o operando para um booleano antes de aplicar a negação:
Valores "falsy" (que se convertem para false em contextos booleanos) como 0, null, undefined, "" (string vazia), NaN e false se tornarão true após a negação.
Valores "truthy" (que se convertem para true em contextos booleanos), como qualquer número diferente de zero, strings não vazias e objetos, se tornarão false após a negação.
Exemplo:*/
console.log('Operador de Negação Lógica ! ')
let x = true; //declara a variavel x e atribui a ela o valor Bolean True
console.log(!x); // Imprime: false
let y = 0; // declara a variavel y e atribui o valor Number 0
console.log(!y); // Imprime: true (pois 0 é falsy)
let z = "Hello"; // declara a variavel z e atribui uma String a ela.
console.log(!z); // Imprime: false (pois "Hello" é truthy)
//Também é É frequentemente usado para inverter o resultado de uma comparação ou condição.
//Pode ser utilizado para verificar se uma variável tem um valor definido (truthy).
// Em estruturas de controle como if, while e for, o operador ! pode ser usado para negar condições.
//Outros exemplos:
console.log('verificação em estrutura if')
// Verificando se um usuário está logado
console.log('Verificando se um usuário está logado')
let isLoggedIn = false;
if (!isLoggedIn) {
  console.log("Você precisa fazer login.");
}
// Verificando se uma lista está vazia
console.log('Verificando se uma lista está vazia')
let myArray = [];
if (!myArray.length) {
  console.log("A lista está vazia.");
}
//OBS: Quando usar: Para inverter o resultado de uma comparação.//Para verificar se uma variável tem um valor definido.//Para negar condições em estruturas de controle.
}
{/*Operador Ternário (?)  O operador ternário, também conhecido como operador condicional, é uma forma concisa de escrever uma expressão condicional em JavaScript. Ele permite que você execute uma ação diferente com base em uma condição.
Sintaxe:
condição ? valorSeVerdadeiro : valorSeFalso
Condição: A expressão à esquerda do ? é avaliada como um valor booleano (true ou false).
Valores: Se a condição for true, o valor à esquerda dos : será retornado. Caso contrário, o valor à direita será retornado.
Exemplo:*/
console.log('Operador Ternário ? ');
let idade = 18;
let mensagem = (idade >= 18) ? "Você é maior de idade." : "Você é menor de idade.";
console.log(mensagem); // Imprime: "Você é maior de idade."
//Outro uso comum é para definir valores padrão para variáveis.
//Outro exemplo:
let nome = null;
let saudacao = nome ? `Olá, ${nome}!` : "Olá, visitante!";
console.log(saudacao); // Imprime: "Olá, visitante!"
}
{/*Operador de Fusão Nula (??)  O operador de fusão nula (nullish coalescing operator, em inglês) ?? é uma adição relativamente recente ao JavaScript que serve para fornecer valores padrão quando uma variável é null ou undefined. 
O operador ?? funciona da seguinte maneira:
Verifica se é nulo ou indefinido: O valor à esquerda do operador é avaliado. Se for null ou undefined, a próxima parte é executada.
Retorna o valor da direita: Se o valor à esquerda for null ou undefined, o valor à direita do operador é retornado. Caso contrário, o valor da esquerda é retornado.
Sintaxe:
valor ?? valorPorDefecto
Exemplo:*/
console.log('Operador de fusão Nula ?? ');
let nome = null;
let saudacao = nome ?? 'Anônimo';
console.log(saudacao); // Imprime: "Anônimo"
/*Quando usar:
Para definir valores padrão para variáveis que podem ser null ou undefined.
Para lidar com propriedades opcionais em objetos.
Para definir valores padrão para parâmetros de função.
Exemplo com parâmetros de função:*/
function saudar(nome) {
    console.log(`Olá, ${nome ?? 'amigo'}!`);
  }
  
  saudar(); // Imprime: Olá, amigo!
  saudar('João'); // Imprime: Olá, João!
}
{/*Operador de Deslocamento para a Esquerda (<<)   // serve para realizar um deslocamento de bits para a esquerda.
Imagine uma sequência de bits (zeros e uns) que representam um número binário. Quando aplicamos o operador <<, estamos movendo todos esses bits para a esquerda um determinado número de posições. Os espaços vazios que ficam à direita são preenchidos com zeros.
Exemplo:*/
console.log('Operador de Deslocamento para a Esquerda <<')
let x = 5; // Em binário: 00000101
x = x << 2; // Deslocamos 2 posições para a esquerda
console.log(x); // Imprime: 20 (em binário: 00010100)

let a = 7; let b = 5.2; //declara as variaveis a e b e atriu um valor Number a elas
let c = 'carlos'; let d ='13';//declara as variaveis c e d e atriu um valor String a elas
let t = 123445939889879898987989998799893n;//declara a variavel t  e atriu um valor BigInt a ela
console.log('Operador de Deslocamento para a Esquerda em tipos primitivos')
console.log('variavel (a) Number int:',a,'Resultado após operação de deslocamento a esquerda:', a << 3) //imprime a variavel antes e depois da operação
console.log('variavel (b) Number float:',b,'Resultado após operação de deslocamento a esquerda:', b << 2) //imprime a variavel antes e depois da operação
console.log('variavel (c) String:',c,'Resultado após operação de deslocamento a esquerda:', c << 2) //imprime a variavel antes e depois da operação
console.log('variavel (d) String: ',d,'Resultado após operação de deslocamento a esquerda:', d << 3); //imprime a variavel antes e depois da operação
console.log('variavel (t) BigInt: ',t,'Resultado após operação de deslocamento a esquerda:', t << 2n); ////imprime a variavel antes e depois da operação; // imprimi a variavel t do tipo BigInt. Operação resulta em erro se não especificarmos o numero operador como BigInt
}
{/*Operador de Deslocamento para a direita (>>)   // serve para realizar um deslocamento de bits para a direita.
 Imagine uma sequência de bits (zeros e uns) que representam um número binário. Quando aplicamos o operador >>, estamos movendo todos esses bits para a direita um determinado número de posições. Os espaços vazios que ficam à direita são preenchidos com zeros.
Exemplo:*/
console.log('Operador de Deslocamento para a direita >>')
let x = 8; // Em binário: 00000101
x = x >> 2; // Deslocamos 2 posições para a direita
console.log(x); // Imprime: 2 (en binario: 00000010)

let a = 7; let b = 5.2; //declara as variaveis a e b e atriu um valor Number a elas
let c = 'carlos'; let d ='13';//declara as variaveis c e d e atriu um valor String a elas
let t = 123445939889879898987989998799893n;//declara a variavel t  e atriu um valor BigInt a ela
console.log('Operador de Deslocamento para a direita em tipos primitivos')
console.log('variavel (a) Number int:',a,'Resultado após operação de deslocamento a direita:', a >> 3) //imprime a variavel antes e depois da operação
console.log('variavel (b) Number float:',b,'Resultado após operação de deslocamento a direita:', b >> 2) //imprime a variavel antes e depois da operação
console.log('variavel (c) String:',c,'Resultado após operação de deslocamento a direita:', c >> 2) //imprime a variavel antes e depois da operação
console.log('variavel (d) String: ',d,'Resultado após operação de deslocamento a direita:', d >> 3); //imprime a variavel antes e depois da operação
console.log('variavel (t) BigInt: ',t,'Resultado após operação de deslocamento a direita:', t >> 2n); //imprime a variavel antes e depois da operação; // imprimi a variavel t do tipo BigInt. Operação resulta em erro se não especificarmos o numero operador como BigInt
}
{/*Operador de Deslocamento para a direita Sem Assinar (>>>)   // realiza um deslocamento de bits para a direita de forma similar ao operador >>. No entanto, a principal diferença está em como ele lida com o bit mais significativo (MSB).
>>: Preserva o sinal do número. Ao deslocar para a direita, ele replica o bit mais significativo para manter o sinal.
>>>: Sempre preenche os espaços vazios à esquerda com zeros, independentemente do sinal do número. Isso resulta em um número positivo.
Exemplo:*/
console.log('Operador de Deslocamento para a direita Sem Assinar >>>')
{let x = -8; // Em binário (representação de 32 bits): 11111111 11111111 11111111 1000
x = x >> 2; //  Desloca 2 posições para a direita com sinal
console.log(x); // Imprime: -2 (em binário: 11111111 11111111 11111111 1110)
}{x = -8;
x = x >>> 2; // Desloca 2 posições para a direita sem sinal
console.log(x); // Imprime: 1073741822 (em binário: 00111111 11111111 11111111 1110)
}

let a = 7; let b = 5.2; //declara as variaveis a e b e atriu um valor Number a elas
let c = 'carlos'; let d ='13';//declara as variaveis c e d e atriu um valor String a elas
let t = 123445939889879898987989998799893n;//declara a variavel t  e atriu um valor BigInt a ela
console.log('Operador de Deslocamento para a direita em tipos primitivos')
console.log('variavel (a) Number int:',a,'Resultado após operação de deslocamento a direita:', a >>> 3) //imprime a variavel antes e depois da operação
console.log('variavel (b) Number float:',b,'Resultado após operação de deslocamento a direita:', b >>> 2) //imprime a variavel antes e depois da operação
console.log('variavel (c) String:',c,'Resultado após operação de deslocamento a direita:', c >>> 2) //imprime a variavel antes e depois da operação
console.log('variavel (d) String: ',d,'Resultado após operação de deslocamento a direita:', d >>> 3); //imprime a variavel antes e depois da operação
//console.log('variavel (t) BigInt: ',t,'Resultado após operação de deslocamento a direita:', t >>> 1n); Não foi possivel executar a operação com BigInt //imprime a variavel antes e depois da operação; // imprimi a variavel t do tipo BigInt. Operação resulta em erro se não especificarmos o numero operador como BigInt
}
{/*operador AND bit a bit (&)   // Ele permite realizar operações lógicas em nível de bit, ou seja, compara cada bit individual de dois números binários e produz um novo número com base no resultado dessas comparações
Cada bit do primeiro número é comparado com o bit correspondente do segundo número.
Se ambos os bits forem 1, o bit correspondente no resultado será 1.
Se pelo menos um dos bits for 0, o bit correspondente no resultado será 0.
Exemplo:*/
console.log('operador AND bit a bit &')
let aZ= 89 // declara a variavel aZ e atribui o Number 89 em binario 1011001
let bZ= 35 // declara a variavel bZ e atribui o Number 35 em binario 100011
let cZ = aZ & bZ; // declara a variavel cZ e atribui o resultado da operação aZ & bZ = Number 1 em binario 0000001
console.log('Resultado da operação 89 & 35 = ',cZ);// imprime a variavel cZ
let dZ= 52 // declara a variavel dZ e atribui o Number 52 em binario 110100
let eZ= 44 // declara a variavel eZ e atribui o Number 44 em binario 101100
let fZ= dZ & eZ; // declara a variavel fZ e atribui o resultado da operação dZ & eZ = Number 36 em binario 100100
console.log('Resultado da operação 52 & 44 = ',fZ);// imprime a variavel fZ
//Eu testei o funcionamento com os tipos primarios String e BigInt, porém em ambos a operação não funcionou. quando executada com numeros reais o ponto e o numero após não é considerado. por esse motivo não coloquei esses exemplos com erro aqui.
}
{/*operador OU bit a bit (|)    // Ele permite realizar operações lógicas em nível de bit, ou seja, compara cada bit individual de dois números binários e produz um novo número com base no resultado dessas comparações
Cada bit do primeiro número é comparado com o bit correspondente do segundo número.
Se pelo menos um dos bits for 1, o bit correspondente no resultado será 1.
Se ambos os bits forem 0, o bit correspondente no resultado será 0.
Exemplo:*/
console.log('operador OU bit a bit | ')
let aZ= 5 // declara a variavel aZ e atribui o Number 89 em binario 0101
let bZ= 3 // declara a variavel bZ e atribui o Number 35 em binario 0011
let cZ = aZ | bZ; // declara a variavel cZ e atribui o resultado da operação aZ | bZ = Number 7 em binario 0111
console.log('Resultado da operação 5 | 3 = ',cZ);// imprime a variavel cZ
let dZ= 52 // declara a variavel dZ e atribui o Number 52 em binario 110100
let eZ= 44 // declara a variavel eZ e atribui o Number 44 em binario 101100
let fZ= dZ | eZ; // declara a variavel fZ e atribui o resultado da operação dZ | eZ = Number 60 em binario 111100
console.log('Resultado da operação 52 | 44 = ',fZ);// imprime a variavel fZ
//Eu testei o funcionamento com os tipos primarios String e BigInt, porém em ambos a operação não funcionou. quando executada com numeros reais o ponto e o numero após não é considerado. por esse motivo não coloquei esses exemplos com erro aqui.
}
{/*operador XOR (^)     // é um operador bit a bit que realiza a operação "ou exclusivo". Em termos simples, ele compara cada bit correspondente de dois números binários e retorna 1 se os bits forem diferentes, e 0 se os bits forem iguais.
Cada bit do primeiro número é comparado com o bit correspondente do segundo número.
Se os bits são diferentes, o bit correspondente no resultado será 1.
Se os bits são iguais, o bit correspondente no resultado será 0.
Exemplo:*/
console.log('Operador XOR ^ ')
let aZ= 5 // declara a variavel aZ e atribui o Number 5 em binario 0101
let bZ= 3 // declara a variavel bZ e atribui o Number 3 em binario 0011
let cZ = aZ ^ bZ; // declara a variavel cZ e atribui o resultado da operação aZ & bZ = Number 6 em binario 0110
console.log('Resultado da operação 5 ^ 3 = ',cZ);// imprime a variavel cZ
let dZ= 52 // declara a variavel dZ e atribui o Number 52 em binario 110100
let eZ= 44 // declara a variavel eZ e atribui o Number 44 em binario 101100
let fZ= dZ ^ eZ; // declara a variavel fZ e atribui o resultado da operação dZ & eZ = Number 24 em binario 011000
console.log('Resultado da operação 52 ^ 44 = ',fZ);// imprime a variavel fZ
//Eu testei o funcionamento com os tipos primarios String e BigInt, porém em ambos a operação não funcionou. quando executada com numeros reais o ponto e o numero após não é considerado. por esse motivo não coloquei esses exemplos com erro aqui.
}

/*os operadores bit a bit (>>, >>>, <<, |, &) não funcionam diretamente com strings, BigInt, booleanos e outros tipos primitivos além de números.
 Esses operadores são projetados para manipular os bits individuais que compõem a representação binária de um número. Strings, booleanos e outros tipos de dados não possuem essa representação binária direta.*/

}operadores()}
console.log('----------------------------------------') //imprime ---------------------------------------- para pular linha
{function operadoresDeAtribuição(){
//Operadores de atribuição
/*Os operadores de atribuição são ferramentas que atribuem valores a variáveis
O operador de atribuição básico é o sinal de igual (=), que atribui o valor do operando à direita ao operando à esquerda. 
//Sempre é necessario atribuir algum valor a variavel no momento da criação, caso contrario ela será criada como undefinid por padrão ou causando possiveis erros. Não faça >> const y;let i = y  ou  const y = ; let i = y  ou y; let i = y;
//a melhor forma de atribuir o vazio/undefinid/null/etc a uma variavel é da seguinte forma:*/
console.log('atribuindo valores null/undefinid e vazio a uma variavel ou constante:' )
const aB = null; console.log('aB armazena: ',aB); // cria a constante aB e atribui Null a mesma  // exibe o valor armazenado em aB
var aC = undefined; console.log('ac armazena: ',aC); // cria a constante aC e atribui Null a mesma  // exibe o valor armazenado em aC
let aD = ''; console.log('aD armazena: ',aD); // cria a constante aD e atribui Null a mesma  // exibe o valor armazenado em aD
//Exemplos de atribuição com tipos primitivos, funções e objetos:
console.log('Exemplos de atribuição com tipos primitivos, funções e objetos:')
const w = 5 //cria a constante w e atribui o valor 5 do tipo Number
let k = w // cria a variavel k e atribui o valor de w a k
var y = 2 // cria a variavel y e atribui o valor 2 do tipo Number
var x = y; //atribui o valor de y a x
console.log('x recebe y e agora armazena: ', x, typeof x);//imprime o valor atual na variavel x e o tipo primitivo
y = 7; // atribui um novo valor a variavel y
var x = y; //atribui o novo valor de y a x
console.log('x recebe y e agora armazena: ', x ,typeof x);//imprime o valor atual na variavel x e o tipo primitivo
y = 5.7;// atribui um novo valor a variavel y
var x = y; //atribui o valor de y a x
console.log('x recebe y e agora armazena: ', x, typeof x);//imprime o valor atual na variavel x e o tipo primitivo
y = '7';// atribui um novo valor a variavel y
var x = y; //atribui o valor de y a x
console.log('x recebe y e agora armazena: ', x, typeof x);//imprime o valor atual na variavel x e o tipo primitivo
y = 'carlos';// atribui um novo valor a variavel y
var x = y; //atribui o valor de y a x
console.log('x recebe y e agora armazena: ', x, typeof x);//imprime o valor atual na variavel x e o tipo primitivo
y = true;// atribui um novo valor a variavel y
var x = y; //atribui o valor de y a x
console.log('x recebe y e agora armazena: ', x, typeof x);//imprime o valor atual na variavel x e o tipo primitivo
y = 1229723767239n;// atribui um novo valor a variavel y
var x = y; //atribui o valor de y a x
console.log('x recebe y e agora armazena: ', x, typeof x);//imprime o valor atual na variavel x e o tipo primitivo
y = { nome: "Maria", idade: 25 };// atribui um objeto a variavel y
var x = y; //atribui o objeto y a variavel x
console.log('x recebe y e agora armazena: ', x, typeof x);//imprime o valor atual na variavel x e o tipo primitivo
y = ["maçã", "banana", "laranja"];// atribui um arrey a variavel y
var x = y; //atribui o arrey y a variavel x
console.log('x recebe y e agora armazena: ', x, typeof x);//imprime o valor atual na variavel x e o tipo primitivo
y = function() { console.log("Olá!"); };// atribui uma função a variavel y
var x = y; //atribui a função y a x
console.log('x recebe y e agora armazena: ', x, typeof x);//imprime o valor atual na variavel x e o tipo primitivo
x(); // executa a função y atribuida a variavel x
}operadoresDeAtribuição()}
{function operadoresDeAtribuiçãoCompostos(){
//Operadores de atribuição
console.log('Operadores de atribuição');
/*Os operadores de atribuição compostos são uma forma abreviada de realizar uma operação aritmética e atribuir o resultado a uma variável. 
Eles combinam um operador aritmético com o operador de atribuição (=).*/
//Lista completa completa dos operadores de atribioção compostos:
{//somaigual (+=) >>>> Soma um valor e atribui o resultado à variável.
console.log('somaigual (+=)')
/*Exemplo:*/ let x = 1; x += 5; /* é equivalente a */ let x1 = 1; x1 = x1 + 5;
console.log('let x = 1; x += 5; x= '+x,'=== let x1 = 1; x1 = x1 + 5; x1= '+ x1);//imprime ambas variaveis e mais as declarações mostrando que são iguais.
//Exemplo com alguns tipos primitivos
console.log('Exemplo com alguns tipos primitivos:');
let a1= 3;// cria variavel a1 e atribui o valor 3 do tipo Number
console.log(typeof a1, a1 += 3.6)//primeiro imprime o tipo da variavel a1 depois soma a variavel a1 ao valor Number 3.6 e atribui a soma a propria variavel a1, imprimindo o resultado
let a5= 4.7;//cria variavel a5 e atribui o valor 4.7 do tipo Number
console.log(typeof a5, a5 += 7)//primeiro imprime o tipo da variavel a5 depois soma a variavel a5 ao valor Number 7 e atribui a soma a propria variavel a5, imprimindo o resultado
let a2= 'Carlos';//cria variavel a2 e atribui o valor Carlos do tipo String
console.log(typeof a2, a2 += 7) //primeiro imprime o tipo da variavel a2 depois soma a variavel a2 ao valor Number 7 e atribui a soma a propria variavel a2, imprimindo o resultado
/*OBS: No caso de Strings o valor não é somado, mas sim concatenado*/
let a3= '24';//cria variavel a3 e atribui o valor 24 do tipo String
console.log(typeof a3,a3 += 7)//primeiro imprime o tipo da variavel a3 depois soma a variavel a3 ao valor Number 7 e atribui a soma propria variavel a3, imprimindo o resultado
console.log(typeof a3, typeof a2, a3 += a2)//primeiro imprime o tipo da variavel a3 depois imprime o tipo da variavel a2 e atribui variavel a3 a concatenação das variaveis a3 e a2
/*OBS: No caso de Strings o valor não é somado, mas sim concatenado*/
let a4= 1234459398898798n;//cria variavel a4 e atribui o valor 1234459398898798 do tipo BigInt
//console.log(a4 += 1) a operação resulta em erro quando aplicada a um BigInt e um Number
console.log(typeof a4, a4 += 1n)//primeiro imprime o tipo da variavel a4 depois soma a variavel a4 ao valor BigInt 1 e atribui a soma propria variavel a4, imprimindo o resultado
console.log(typeof a4, typeof a2,  a4+=a2)//primeiro imprime o tipo da variavel a4 depois imprime o tipo da variavel a2 e atribui variavel a4 a concatenação das variaveis a4 e a2
}
{//subtraiigual (-=) >>>> subtrai um valor e atribui o resultado à variável.
console.log('subtraiigual (-=)')
/*Exemplo:*/ let x = 1; x -= 5; /* é equivalente a */ let x1 = 1; x1 = x1 - 5;
console.log('let x = 1; x -= 5; x= '+x,'=== let x1 = 1; x1 = x1 - 5; x1= '+ x1);//imprime ambas variaveis e mais as declarações mostrando que são iguais.
//Exemplo com alguns tipos primitivos
console.log('Exemplo com alguns tipos primitivos:');
let a1= 3;// cria variavel a1 e atribui o valor 3 do tipo Number
console.log(typeof a1, a1 -= 3.6)//primeiro imprime o tipo da variavel a1 depois subtrai a variavel a1 ao valor Number 3.6 e atribui asubtração a propria variavel a1, imprimindo o resultado
let a5= 4.7;//cria variavel a5 e atribui o valor 4.7 do tipo Number
console.log(typeof a5, a5 -= 7)//primeiro imprime o tipo da variavel a5 depois subtrai a variavel a5 ao valor Number 7 e atribui a subtração apropria variavel a5, imprimindo o resultado
let a2= 'Carlos';//cria variavel a2 e atribui o valor Carlos do tipo String
console.log(typeof a2, a2 -= 'Carlos') //primeiro imprime o tipo da variavel a2 depois imprime NaN, string não pode ser subtraida diretamente.
let a3= '24';//cria variavel a3 e atribui o valor 24 do tipo String
console.log(typeof a3,a3 -= 7)//primeiro imprime o tipo da variavel a3 depois subtrai a variavel a3 ao valor Number 7 e atribui a subtração apropria variavel a3, imprimindo o resultado . Nesse caso ele converte o valor 24 de String para Number para conseguir realizar a operação
console.log(typeof a3, typeof a2, a3 -= a2)//primeiro imprime o tipo da variavel a3 depois imprime o tipo da variavel a2 e imprime NaN na telapois a operação não é permitida entre um Number e uma String.
let a4= 124459398898798n;//cria variavel a4 e atribui o valor 1234459398898798 do tipo BigInt
//console.log(a4 -= 1) a operação resulta em erro quando aplicada a um BigInt e um Number
console.log(typeof a4, a4 -= 1n)//primeiro imprime o tipo da variavel a4 depois subtrai a variavel a4 ao valor BigInt 1 e atribui a subtração a propria variavel a4, imprimindo o resultado
//console.log(typeof a4, typeof a2,  a4-=a2)//primeiro imprime o tipo da variavel a4 depois imprime o tipo da variavel a2/ a operação retornar erro pois não é possivel realizar a operação com um BigInt e uma String
}
{//Multiplicaigual (*=) >>>> Multiplica um valor e atribui o resultado à variável.
console.log('Multiplicaigual (*=)')
/*Exemplo:*/ let x = 1; x *= 5; /* é equivalente a */ let x1 = 1; x1 = x1 * 5;
console.log('let x = 1; x *= 5; x= '+x,'=== let x1 = 1; x1 = x1 * 5; x1= '+ x1);//imprime ambas variaveis e mais as declarações mostrando que são iguais.
//Exemplo com alguns tipos primitivos
console.log('Exemplo com alguns tipos primitivos:');
let a1= 3;// cria variavel a1 e atribui o valor 3 do tipo Number
console.log(typeof a1, a1 *= 3.6)//primeiro imprime o tipo da variavel a1 depois Multiplica a variavel a1 ao valor Number 3.6 e atribui a multiplicação dos fatores a propria variavel a1, imprimindo o resultado
let a5= 4.7;//cria variavel a5 e atribui o valor 4.7 do tipo Number
console.log(typeof a5, a5 *= 7)//primeiro imprime o tipo da variavel a5 depois Multiplica a variavel a5 ao valor Number 7 e atribui a multiplicação dos fatores a propria variavel a5, imprimindo o resultado
let a2= 'Carlos';//cria variavel a2 e atribui o valor Carlos do tipo String
console.log(typeof a2, a2 *= 'Carlos') //primeiro imprime o tipo da variavel a2 depois imprime NaN, string não pode ser Multiplicada diretamente.
let a3= '24';//cria variavel a3 e atribui o valor 24 do tipo String
console.log(typeof a3,a3 *= 7)//primeiro imprime o tipo da variavel a3 depois Multiplica a variavel a3 ao valor Number 7 e atribui a multiplicação dos fatores a propria variavel a3, imprimindo o resultado . Nesse caso ele converte o valor 24 de String para Number para conseguir realizar a operação
console.log(typeof a3, typeof a2, a3 *= a2)//primeiro imprime o tipo da variavel a3 depois imprime o tipo da variavel a2 e imprime NaN na tela pois a operação não é permitida entre um Number e uma String.
let a4= 1234459398898798n;//cria variavel a4 e atribui o valor 1234459398898798 do tipo BigInt
//console.log(a4 *= 1) a operação resulta em erro quando aplicada a um BigInt e um Number
console.log(typeof a4, a4 *= 2n)//primeiro imprime o tipo da variavel a4 depois Multiplica a variavel a4 ao valor BigInt 2 e atribui a multiplicação dos fatores a propria variavel a4, imprimindo o resultado
//console.log(typeof a4, typeof a2,  a4*=a2)//primeiro imprime o tipo da variavel a4 depois imprime o tipo da variavel a2/ a operação retornar erro pois não é possivel realizar a operação com um BigInt e uma String
}
{//Divideigual (/=) >>>> divide um valor e atribui o resultado à variável.
console.log('Divideigual (/=)')
/*Exemplo:*/ let x = 1; x /= 5; /* é equivalente a */ let x1 = 1; x1 = x1 / 5;
console.log('let x = 1; x /= 5; x= '+x,'=== let x1 = 1; x1 = x1 / 5; x1= '+ x1);//imprime ambas variaveis e mais as declarações mostrando que são iguais.
//Exemplo com alguns tipos primitivos
console.log('Exemplo com alguns tipos primitivos:');
let a1= 3;// cria variavel a1 e atribui o valor 3 do tipo Number
console.log(typeof a1, a1 /= 3.6)//primeiro imprime o tipo da variavel a1 depois divide a variavel a1 pelo valor Number 3.6 e atribui o resultado da divisão a propria variavel a1, imprimindo o resultado
let a5= 4.7;//cria variavel a5 e atribui o valor 4.7 do tipo Number
console.log(typeof a5, a5 /= 7)//primeiro imprime o tipo da variavel a5 depois divide a variavel a5 pelo valor Number 7 e atribui o resultado da divisão a propria variavel a5, imprimindo o resultado
let a2= 'Carlos';//cria variavel a2 e atribui o valor Carlos do tipo String
console.log(typeof a2, a2 /= 'Carlos') //primeiro imprime o tipo da variavel a2 depois imprime NaN, string não pode ser dividida diretamente.
let a3= '24';//cria variavel a3 e atribui o valor 24 do tipo String
console.log(typeof a3,a3 /= 7)//primeiro imprime o tipo da variavel a3 depois divide a variavel a3 pelo valor Number 7 e atribui o resultado da divisão a propria variavel a3, imprimindo o resultado . Nesse caso ele converte o valor 24 de String para Number para conseguir realizar a operação
console.log(typeof a3, typeof a2, a3 /= a2)//primeiro imprime o tipo da variavel a3 depois imprime o tipo da variavel a2 e imprime NaN na tela pois a operação não é permitida entre um Number e uma String.
let a4= 1234459398898798n;//cria variavel a4 e atribui o valor 1234459398898798 do tipo BigInt
//console.log(a4 /= 1) a operação resulta em erro quando aplicada a um BigInt e um Number
console.log(typeof a4, a4 /= 2n)//primeiro imprime o tipo da variavel a4 depois divide a variavel a4 pelo valor BigInt 2 e atribui o resultado da divisão a propria variavel a4, imprimindo o resultado
//console.log(typeof a4, typeof a2,  a4/=a2)//primeiro imprime o tipo da variavel a4 depois imprime o tipo da variavel a2/ a operação retornar erro pois não é possivel realizar a operação com um BigInt e uma String
}
{//Retoigual (%=) >>>> Calcula o resto da divisão e atribui o resultado à variável.
console.log('Restoigual (%=)')
/*Exemplo:*/ let x = 1; x %= 5; /* é equivalente a */ let x1 = 1; x1 = x1 % 5;
console.log('let x = 1; x %= 5; x= '+x,'=== let x1 = 1; x1 = x1 % 5; x1= '+ x1);//imprime ambas variaveis e mais as declarações mostrando que são iguais.
//Exemplo com alguns tipos primitivos
console.log('Exemplo com alguns tipos primitivos:');
let a1= 3;// cria variavel a1 e atribui o valor 3 do tipo Number
console.log(typeof a1, a1 %= 3.6)//primeiro imprime o tipo da variavel a1 depois divide a variavel a1 pelo valor Number 3.6 e atribui o resto da divisão a propria variavel a1, imprimindo o resultado
let a5= 4.7;//cria variavel a5 e atribui o valor 4.7 do tipo Number
console.log(typeof a5, a5 %= 7)//primeiro imprime o tipo da variavel a5 depois divide a variavel a5 pelo valor Number 7 e atribui o resto da divisão a propria variavel a5, imprimindo o resultado
/*É possivel observar nos casos acima que o resto resultante das divisões é a propria variavel, isso ocorre porque o numero que divide é menor que o que está dividindo, impossibilitando um numero inteiro de resto e fazendo voltar o mesmo valor do dividendo.*/
let a2= 'Carlos';//cria variavel a2 e atribui o valor Carlos do tipo String
console.log(typeof a2, a2 %= 'Carlos') //primeiro imprime o tipo da variavel a2 depois imprime NaN, string não pode ser dividida diretamente.
let a3= '24';//cria variavel a3 e atribui o valor 24 do tipo String
console.log(typeof a3,a3 %= 7)//primeiro imprime o tipo da variavel a3 depois divide a variavel a3 pelo valor Number 7 e atribui o resto da divisão a propria variavel a3, imprimindo o resultado . Nesse caso ele converte o valor 24 de String para Number para conseguir realizar a operação
console.log(typeof a3, typeof a2, a3 %= a2)//primeiro imprime o tipo da variavel a3 depois imprime o tipo da variavel a2 e imprime NaN na tela pois a operação não é permitida entre um Number e uma String.
let a4= 1234459398898798n;//cria variavel a4 e atribui o valor 1234459398898798 do tipo BigInt
//console.log(a4 %= 1) a operação resulta em erro quando aplicada a um BigInt e um Number
console.log(typeof a4, a4 %= 2n)//primeiro imprime o tipo da variavel a4 depois divide a variavel a4 pelo valor BigInt 2 e atribui o resto da divisão a propria variavel a4, imprimindo o resultado
//console.log(typeof a4, typeof a2,  a4%=a2)//primeiro imprime o tipo da variavel a4 depois imprime o tipo da variavel a2/ a operação retornar erro pois não é possivel realizar a operação com um BigInt e uma String
}
{//Exponenciaçãoigual (**=) >>>> Eleva um número a uma potência e atribui o resultado à variável.
console.log('Exponenciaçãoigual (**=)')
/*Exemplo:*/ let x = 1; x **= 5; /* é equivalente a */ let x1 = 1; x1 = x1 ** 5;
console.log('let x = 1; x **= 5; x= '+x,'=== let x1 = 1; x1 = x1 ** 5; x1= '+ x1);//imprime ambas variaveis e mais as declarações mostrando que são iguais.
//Exemplo com alguns tipos primitivos
console.log('Exemplo com alguns tipos primitivos:');
let a1= 3;// cria variavel a1 e atribui o valor 3 do tipo Number
console.log(typeof a1, a1 **= 3.6)//primeiro imprime o tipo da variavel a1 depois a variavel a1 é elevada a potencia expressa pelo valor Number 3.6 e atribui o resultado da potenciação a propria variavel a1, imprimindo o resultado
let a5= 4.7;//cria variavel a5 e atribui o valor 4.7 do tipo Number
console.log(typeof a5, a5 **= 7)//primeiro imprime o tipo da variavel a5 depois a variavel a5 é elevada a potencia expressa pelo valor Number 7 e atribui o resultado da potenciação a propria variavel a5, imprimindo o resultado
let a2= 'Carlos';//cria variavel a2 e atribui o valor Carlos do tipo String
console.log(typeof a2, a2 **= 'Carlos') //primeiro imprime o tipo da variavel a2 depois imprime NaN, string não pode ser dividida diretamente.
let a3= '24';//cria variavel a3 e atribui o valor 24 do tipo String
console.log(typeof a3,a3 **= 7)//primeiro imprime o tipo da variavel a3 depois a variavel a3 é elevada a potencia expressa pelo valor Number 7 e atribui o resultado da potenciação a propria variavel a3, imprimindo o resultado . Nesse caso ele converte o valor 24 de String para Number para conseguir realizar a operação
console.log(typeof a3, typeof a2, a3 **= a2)//primeiro imprime o tipo da variavel a3 depois imprime o tipo da variavel a2 e imprime NaN na tela pois a operação não é permitida entre um Number e uma String.
let a4= 1234459398898798n;//cria variavel a4 e atribui o valor 1234459398898798 do tipo BigInt
//console.log(a4 **= 1) a operação resulta em erro quando aplicada a um BigInt e um Number
console.log(typeof a4, a4 **= 2n)//primeiro imprime o tipo da variavel a4 depois a variavel a4 é elevada a potencia expressa pelo valor BigInt 2 e atribui o resultado da potenciação a propria variavel a4, imprimindo o resultado
//console.log(typeof a4, typeof a2,  a4**=a2)//primeiro imprime o tipo da variavel a4 depois imprime o tipo da variavel a2/ a operaçãoretornar erro pois não é possivel realizar a operação com um BigInt e uma String
}
{/*operador de deslocamento à esquerdaigual (<<=) Ele serve para realizar um deslocamento bit a bit à esquerda em um número e, em seguida, atribuir o resultado à própria variável.
Imagine um número binário como uma sequência de bits (0s e 1s). Deslocar um número à esquerda significa mover todos os bits uma ou mais posições para a esquerda, inserindo zeros à direita. Cada posição que você desloca para a esquerda equivale a multiplicar o número por 2.
O operando à esquerda do operador é deslocado para a esquerda o número de posições especificado pelo operando à direita.
O resultado do deslocamento é então atribuído de volta à variável original.
Exemplo:*/
console.log('operador de deslocamento à esquerdaigual <<=')
let x = 5; // Em binário: 0101
x <<= 2; // Desloca x duas posições para a esquerda
console.log(x); // Imprime: 20 (em binário: 10100)
//Exemplo com alguns tipos primitivos
console.log('Exemplo com alguns tipos primitivos:');
let a1= 3;// cria variavel a1 e atribui o valor 3 do tipo Number em binario 011
console.log(typeof a1, a1 <<= 3.6)//primeiro imprime o tipo da variavel a1 depois o valor expresso em binario é deslocado 3 posições para a esquerda e impresso 24 em binario 011000 
let a5= 4.7;//cria variavel a5 e atribui o valor 4.7 do tipo Number em binario 0100
console.log(typeof a5, a5 <<= 7)//primeiro imprime o tipo da variavel a5 depois o valor expresso em binario é deslocado 7 posições para a esquerda e impresso 512 em binario 1000000000 
//let a2= 'Carlos';//cria variavel a2 e atribui o valor Carlos do tipo String
//console.log(typeof a2, a2 <<= 'Carlos') //operação bit a bit não funciona em string
//console.log(typeof a3,a3 <<= 7)//primeiro imprime o tipo da variavel a3 depois o valor expresso em binario é deslocado 7 posições para a esquerda e impresso 4586471424 em binario 1000000000  . Nesse caso ele converte o valor 24 de String para Number para conseguir realizar a operação
//console.log(typeof a3, typeof a2, a3 <<= a2)//primeiro imprime o tipo da variavel a3 depois imprime o tipo da variavel a2 e imprime NaN na tela pois a operação não é permitida entre um Number e uma String.
let a4= 1234459398898798n;//cria variavel a4 e atribui o valor 1234459398898798 do tipo BigInt
//console.log(a4 **= 1) a operação resulta em erro quando aplicada a um BigInt e um Number
console.log(typeof a4, a4 <<= 2n)//primeiro imprime o tipo da variavel a4 depois a variavel a4 é elevada a potencia expressa pelo valor BigInt 2 e atribui o resultado da potenciação a propria variavel a4, imprimindo o resultado
//console.log(typeof a4, typeof a2,  a4<<=a2)//primeiro imprime o tipo da variavel a4 depois imprime o tipo da variavel a2/ a operaçãoretornar erro pois não é possivel realizar a operação com um BigInt e uma String
//OBS: tive problemas na execução da operação com string e com BigInt, com Number funciona plenamente.
}
{/*operador de deslocamento à direitaigual (>>=) Ele serve para realizar um deslocamento bit a bit à direita em um número e, em seguida, atribuir o resultado à própria variável.
Imagine um número binário como uma sequência de bits (0s e 1s). Deslocar um número à direita significa mover todos os bits uma ou mais posições para a direita, descartando os bits mais à direita e inserindo zeros à esquerda. Cada posição que você desloca para a direita equivale a dividir o número por 2.
O operando à esquerda do operador é deslocado para a direita o número de posições especificado pelo operando à direita.
O resultado do deslocamento é então atribuído de volta à variável original.
Exemplo:*/
console.log('operador de deslocamento à direitaigual >>= ') 
let x = 12; // Em binário: 1100
x >>= 2; // Desloca x duas posições para a direita
console.log(x); // Imprime: 3 (em binário: 0011)
//Exemplo com alguns tipos primitivos
console.log('Exemplo com alguns tipos primitivos:');
let a1= 3;// cria variavel a1 e atribui o valor 3 do tipo Number em binario 011
console.log(typeof a1, a1 >>= 3.6)//primeiro imprime o tipo da variavel a1 depois o valor expresso em binario é deslocado 3 posições para a direita e impresso 0 em binario 0000
let a5= 4.7;//cria variavel a5 e atribui o valor 4.7 do tipo Number em binario 0100
console.log(typeof a5, a5 >>= 2)//primeiro imprime o tipo da variavel a5 depois o valor expresso em binario é deslocado 2 posições para a direita e impresso 1 em binario 0001
//let a2= 'Carlos';//cria variavel a2 e atribui o valor Carlos do tipo String
//console.log(typeof a2, a2 >>= 'Carlos') //operação bit a bit não funciona em string
//console.log(typeof a3,a3 >>= 7)//primeiro imprime o tipo da variavel a3 depois o valor expresso em binario é deslocado 7 posições para a direita e impresso 4586471424 em binario 1000000000  . Nesse caso ele converte o valor 24 de String para Number para conseguir realizar a operação
//console.log(typeof a3, typeof a2, a3 >>= a2)//primeiro imprime o tipo da variavel a3 depois imprime o tipo da variavel a2 e imprime NaN na tela pois a operação não é permitida entre um Number e uma String.
let a4= 1234459398898798n;//cria variavel a4 e atribui o valor 1234459398898798 do tipo BigInt
//console.log(a4 **= 1) a operação resulta em erro quando aplicada a um BigInt e um Number
console.log(typeof a4, a4 >>= 2n)//primeiro imprime o tipo da variavel a4 depois a variavel a4 é elevada a potencia expressa pelo valor BigInt 2 e atribui o resultado da potenciação a propria variavel a4, imprimindo o resultado
//console.log(typeof a4, typeof a2,  a4>>=a2)//primeiro imprime o tipo da variavel a4 depois imprime o tipo da variavel a2/ a operaçãoretornar erro pois não é possivel realizar a operação com um BigInt e uma String
//OBS: tive problemas na execução da operação com string e com BigInt, com Number funciona plenamente.
}
{/*operador de deslocamento à direita sem sinaigual (>>=) Ele serve para realizar um deslocamento bit a bit à direita em um número, sempre preenchendo com zeros à esquerda, e atribuir o resultado à própria variável.
Assim como no operador >>, move todos os bits uma ou mais posições para a direita, descartando os bits mais à direita.
Independentemente do sinal do número inicial, os bits à esquerda serão sempre preenchidos com zeros. Isso garante que o resultado seja sempre um número positivo.
O operando à esquerda do operador é deslocado para a direita o número de posições especificado pelo operando à direita.
Os bits à esquerda são preenchidos com zeros.
O resultado do deslocamento é então atribuído de volta à variável original.
Exemplo:*/
console.log('operador de deslocamento à direita sem sinaigual >>= ') 
let x = -12; // Em binário (representação de 32 bits): 11111111111111111111111111110000
x >>>= 2; // Desloca x duas posições para a direita sem sinal
console.log(x); // Imprime: 1073741821 (em binário: 00111111111111111111111111111100)
//Exemplo com alguns tipos primitivos
console.log('Exemplo com alguns tipos primitivos:');
let a1= 3;// cria variavel a1 e atribui o valor 3 do tipo Number em binario 011
console.log(typeof a1, a1 >>>= 3.6)//primeiro imprime o tipo da variavel a1 depois o valor expresso em binario é deslocado 3 posições para a direita e impresso 0 em binario 0000
let a5= 4.7;//cria variavel a5 e atribui o valor 4.7 do tipo Number em binario 0100
console.log(typeof a5, a5 >>= 2)//primeiro imprime o tipo da variavel a5 depois o valor expresso em binario é deslocado 2 posições para a direita e impresso 1 em binario 0001
//let a2= 'Carlos';//cria variavel a2 e atribui o valor Carlos do tipo String
//console.log(typeof a2, a2 >>= 'Carlos') //operação bit a bit não funciona em string
//console.log(typeof a3,a3 >>= 7)//primeiro imprime o tipo da variavel a3 depois o valor expresso em binario é deslocado 7 posições para a direita e impresso 4586471424 em binario 1000000000  . Nesse caso ele converte o valor 24 de String para Number para conseguir realizar a operação
//console.log(typeof a3, typeof a2, a3 >>= a2)//primeiro imprime o tipo da variavel a3 depois imprime o tipo da variavel a2 e imprime NaN na tela pois a operação não é permitida entre um Number e uma String.
let a4= 1234459398898798n;//cria variavel a4 e atribui o valor 1234459398898798 do tipo BigInt
//console.log(a4 **= 1) a operação resulta em erro quando aplicada a um BigInt e um Number
console.log(typeof a4, a4 >>= 2n)//primeiro imprime o tipo da variavel a4 depois a variavel a4 é elevada a potencia expressa pelo valor BigInt 2 e atribui o resultado da potenciação a propria variavel a4, imprimindo o resultado
//console.log(typeof a4, typeof a2,  a4>>=a2)//primeiro imprime o tipo da variavel a4 depois imprime o tipo da variavel a2/ a operaçãoretornar erro pois não é possivel realizar a operação com um BigInt e uma String
//OBS: tive problemas na execução da operação com string e com BigInt, com Number funciona plenamente.
//OBS2:  Quando você precisa tratar todos os números como positivos utilize >>>=
}
{/*OR bit a bit igual (|=) Em uma operação OR bit a bit, cada bit correspondente de dois números é comparado. Se pelo menos um dos bits for 1, o bit resultante será 1. Caso contrário, será 0.
O operando à esquerda do operador é submetido a uma operação OR bit a bit com o operando à direita.
O resultado da operação OR é então atribuído de volta à variável original.
Só é possivel realizar operações Bit a Bit em Number ou BigInt. Ou em casos especiais ou a String é operada como Number
Exemplo:*/
console.log('OR bit a bit igual |=') 
let x = 5; // declara a variavel x e atribui o valor Number 5 Em binário: 0101
x |= 3; // a variavel x é submetida a uma operação OR bit a bit com o operando à direita, nesse caso o 3 em binario 0011. 
console.log(x); // Imprime o numero resultante 7 em binario 0111
//Exemplo com alguns tipos primitivos
console.log('Exemplo com alguns tipos primitivos:');
let a1= 3;// declara variavel a1 e atribui o valor 3 do tipo Number em binario 011
console.log(typeof a1, a1 |= 3.6)//primeiro imprime o tipo da variavel a1 depois a variavel a1 é submetida a uma operação OR bit a bit com o operando à direita, nesse caso o 3 em binario 011. e impresso o numero resultante 3 em binario 011
let a5= 4.7;//declara variavel a5 e atribui o valor 4.7 do tipo Number em binario 0100
console.log(typeof a5, a5 |= 2)//primeiro imprime o tipo da variavel a5 depois a variavel a5 é submetido a uma operação OR bit a bit com o operando à direita, nesse caso o 2 em binario 10. e impresso o numero resultante 6 em binario 110
let a4= 1234459398898798n;//cria variavel a4 e atribui o valor 1234459398898798 do tipo BigInt em binario 100011000101011101111111001111101100000010001101110
//console.log(a4 **= 1) a operação resulta em erro quando aplicada a um BigInt e um Number
console.log(typeof a4, a4 |= 2n)//primeiro imprime o tipo da variavel a4 depois a variavel a4 é submetido a uma operação OR bit a bit com o operando à direita, nesse caso o 2 em binario 10. e impresso o numero resultante 1234459398898798n em binario 100011000101011101111111001111101100000010001101110
//OBS: tive problemas na execução da operação com string e com BigInt, com Number funciona plenamente.
}
{/*E bit a bit (&=) Ele é utilizado para realizar uma operação E bit a bit em um número e, em seguida, atribuir o resultado à própria variável.
Em uma operação E bit a bit, cada bit correspondente de dois números é comparado. Se ambos os bits forem 1, o bit resultante será 1. Caso contrário, será 0.
O operando à esquerda do operador é submetido a uma operação E bit a bit com o operando à direita.
O resultado da operação E é então atribuído de volta à variável original.
Exemplo:*/
console.log('E bit a bit &=') 
let x = 5; // declara a variavel x e atribui o valor Number 5 Em binário: 0101
x &= 3; //O operando à esquerda do operador (a variavel x nesse caso) é submetido a uma operação E bit a bit com o operando à direita (nesse caso o valor 3. Em binário: 0011)
console.log(x); // Imprime o valor resultante da operação: 1 (em binário: 0001)
//Exemplo com alguns tipos primitivos
console.log('Exemplo com alguns tipos primitivos:');
let a1= 3;// declara variavel a1 e atribui o valor 3 do tipo Number em binario 011
console.log(typeof a1, a1 &= 3.6)//primeiro imprime o tipo da variavel a1 depois a variavel a1 é submetida a uma operação OR bit a bit com o operando à direita, nesse caso o 3 em binario 011. e impresso o numero resultante 3 em binario 011
let a5= 4.7;//declara variavel a5 e atribui o valor 4.7 do tipo Number em binario 0100
console.log(typeof a5, a5 &= 2)//primeiro imprime o tipo da variavel a5 depois a variavel a5 é submetido a uma operação OR bit a bit com o operando à direita, nesse caso o 2 em binario 10. e impresso o numero resultante 6 em binario 110
let a4= 1234459398898798n;//cria variavel a4 e atribui o valor 1234459398898798 do tipo BigInt em binario 100011000101011101111111001111101100000010001101110
//console.log(a4 **= 1) a operação resulta em erro quando aplicada a um BigInt e um Number
console.log(typeof a4, a4 &= 2n)//primeiro imprime o tipo da variavel a4 depois a variavel a4 é submetido a uma operação OR bit a bit com o operando à direita, nesse caso o 2 em binario 10. e impresso o numero resultante 2n em binario 10
//OBS: tive problemas na execução da operação com string e com BigInt, com Number funciona plenamente.
}
{/*Operador de Atribuição Nula (??=)  é uma adição relativamente recente ao JavaScript, introduzida para facilitar a atribuição de valores padrão a variáveis quando elas são null ou undefined. Ele é especialmente útil quando você quer garantir que uma variável tenha um valor definido antes de usá-la.
Verifica se é nulo ou indefinido: O operador verifica se o valor à esquerda é null ou undefined.
Atribui se necessário: Se o valor for null ou undefined, ele atribui o valor à direita. Caso contrário, não faz nada.
Sintaxe:
variavel ??= valorPadrao;
Exemplo:*/
console.log('Operador de Atribuição Nula ??= ');
let nome = null;
nome ??= "Anônimo";
console.log(nome); // Imprime: "Anônimo"

let idade = 25;
idade ??= 30;
console.log(idade); // Imprime: 25 (pois idade já tem um valor)
/*Quando usar:
Para definir valores padrão para variáveis que podem ser null ou undefined.
Para lidar com propriedades opcionais em objetos.
Para definir valores padrão para parâmetros de função.
Exemplo com parâmetros de função:*/
function saudacao(nome) {
    nome ??= "Usuário";
    console.log(`Olá, ${nome}!`);
  }
  
  saudacao(); // Imprime: Olá, Usuário!
  saudacao("João"); // Imprime: Olá, João!
}
{/*Operador de atribuição XOR (^=)  Ele é usado para realizar uma operação XOR bit a bit entre o valor atual de uma variável e um novo valor, e atribuir o resultado à variável original.
XOR: A operação XOR (ou "ou exclusivo") retorna 1 (true) se os bits correspondentes em duas posições forem diferentes, e 0 (false) se forem iguais.
Bit a bit: A operação é realizada em cada bit individual de dois números.
 Caso todos os operandos forem truthy, o último operando será retornado.

Valores truthy e falsy:
Truthy: Valores que são considerados verdadeiros em contextos booleanos. Exemplos: true, números diferentes de zero, strings não vazias, objetos e arrays.
Falsy: Valores que são considerados falsos em contextos booleanos. Exemplos: false, 0, -0, "", null, undefined, NaN.
ex: x ^= y; é equivalente a x = x ^ y;
Exemplo:*/
console.log('Operador de atribuição XOR ^=')
let x = 5; // declara a variavel x e atribui o valor Number 5 em binário: 0101
let y = 3; // declara a variavel x e atribui o valor Number 3 em binário: 0011
x ^= y; // x agora será 6 (em binário: 0110)
console.log(x);// imprime a variavel x valendo 6

// Exemplo de troca de valores:
let a = 10; // declara a variavel a e atribui o valor Number 10 em binario 1010
let b = 5; // declara a variavel b e atribui o valor Number 5 em binario   0101
a ^= b;// a variavel a recebe o valor Number 15 em binario 1111
b ^= a;// a variavel b recebe o valor Number 10 em binario 1010
a ^= b;// a variavel a recebe o valor Number 5 em binario 0101
console.log(a); // Imprime o valor Number 5 em binario 101 (valor original de b) 
console.log(b); // Imprime o valor Number 10 em binario 1010 (valor original de a) 

/*Quando tilizar o ^= 
Operações de baixo nível: Quando você precisa manipular bits individualmente em um número.
Criptografia: Em algoritmos de criptografia que envolvem operações bit a bit.
Otimização de código: Em casos raros, pode ser usado para otimizar o código, mas geralmente é mais legível usar operações mais comuns.
*/
}
{/*Operador OU lógico com atribuição  (||=)  É uma combinação do operador OU lógico (||) com o operador de atribuição (=).
Atribui o valor à direita à variável à esquerda apenas se a variável à esquerda for falsy (false, null, undefined, 0, "", NaN).
É utilizado para atribuir valores padrão ou para realizar atribuições condicionais.
Exemplo:*/
console.log('Operador OU lógico com atribuição  ||= ')
let nome = null; // declara a variavel nome e atribui o tipo primitivp Null
nome ||= "Usuário não informado"; // realiza um teste logico OU e atribui a String  "Usuário não informado" a variavel nome.
console.log(nome)// imprime a variavel retornada.
//Neste exemplo, como nome é null (falsy), o valor "Usuário não informado" será atribuído a nome.

// Exemplo Atribuindo um valor padrão a uma propriedade de um objeto:
const pessoa = {
    nome: 'João',
    idade: 30
  };//declara a constante pessoa e atribui o objeto declarando as propriedades nome e idade.
  pessoa.email ||= 'email@exemplo.com'; // cria a propriedade email no objeto pessoa e realiza um teste logico.
   // Se a propriedade 'email' não existir ou for falsy, atribui um valor padrão
  console.log(pessoa);//imprime o objeto pessoa.

// Exemplo Atribuindo um valor padrão a uma propriedade de um objeto:
{
function obterNome(nome21) {
    let usuarioEspecial = {nome21,}; //declarada a variavel e atribuido um objeto com o nome fornecido como parâmetro
    let nomeCompleto = nome21 ||= 'Usuário anônimo';// cria a variavel nomeCompleto e realiza a operação logica 
    return nomeCompleto; // se informado nome na função retorna o nome se não retorna a mensagem. 
  } console.log(obterNome('carlos')); // imprime carlos.
  }
}
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

}operadoresDeAtribuiçãoCompostos()}