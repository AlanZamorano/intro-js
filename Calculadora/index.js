const displayValorAnterior = document.getElementById('valorAnterior');
const displayTotal = document.getElementById('total');
const btnNumber = document.querySelectorAll('.number');
const btnOperator = document.querySelectorAll('.operator');

const display = new Display(displayValorAnterior, displayTotal);

btnNumber.forEach(btn => {
    btn.addEventListener('click', () =>
        display.addNum(btn.innerHTML));
});

btnOperator.forEach(btn => {
    btn.addEventListener('click', () =>display.computar(btn.value))
});