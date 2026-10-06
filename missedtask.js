const numberInput = document.getElementById('numberInput');

function updateGame(num) {
    const val = parseInt(num, 10);

    for (let i = 1; i <= 3; i++) {
        const item = document.getElementById(`circle${i}`).parentElement;
        if (i === val) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    }
}

numberInput.addEventListener('input', function () {
    updateGame(this.value);
});

updateGame(numberInput.value);