function add (a,b){
    return a+b
}

function minus (a,b){
    return a-b
}

function multiply (a,b){
    return a*b
}

function divide (a,b){
    return a/b
}

let numOne=''
let numTwo = ''
let operator = ''

function operate (operator,numOne,numTwo){
    if((operator === '/' )&&(numTwo ===0)){
        prompt='you broke it stupid....hit clear and try again'
    }
    else if (operator === '+'){
         return add (numOne,numTwo)
    }    
    else  if (operator === '-'){
       return minus (numOne,numTwo)
   }    

   else  if (operator === '*'){
   return multiply (numOne,numTwo)
}

else  if (operator === '/'){
    return divide (numOne,numTwo)
}

} 

const equal = document.getElementById('=')
const clear = document.querySelector('.clear')
const operatorButton = document.querySelectorAll('.operator')
const numbersButton = document.querySelectorAll('.number')
const display = document.querySelector('.display')
const decimal = document.getElementById('.');


numbersButton.forEach(button => {
    button.addEventListener('click', ()=>{

        display.textContent += button.value})

})

operatorButton.forEach(button =>{
    button.addEventListener('click',function event(){
        const lastChar = display.textContent.slice(-1)
        if(lastChar ==='+' || lastChar ==='-' || lastChar ==='/' || lastChar ==='*'){
            return
        }
        
        
        
        numOne = parseFloat(display.textContent)
        display.innerHTML = ''
        operator = button.value
        
    })
})

decimal.addEventListener('click', ()=>{
    if (display.textContent.includes('.')) {
    return    
    }
    else{
    display.textContent+= decimal.value
    }
})

clear.addEventListener('click', () =>{
    display.textContent= ''
     numOne= ''
     numTwo = ''
     operator = ''
})

equal.addEventListener('click', () => {
    // Get the display text
 
    
    const displayText = display.textContent;
    console.log('Display Text:', displayText);
    
    // Split the display text by operator characters
    const parts = displayText.split(/[+\-*/]/);
    console.log('Parts:', parts);
    
    // Extract the string after the last operator
    const numTwoString = parts[parts.length - 1];
    console.log('numTwoString:', numTwoString);
    
    // Convert the string to a number (if needed)
     numTwo = parseFloat(numTwoString);
    console.log('numTwo:', numTwo);
    
    // Perform the calculation using the operate function
    if ((operator==='') || (numOne==='') || (numTwo==='')){
        return
    }
    else if ((operator==='/')&& (numTwo===0)){
        display.textContent = 'Error this calc cant divide by zero...ya fool you want to break me xD'
    }
    else{
    answer = operate(operator, numOne, numTwo);
    console.log('Answer:', answer);
    numOne = answer
    numTwo=''
    
    
    
    display.textContent = answer;
    }
    // Display the result
});