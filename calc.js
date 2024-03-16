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

//initialize values for operate function
let numOne=''
let numTwo = ''
let operator = ''


//make use of inputs to run operations,  inlcudes error messages
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

//dom which allows functionality to be added to buttons
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

        //prevents multiple operator from begging entered directly after eachother
        if(lastChar ==='+' || lastChar ==='-' || lastChar ==='/' || lastChar ==='*'){
            return
        }
        
        
        //convert input from string to float.
        numOne = parseFloat(display.textContent)  

        //clear out display 
        display.innerHTML = ''
        operator = button.value
        
    })
})

decimal.addEventListener('click', ()=>{
    // if display already contains decimal prevent extra decimals form being input
    if (display.textContent.includes('.')) {
    return    
    }

    else{

    display.textContent+= decimal.value
    }
})

clear.addEventListener('click', () =>{
    //reinitializes these variables.
    display.textContent= ''
     numOne= ''
     numTwo = ''
     operator = ''
})

equal.addEventListener('click', () => {
    // Get the display text
 
    
    const displayText = display.textContent;
    console.log('Display Text:', displayText);
    
    // split the display text by operator characters
    const parts = displayText.split(/[+\-*/]/);
    console.log('Parts:', parts);
    
    // extract the string after the last operator
    const numTwoString = parts[parts.length - 1];
    console.log('numTwoString:', numTwoString);
    
    // Convert the string to a number 
     numTwo = parseFloat(numTwoString);
    console.log('numTwo:', numTwo);
    
    // if variables dont hold any value it prevents the equal button from being used.
    if ((operator==='') || (numOne==='') || (numTwo==='')){
        return
    }
    // if any number is divided by zero it creates an error message
    else if ((operator==='/')&& (numTwo===0)){
        display.textContent = 'Error this calc cant divide by zero...ya fool you want to break me xD'
    }
    //runs operate function as intended.
    else{
    answer = operate(operator, numOne, numTwo);
    console.log('Answer:', answer);
    numOne = answer
    numTwo=''
    
    
    //display answer in display
    display.textContent = answer;
    }
   
});