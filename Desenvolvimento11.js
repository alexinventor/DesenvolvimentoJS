//Desenvolvimento 11;
//Aluno: Alex Barros;
//Data: 23/02/2023;

let filme = {
    nome: "Avatar 2",
    ano: 2022,
    categoria: "ação e aventura"
};

const serie = ['1ªtemporada','2ªtemporada','3ªtemporada'];

function listaFilme() {
    for (let p in filme){
        console.log(`${p}:${filme[p]}`);
    }
}

function listaSerie() {
    for (const t of serie) {
        console.log(t);
    }
}

listaFilme();
listaSerie();