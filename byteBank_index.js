import {Cliente} from './byteBank_Clientes.js'
import {ContaCorrente} from './byteBank_ContaCorrente.js'

let numeroDeContas = 0;

//Dados do cliente1 -
const cliente1 = new Cliente('Daniel', 276869748-63, 'Rua das Ostras, 27'  );
const contaCorrenteDaniel = new ContaCorrente(1001, cliente1);
contaCorrenteDaniel.tipoDeConta = 'Conta Corrente';
contaCorrenteDaniel.cliente = cliente1;

numeroDeContas++;

//Dados do cliente2 -
const cliente2 = new Cliente('Alice', 215696970-81, 'Avenida Beira Mar, 5');
const contaCorrenteAlice = new ContaCorrente(1002, cliente2);
contaCorrenteAlice.tipoDeConta = 'Conta Poupança';

numeroDeContas++;

//Dados do cliente3 -
const cliente3 = new Cliente('Flaviana', 384567210-15, 'Parque das Árvores, 1978');
const contaCorrenteFlaviana = new ContaCorrente(1003, cliente3);
contaCorrenteFlaviana.tipoDeConta = 'Conta Prime';

numeroDeContas++;

//cliente1: valores referente a depósitos e saques
contaCorrenteDaniel.depositar(2000);
contaCorrenteDaniel.sacar(100);

//cliente2: valores referente a depósitos e saques
contaCorrenteAlice.depositar(1500);
contaCorrenteAlice.sacar(50);
contaCorrenteAlice.saldo += (60);

//cliente3: valores referente a depósitos e saques
contaCorrenteFlaviana.depositar(0);
//transferencia entre contas
contaCorrenteDaniel.transferir(100, contaCorrenteFlaviana);
contaCorrenteAlice.transferir(13, contaCorrenteFlaviana);
contaCorrenteFlaviana.sacar(13);

//output
//console.log(contaCorrenteDaniel,contaCorrenteAlice,contaCorrenteFlaviana);
console.log(cliente1, cliente2, cliente3) 



