class CalcController {
    
    constructor () {

        this._displayCalc = "0"; //underline_refere-se a atributo privado
        this._currentDate;
    }

    get displayCalc(){

        return this._displayCalc;
    }

    set displayCalc(valor){

        this._displayCalc = valor;
    }

    get currentDate(){
        return this._currentDate;
    }

    set currentDate(data){
        this._currentDate = data;
    }
}