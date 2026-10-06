const numberInput = document.getElementById('numberInput');
const outputText = document.getElementById('outputText');

function checkFizzBuzz(num) {
    if (num === '' || isNaN(num)) {
        return '""';
    }

    const val = parseInt(num, 10);

    if (val % 3 === 0 && val % 5 === 0) {
        return '"fizz buzz"';
    } else if (val % 3 === 0) {
        return '"fizz"';
    } else if (val % 5 === 0) {
        return '"buzz"';
    } else {
        return '"none"';
    }
}

function updateOutput() {
    outputText.textContent = checkFizzBuzz(numberInput.value);
}

numberInput.addEventListener('input', updateOutput);

updateOutput();