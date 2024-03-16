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
    if (operator === '+'){
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
        display.textContent += button.value
        operator = button.value
        
    })
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
    
    answer = operate(operator, numOne, numTwo);
    console.log('Answer:', answer);
    
    
    
    // Display the result
    display.textContent = answer;
});