import {Cliente} from "./byteBank_Clientes.js";
export class ContaCorrente{
    //dados pulicos
    agencia;
    tipoDeConta;
    _cliente;
    //dados privado
    saldo = 0;
 
    
    set cliente(newValue){
        if(newValue instanceof Cliente){
            this._cliente = newValue;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
    }

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
            return valor;
        } 
    }     

    depositar(valor){
        if(valor > 0)
        {
        
        }
        this.saldo += valor;
    }

    
    //função para a realização de transferência de valores entre as contas
    transferir(valor, conta){
        conta.cidade = 'São Paulo';
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
         
    } 
} 

