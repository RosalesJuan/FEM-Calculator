//const { disconnect } = require("node:process");


const switchButton = document.querySelector('.switch-btn');
const switchCircle = document.querySelector('#switch-circle');
switchButton.addEventListener('click', () =>{
  if(!switchButton.classList.toggle('active')){
    switchButton.classList.toggle('active-two');
  }
  //switchCircle.style.transform = "translate(1.35rem)";

});


//----------------calculator class-------------------
//idea taken from https://github.com/WebDevSimplified/Vanilla-JavaScript-Calculator

class calculator{
  constructor(currentNum){
    this.currentNum = currentNum
    this.previousNum = ''
    this.resetNumbers()
  }
  resetNumbers(){
    this.currentDisplay = ''
    this.previousDisplay = ''
  }
  appendNumbers (number){
    if(number === '.' && this.currentNum.innerHTML.includes('.')) return
    this.currentDisplay = this.currentNum.innerHTML.toString() + number.toString()
  }
  compute() {
    let total = 0
    let prev = +this.previousDisplay
    let curr = +this.currentDisplay
    console.log(prev)
    console.log(curr)
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
    this.operation = operation
    this.previousDisplay = this.currentDisplay
    this.currentDisplay = ''
  }
  
  updateDisplay (){
    this.currentNum.innerHTML = this.currentDisplay
  }
}


const numberButton = document.querySelectorAll('[data-number]')
const operationButton = document.querySelectorAll('[data-operation]')
const equalButton = document.querySelector('[data-equal]')
const deleteButton = document.querySelector('[delete-button]')
const resetButton = document.querySelector('[data-reset]')
const currentNum = document.querySelector('.result')
const previousNum = document.querySelector('.prev-result')

const myCalculator = new calculator(currentNum)

numberButton.forEach(button =>{
  button.addEventListener('click', () =>{
    myCalculator.appendNumbers(button.innerHTML)
    myCalculator.updateDisplay()
  })
})


operationButton.forEach(button =>{
  button.addEventListener('click', () =>{
    myCalculator.setOpeartion(button.innerHTML)
    myCalculator.updateDisplay();
  })
})

resetButton.addEventListener('click', button =>{
  myCalculator.resetNumbers()
  myCalculator.updateDisplay()
})

equalButton.addEventListener('click', button =>{
  myCalculator.compute()
  myCalculator.updateDisplay()
})
//equalButton.addEventListener('click', )
  