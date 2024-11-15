//calculator function

const display = document.getElementById('display');

//to make the button number running
function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value ='';

    //to clear the previous calculation
    previousNumber = '';
    operator = '';
}


function calculate() {
    try {
        let result = eval(display.value);
        display.value = result;
    } catch (err) {
        display.value = 'Error';
    }
}