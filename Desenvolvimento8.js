//Desenvolvimento 08;
//Aluno: Alex Barros;
//Data: 04/02/2023;

let media = (n1, n2) => {
    console.log("A média do aluno é: " + ((n1 + n2)/2));
    console.log("O aluno está " + (((n1 + n2)/2) >= 7 ? 'APROVADO' : 'REPROVADO'));
}

function definir_resultado(nota1, nota2){
	media(nota1, nota2);
	
}

function resultado(){
    let primeira_nota, segunda_nota;

    primeira_nota = parseFloat(prompt("Digite a primeira nota: "));
    segunda_nota = parseFloat(prompt("Digite a segunda nota: "));
    
    definir_resultado(primeira_nota, segunda_nota);
}

resultado();