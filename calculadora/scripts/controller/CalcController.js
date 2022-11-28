class CalcController {
    
    constructor () {

        this._displayCalc = "0"; //underline_refere-se a atributo privado
        this._currentDate;
        this.initialize();
    }

    initialize(){
       let displayCalcEl = document.querySelector("#display");
       let dateEl = document.querySelector("#data");
       let timeEl = document.querySelector("#hora");

       displayCalcEl.innerHTML = "5246";
       dateEl.innerHTML = "01/05/1984";
       timeEl.innerHTML = "00:00";
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

    set currentDate(valor){
        this._currentDate = valor;
    }
}