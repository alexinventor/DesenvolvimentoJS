//Desenvolvimento 06;
//Aluno: Alex Barros;
//Data: 03/02/2023;

//Primeiro código
var nota1 = parseInt(prompt("Digite a primeira nota: "));
var nota2 = parseInt(prompt("Digite a segunda nota: "));
var nota3 = parseInt(prompt("Digite a terceira nota: "));

nota1 += nota2;
nota1 += nota3;
nota1 /= 3;
var resultado = (nota1>=7) ? 'PASSOU' : 'REPROVOU';
console.log("A sua média é: " + nota1);
console.log("O resultado é: " + resultado);

//Segundo código
var primeira_nota = parseInt(prompt("Digite a primeira nota: "));
var segunda_nota = parseInt(prompt("Digite a segunda nota: "));

primeira_nota += segunda_nota;
nota_minima = 21 - primeira_nota;

var retorno = (nota_minima<=10) ? 'A nota mínima que você precisa tirar na próxima prova é, '+ nota_minima + ', para passar com média sete!' : 'Você está reprovado!';

console.log(retorno);