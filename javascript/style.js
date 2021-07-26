//const { disconnect } = require("node:process");


const switchButton = document.querySelector('.switch-btn');
const switchCircle = document.querySelector('#switch-circle');
switchButton.addEventListener('click', () =>{
  if(!switchButton.classList.toggle('active')){
    switchButton.classList.toggle('active-two');
  }
  //switchCircle.style.transform = "translate(1.35rem)";

});


//----------------calculator buttons-------------------
const numberButton = document.querySelectorAll('[data-number]')
const operationButton = document.querySelectorAll('[data-operation]')
const equalButton = document.querySelector('[data-equal]')
const deleteButton = document.querySelector('[delete-button]')
const resetButton = document.querySelector('[data-reset]')
const displayResult = document.querySelector('.result')

const displayNumbers = (number) =>{
  if(number === '.' && displayResult.innerHTML.includes('.')) return
  displayResult.innerHTML = displayResult.innerHTML.toString() + number.toString()

};

const resetNumbers = () =>{
  if (displayResult.innerHTML == '') return;
  displayResult.innerHTML = ''
}

const solveOpeartion = (operation, number) => {
  
  switch (operation){
    case '+':
      console.log(+number)
      break;
    case '-':
      console.log(+number)
      break;
    case 'x':
      console.log(+number)
      break;
    case '/':
      console.log(+number)
      break;
  }
}

/** 
const updateDisplay = () =>{
  displayResult.innerHTML = displayResult.innerHTML
};
*/

numberButton.forEach(button =>{
  button.addEventListener('click', () =>{
    displayNumbers(button.innerHTML);
  })
})

resetButton.addEventListener('click', resetNumbers);

operationButton.forEach(button =>{
  button.addEventListener('click', () =>{
    //let saved = displayResult.innerHTML
    displayNumbers(button.innerHTML)
    //solveOpeartion(button.innerHTML, saved)
  })
})

//equalButton.addEventListener('click', )
  