let buffer = ""
const calcBtn = document.querySelector(".btn-compute")
const buttons = document.querySelectorAll(".btn");
const display = document.querySelector("#screen")

Array.from(buttons).forEach(element => element.addEventListener('click', addToBuffer) )

calcBtn.addEventListener("click", calculate)

function addToBuffer(click) {
    buffer += click.target.innerText;
    updateDisplay();
}


function updateDisplay() {
    display.innerText = buffer;
}

function calculate() {
    let left = buffer[0];
    let op = buffer[1];
    let right = buffer[2];
    let result;

    switch(op) {
        case "+":
            result = Number(left) + Number(right);
            break;
        default:
            result = -999;
            break;  
    }
    buffer = result;

    updateDisplay();
}

function tokenize(expr) {

}