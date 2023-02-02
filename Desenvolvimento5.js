//Desenvolvimento 05;
//Aluno: Alex Barros;
//Data: 31/01/2023;

var num1 = prompt("Digite o primeiro número: ");
var num2 = prompt("Digite o segundo número: ");
var oper = prompt("Digite o operador +, -, * ou /: ");

if (oper == "+") { 
    console.log("A soma dos números é: " + (parseInt(num1) + parseInt(num2)));
}

else if (oper == "-") {
    console.log("A subtração dos números é: " + (num1 - num2));
}

else if (oper == "*") {
    console.log("A multiplicação dos números é: " + (num1 * num2));
}

else if (oper == "/") {
    console.log("A divisão dos números é: " + (num1 / num2));
    if ((num1 % num2) != 0) {
        console.log("A sobra da divisão dos números é: " + (num1 % num2));
    }
}