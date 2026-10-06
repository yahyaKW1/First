// 1
const numbers = [10, 20, 30];
const details = { name: "Bob", age: 30 };

const newNumbers = [0, ...numbers, 100];
const newDetails = { ...details, country: "Egypt" };

console.log(newNumbers); 
console.log(newDetails); 


// 2
function getUserData({ firstName, favoriteColor = "green" }) {
  return `Your name is ${firstName} and you  like  ${favoriteColor}`;
}

console.log(getUserData({ firstName: "Alejandro", favoriteColor: "purple" })); // ?
console.log(getUserData({ firstName: "Melissa" })); // ?
console.log(getUserData({}));
// output 1: Your name is Alejandro and you  like  purple
// output 2: Your name is Melissa and you  like  green
// output 3: Your name is undefined and you  like  green


// 3
function calculateAverage(...numbers) {
  if (numbers.length === 0) return 0;
  return numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length;
}

console.log(calculateAverage(10, 20, 30)); 


// 4
function findMax(...numbers) {
  return Math.max(...numbers); // Math.max method
}
console.log(findMax(10, 25, 3, 60)); 


// 5
const numbersSquare = [1, 2, 3, 4, 5, 10];
const squaredNumbers = numbersSquare.map(num => num ** 2);

console.log(squaredNumbers); 


//  6
const person = { name: "Alice", age: 25 };
const updatedPerson = { ...person, age: 26 };

console.log(updatedPerson); // Output: { name: "Alice", age: 26 }


// 7
const words = ["apple", "banana", "cherry", "date", "fig"];
const hasLongWord = words.some(word => word.length > 5);  //some method

console.log(hasLongWord); 


// 8
const students = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 95 },
  { name: 'Charlie', score: 45 },
  { name: 'David', score: 60 },
  { name: 'Eve', score: 100 }
];

const passingStudentNames = students
  .filter(student => student.score >= 60)
  .map(student => student.name);

const allAbove50 = students.every(student => student.score > 50);
const hasPerfectScore = students.some(student => student.score === 100); //some method

console.log(passingStudentNames);
console.log(allAbove50);
console.log(hasPerfectScore);


//  9
var str = 'hello';
var charArray = [...str];  // spread operator
console.log(charArray);





