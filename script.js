class Calculator{
    constructor(previousOperandTextElement,currentOperandTextElement){
        this.previousOperandTextElement=previousOperandTextElement
        this.currentOperandTextElement=currentOperandTextElement
        this.clear()
    }

    clear(){
        this.currentOperandTextElement= ''
        this.previousOperandTextElement=''
        this.operation= undefined
    }

    delete(){

    }

    appendNumber(number){
        this.currentOperand = this.currentOperand.toString() + number.toString()

    }

    chooseOperation(operation){

    }

    compute(){

    }

    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand
    }
}



const numberButtons= Document.querrySelectorAll('[data-number]')
const operationButton= Document.querrySelectorAll('[data-operation]')
const equalsButton= Document.querrySelect('[data-equals]')
const deleteButton= Document.querrySelect('[data-delete]')
const allClearButton= Document.querrySelect('[data-all-clear]')
const previousOperandTextElement= Document.querrySelect('[data-previous-operand]')
const currentOperandTextElement = Document.querrySelect('[data-current-operand]')

const calculator=new Calculator(previousOperandTextElement,currentOperandTextElement)

numberButtons.forEach(button =>{
    button.addEventListner('click',() => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})
