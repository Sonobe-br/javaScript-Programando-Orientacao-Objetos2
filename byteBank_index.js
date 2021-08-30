import {Cliente} from './byteBank_Clientes.js'
import {ContaCorrente} from './byteBank_ContaCorrente.js'

//Dados do cliente1 -
const cliente1 = new Cliente();
const contaCorrenteDaniel = new ContaCorrente();
cliente1.primeiroNome = 'Daniel';
cliente1.cpf = 276869748-63;
cliente1.rg = 29024161-3;
cliente1.endereçoResidencial = 'Rua das Ostras, 69';

contaCorrenteDaniel.saldo = 0;
contaCorrenteDaniel.agencia = 1001;
contaCorrenteDaniel.tipoDeConta = 'Conta Corrente';
contaCorrenteDaniel.cliente = cliente1;

//Dados do cliente2 -
const cliente2 = new Cliente();
const contaCorrenteAlice = new ContaCorrente();
cliente2.primeiroNome = 'Alice';
cliente2.cpf = 215696970-81;
cliente2.rg = 24025272-4;
cliente2.endereçoResidencial = 'Avenida Beira Mar, 69';

contaCorrenteAlice.saldo = 0;
contaCorrenteAlice.agencia = 1002;
contaCorrenteAlice.tipoDeConta = 'Conta Poupança';
contaCorrenteAlice.cliente = cliente2;

//Dados do cliente3 -
const cliente3 = new Cliente();
const contaCorrenteFlaviana = new ContaCorrente();
cliente3.primeiroNome = 'Flaviana';
cliente3.cpf = 384567210-15;
cliente3.rg = 20135272-5;
cliente3.endereçoResidencial = 'Parque das Árvores, 69';

contaCorrenteFlaviana.saldo = 0;
contaCorrenteFlaviana.agencia = 1003;
contaCorrenteFlaviana.tipoDeConta = 'Conta Prime';
contaCorrenteFlaviana.cliente = cliente3; 


//cliente1: valores referente a depósitos e saques
contaCorrenteDaniel.depositar(2000);
contaCorrenteDaniel.sacar(100);

//cliente2: valores referente a depósitos e saques
contaCorrenteAlice.depositar(1500);
contaCorrenteAlice.sacar(50);
contaCorrenteAlice.saldo += (60);

//cliente3: valores referente a depósitos e saques
contaCorrenteFlaviana.depositar(0);
//contaCorrenteFlaviana.sacar(550);

//transferencia entre contas
contaCorrenteDaniel.transferir(100, contaCorrenteFlaviana);
contaCorrenteAlice.transferir(13, contaCorrenteFlaviana);

//output
console.log(contaCorrenteDaniel,contaCorrenteAlice,contaCorrenteFlaviana);



