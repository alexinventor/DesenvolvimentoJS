//Desenvolvimento 09;
//Aluno: Alex Barros;
//Data: 08/02/2023;

function Banco(conta, saldo, tipoConta, agencia) {
    this.conta = conta;
    this.saldo = saldo;
    this.tipoConta = tipoConta;
    this.agencia = agencia;
    this.buscarSaldo= function saldoValor(){
        console.log("Saldo: "+this.saldo);
    }
    this.deposito= function depositoValor(movimentacao){
        this.saldo += movimentacao;
    }
    this.saque= function saqueValor(movimentacao){
        this.saldo -= movimentacao;
    }
    this.numeroConta= function conta(){
        console.log("Conta: "+this.conta);
    }
}

var minhaConta = new Banco("5124", 100.5, "contacorrente", 1030);
minhaConta.buscarSaldo();
minhaConta.numeroConta();
transacao = prompt("Informe o tipo de transação: deposito ou saque");
if (transacao == "deposito") {
    valor = parseFloat(prompt("Digite o valor a ser depositado: "));
    minhaConta.deposito(valor);
}
else if (transacao == "saque") {
    valor = parseFloat(prompt("Digite o valor do saque: "));
    minhaConta.saque(valor);
}
else {console.error("Opção inválida!");
}
minhaConta.buscarSaldo();