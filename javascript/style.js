//const { disconnect } = require("node:process");


const switchButton = document.querySelector('.switch-btn')
const bodyThemeOne = document.querySelector('.body')
const inputThemeOne = document.querySelector('.result')
const numpadOne = document.querySelector('.numpad')
//const switchCircle = document.querySelector('#switch-circle');

switchButton.addEventListener('click', () =>{
  if (switchButton.classList.contains('active-two')){
    switchButton.classList.remove('active-two')
  }else if(!switchButton.classList.contains('active')){
    switchButton.classList.add('active')
    bodyThemeOne.classList.add('active')
    inputThemeOne.classList.add('active')
    numpadOne.classList.add('active')
  } else if(switchButton.classList.contains('active')){
    switchButton.classList.remove('active')
    bodyThemeOne.classList.remove('active')
    inputThemeOne.classList.remove('active')
    switchButton.classList.add('active-two')
    numpadOne.classList.remove('active')
  }
});





//----------------calculator class-------------------
//idea taken from https://github.com/WebDevSimplified/Vanilla-JavaScript-Calculator

class calculator{
  constructor(currentNum, operationElement){
    this.currentNum = currentNum
    this.previousNum = ''
    this.operation = operationElement
    this.resetNumbers()
  }
  resetNumbers(){
    this.currentDisplay = ''
    this.previousDisplay = ''
    this.operation = undefined
  }
  appendNumbers (number){
    if(number === '.' && this.currentNum.innerHTML.includes('.')) return
    this.currentDisplay = this.currentNum.innerHTML.toString() + number.toString()
  }

  delete() {
    this.currentDisplay = this.currentDisplay.slice(0, -1)
  }
  compute() {
    //this.operation = ''
    let total = 0
    let prev = +this.previousDisplay
    let curr = +this.currentDisplay
    switch(this.operation){
      case '+':
        total = prev + curr
        break;
      case '-':
        total = prev - curr
        break;
      case 'x':
        total = prev * curr
        break;
      case '/':
        total = prev / curr
        break;
      default:
        return
    }
    this.currentDisplay = total
  }

  setOpeartion (operation){
    if(this.operation === undefined){
      this.operation = operation    
      this.previousDisplay = this.currentDisplay
      //this.currentDisplay = ''
    } else {
      //this.operation = undefined
      this.operation = operation
      this.previousDisplay = this.currentDisplay
      //this.currentDisplay = ''
    }
    this.currentDisplay = ''
  }

  activeOpeation (){
    if(this.operation.classList.contains('active')) {
      this.operation.classList.remove('active')
    } else {
      this.operation.classList.add('active')
    }
  }

  updateDisplay (){
    this.currentNum.innerHTML = this.currentDisplay
  }
}


const numberButton = document.querySelectorAll('[data-number]')
const operationButton = document.querySelectorAll('[data-operation]')
const equalButton = document.querySelector('[data-equal]')
const deleteButton = document.querySelector('[data-delete]')
const resetButton = document.querySelector('[data-reset]')
const currentNum = document.querySelector('.result')
const previousNum = document.querySelector('.prev-result')

const myCalculator = new calculator(currentNum, operationButton)

numberButton.forEach(button =>{
  button.addEventListener('click', () =>{
    myCalculator.appendNumbers(button.innerHTML)
    myCalculator.updateDisplay()
  })
})


operationButton.forEach(button =>{
  button.addEventListener('click', () =>{
    myCalculator.setOpeartion(button.innerHTML)
    myCalculator.activeOpeation()
    myCalculator.updateDisplay()
  })
})

resetButton.addEventListener('click', button =>{
  myCalculator.resetNumbers()
  myCalculator.updateDisplay()
})

deleteButton.addEventListener('click', button =>{
  myCalculator.delete()
  myCalculator.updateDisplay()
})

equalButton.addEventListener('click', button =>{
  myCalculator.compute()

  myCalculator.updateDisplay()
})
//equalButton.addEventListener('click', )
  