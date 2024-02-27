let display = document.getElementById("display")

function appendToDisplay(val){
    display.value += val;
}

function clearDisplay(){
    display.value='';
}

function calculate(){
    let expression = display.value;
    let result = eval(expression);
    display.value=result;
}