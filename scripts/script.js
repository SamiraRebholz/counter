const number = document.getElementById('number');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');
const random = document.getElementById('random');

increase.addEventListener('click', () => {
    number.innerText = parseInt(number.innerText) + 1;
});
decrease.addEventListener('click', () => {
    number.innerText = parseInt(number.innerText) - 1;
});
reset.addEventListener('click', () => {
    number.innerText = 0;
});
random.addEventListener('click', () => {
    number.innerText = Math.floor(Math.random() * 100);
});