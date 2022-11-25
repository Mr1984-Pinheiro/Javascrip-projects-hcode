class CalcController {
    
    constructor () {

        this._displayCalc = "0"; //underline_refere-se a atributo privado
        this._dataAtual;
    }

    get displayCalc(){

        return this._displayCalc;
    }

    set displayCalc(valor){

        this._displayCalc = valor;
    }

    get dataAtual(){
        return this._dataAtual;
    }

    set dataAtual(data){
        this._dataAtual = data;
    }
}