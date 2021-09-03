export class Cliente {
    primeiroNome;
    _cpf;
    endereçoResidencial;
    
    get cpf(){
        return this._cpf;
    }

    get endereçoResidencial(){
        this.endereçoResidencial;
    }
    
    constructor(primeiroNome, cpf, endereçoResidencial){
        this.primeiroNome = primeiroNome;
        this._cpf = cpf;
        this.endereçoResidencial = endereçoResidencial;

    } 
}


