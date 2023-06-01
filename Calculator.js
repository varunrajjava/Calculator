let userInput=document.getElementById("input")
let expression=""

function clicks(x){
    expression= expression+x
    userInput.value=expression
}

function equal(){
    expression=eval(expression)
    userInput.value=expression
}

function erase(){
    expression=""
    userInput.value=expression
}