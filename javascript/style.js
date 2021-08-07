//const { disconnect } = require("node:process");

//const { link } = require("fs/promises");


const switchButton = document.querySelector('.switch-btn')
const bodyThemeOne = document.querySelector('.body')
const inputThemeOne = document.querySelector('.result')
const numpadOne = document.querySelector('.numpad')
//const switchCircle = document.querySelector('#switch-circle');

switchButton.addEventListener('click', () =>{
  if (switchButton.classList.contains('active-two')){
    switchButton.classList.remove('active-two')
    switchButton.classList.remove('active-two')
    bodyThemeOne.classList.remove('active-two')
    inputThemeOne.classList.remove('active-two')
    numpadOne.classList.remove('active-two')
  }else if(!switchButton.classList.contains('active')){
    switchButton.classList.add('active')
    bodyThemeOne.classList.add('active')
    inputThemeOne.classList.add('active')
    numpadOne.classList.add('active')
  } else if(switchButton.classList.contains('active')){
    switchButton.classList.remove('active')
    bodyThemeOne.classList.remove('active')
    inputThemeOne.classList.remove('active')
    numpadOne.classList.remove('active')
    switchButton.classList.add('active-two')
    switchButton.classList.add('active-two')
    bodyThemeOne.classList.add('active-two')
    inputThemeOne.classList.add('active-two')
    numpadOne.classList.add('active-two')
  }
});





//----------------calculator class-------------------
//taken from https://github.com/WebDevSimplified/Vanilla-JavaScript-Calculator

class calculator{
  constructor(currentNum){
    this.currentNum = currentNum
    this.previousNum = ''
    this.operation = undefined
    this.resetNumbers()
  }
  resetNumbers(){
    this.currentDisplay = ''
    this.previousDisplay = ''
    this.prevOperation = undefined
    this.buttonPressed = undefined
    this.prevButtonPressed = undefined
  }
  appendNumbers (number){
    if(number === '.' && this.currentNum.innerHTML.includes('.')) return
    this.currentDisplay = this.currentDisplay.toString() + number.toString()
  }

  delete() {
    this.currentDisplay = this.currentDisplay.slice(0, -1)
  }
  compute() {
    let total = ''
    let prev = +this.previousDisplay
    let curr = +this.currentDisplay
    //console.log(prev) 
    //console.log(curr)
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
    this.operation = undefined
    this.previousDisplay  = ''
    //console.log(total)
    //console.log(total)
  }

  activeButton(button){
    if(this.buttonPressed !== undefined){
      //this.prevButtonPressed = button
      this.buttonPressed.classList.add('pressed')
      this.prevButtonPressed = button
      this.buttonPressed = undefined
    } else {
      this.prevButtonPressed.classList.remove('pressed')
      this.buttonPressed = button
      this.prevButtonPressed = undefined
    }
  }

  setOpeartion (operation){
    if(this.currentDisplay === '') return
    if(this.previousDisplay !== ''){
      this.compute()
    }
    //this.buttonPressed.classList.remove('pressed')
      this.prevOperation = operation.innerHTML
      this.operation = operation.innerHTML //text whithin element
      this.previousDisplay = this.currentDisplay
      this.currentDisplay = ''
      console.log(this.operation)
    //this.operation = operation.innerHTML
  }

  getDisplayNumber(number){
    const stringNumber = number.toString()
    const integerDigits = +(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let numberDisplay = ''
    //console.log(decimalDigits)
    if(isNaN(integerDigits)){
      numberDisplay = ''
    } else {
      numberDisplay = integerDigits.toLocaleString('en-US')
      //numberDisplay = new Intl.NumberFormat('en-US').format(integerDigits)
    }
    if (decimalDigits != undefined){
      return `${numberDisplay}.${decimalDigits}`
    } else {
      return numberDisplay
    }
  }

  updateDisplay (){
    this.currentNum.innerHTML = this.getDisplayNumber(this.currentDisplay)
    
    /** 
    if(this.operation != null){
      this.previousNum = this.currentNum
    } else {
      this.previousNum = ''
    }
    */
  }
}

//function for pressed buttons

const element = document.querySelector('#pad')

/** 
function buttonPressed(e) {
  if (document.querySelector('[data-operation] .pressed') !== null) {
    document.querySelector('.numpad[data-operation] .pressed').classList.remove('pressed');
  }
  e.target.className = ".pressed";
}
*/
 
/** 
const activeButton = (e) =>{
  const elems = document.querySelector('.pressed')
  if (elems != null) {
    elems.classList.remove('.pressed')
  }
  e.target.className = 'pressed'
}
element.addEventListener('click', activeButton)
*/
/**
  button.addEventListener('click', function(button) {
    if (!button.target.classList.contains('[data-operation]')) return
    button.target.classList.add('pressed')
    const links = document.querySelectorAll('[data-operation]')
    for(let i = 0; i < links.length; i++){
      if (links[i] === button.target) continue
      links[i].classList.remove('pressed')
    }
  }, false)
 */

  //numpad.addEventListener('click', buttonPressed)

const numberButton = document.querySelectorAll('[data-number]')
const operationButton = document.querySelectorAll('[data-operation]')
const equalButton = document.querySelector('[data-equal]')
const deleteButton = document.querySelector('[data-delete]')
const resetButton = document.querySelector('[data-reset]')
const currentNum = document.querySelector('.result')
const previousNum = document.querySelector('.prev-result')
//const numpad = document.querySelector('[data-operation]')

const myCalculator = new calculator(currentNum)

numberButton.forEach(button =>{
  button.addEventListener('click', () =>{
    myCalculator.appendNumbers(button.innerHTML)
    myCalculator.updateDisplay()
  })
})


operationButton.forEach(button =>{
  button.addEventListener('click', () =>{
    myCalculator.setOpeartion(button)
    //myCalculator.activeButton(button)
    myCalculator.updateDisplay()

    // if (button.classList.contains('pressed')){
    //   button.classList.add('pressed')
    // }
    // else {button.classList.add('pressed')}

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
  //myCalculator.activeButton()
  myCalculator.updateDisplay()
  
})
//equalButton.addEventListener('click', )
  