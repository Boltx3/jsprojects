let counterDisplay = document.querySelector('.counter-display');
let counterPlus = document.querySelector('.counter-plus');
let counterMinus = document.querySelector('.counter-minus');
let counterRest = document.querySelector('.counter-reset');

let count = 0;

counterPlus.addEventListener("click", () =>{
    count++;
    updateDisplay();
})

counterMinus.addEventListener("click", () => {
    count--;
    updateDisplay();
})

counterRest.addEventListener("click", () => {
    count = 0;
})

function updateDisplay() {
    counterDisplay.innerHTML = count;
}