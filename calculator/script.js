class Calculator {
    //Constuctor
    constructor(previousOperandandTextElement, currentOperandTextElement){
        //Setting previousOperand and currentOperand
        this.previousOperandTextElement = previousOperandandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear( )
    }
    //Simple clear functions that clears out previous and current operand values
    clear ( ) {
        this.currentOperant = ' '
        this.previousOperand = ' '
        this.operation = undefined
    }
    //delete function to clear 1 character from the currentOperand
    delete ( ) {
        this.currentOperand = this.currentOperand.toString().slice(0,-1)
    }
    //Append current number to currentOperand
    appendNumber(numer) {
        if (number == '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation= operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute() {
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '%':
                computation = prev / current
                break
            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }
    
}