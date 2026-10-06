const stringInput = document.getElementById('stringInput');
const letterInput = document.getElementById('letterInput');
const outputDisplay = document.getElementById('outputDisplay');

function findCharacterLocations(sentence, letter) {
    if (!letter) {
        return '[]';
    }
    const locations = [];
    const searchLetter = letter.toLowerCase();
    const str = sentence.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        if (str[i] === searchLetter) {
            locations.push(i);
        }
    }
    return `[${locations.join(', ')}]`;
}
function updateOutput() {
    outputDisplay.textContent = findCharacterLocations(
        stringInput.value,
        letterInput.value
    );
}
stringInput.addEventListener('input', updateOutput);
letterInput.addEventListener('input', updateOutput);

updateOutput();