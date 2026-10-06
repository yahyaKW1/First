
let num = Number(prompt("Enter a number:"));

if (num > 0) {
  console.log(num + " is positive");
} else if (num < 0) {
  console.log(num + " is negative");
} else {
  console.log("The number is zero");
}


let num2 = Number(prompt("Enter a number:"));

if (num2 % 2 === 0) {
  console.log(num2 + " is even");
} else {
  console.log(num2 + " is odd");
}


let age = Number(prompt("Enter your age:"));

let price;
if (age < 12) {
  price = 5;
} else if (age < 18) {
  price = 10;
} else if (age < 60) {
  price = 20;
} else {
  price = 15;
}
console.log("Ticket price: $" + price);


for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}



var i = 11;
x = i++ + ++i
console.log(x);


var a = 11
var b = 22;
var c = a + b + a++ + b++ + ++a + ++b;
console.log(c);