class Calculator{
    constructor(previousOperandTextElement,currentOperandTextElement){
        this.previousOperandTextElement=previousOperandTextElement
        this.currentOperandTextElement=currentOperandTextElement
    }

    clear(){
        this.currentOperandTextElement= ''
        this.previousOperandTextElement=''
        this.operation= undefined
    }

    delete(){

    }

    appendNumber(number){

    }

    chooseOperation(operation){

    }

    compute(){

    }

    updateDisplay(){

    }
}



const numberButtons= Document.querrySelectorAll('[data-number]')
const operationButton= Document.querrySelectorAll('[data-operation]')
const equalsButton= Document.querrySelect('[data-equals]')
const deleteButton= Document.querrySelect('[data-delete]')
const allClearButton= Document.querrySelect('[data-all-clear]')
const previousOperandTextElement= Document.querrySelect('[data-previous-operand]')
const currentOperandTextElement = Document.querrySelect('[data-current-operand]')


