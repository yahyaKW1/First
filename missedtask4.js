function removeSpecialCharactersAndSpaces() {
    let str = prompt("Enter a statement:",);
    if (str !== null) {
        let cleaned = str.replace(/[^a-zA-Z0-9]/g, "");
        console.log("Original Statement:", str);
        console.log("Without Special Characters and Spaces:", cleaned);
        alert("Result: " + cleaned);
    }
}

function removeDuplicates() {
    let input = prompt("Enter numbers separated by commas:", "1,2,2,3,5,5,5,6");
    if (input !== null) {
        let arr = input.split(",").map(item => item.trim());
        let uniqueArr = [...new Set(arr)];
        console.log("Original Array:", arr);
        console.log("Array without Duplicates:", uniqueArr);
        alert("Result: [" + uniqueArr.join(", ") + "]");
    }
}

function separateEvenAndOdd() {
    let input = prompt("Enter numbers separated by commas:", "10,9,3,2,4,20,100,5");
    if (input !== null) {
        let arr = input.split(",").map(item => Number(item.trim())).filter(num => !isNaN(num));
        let evens = arr.filter(num => num % 2 === 0);
        let odds = arr.filter(num => num % 2 !== 0);
        console.log("Original Array:", arr);
        console.log("Even Numbers:", evens);
        console.log("Odd Numbers:", odds);
        alert("Evens: [" + evens.join(", ") + "]\nOdds: [" + odds.join(", ") + "]");
    }
}

removeSpecialCharactersAndSpaces();
removeDuplicates();
separateEvenAndOdd();