function* numberRange(start, end, step = 1) {
  for (let i = start; i <= end; i += step) {
    yield i;
  }
}
console.log([...numberRange(1, 5)]);




function findCommonElements(arr1, arr2) {
  const set2 = new Set(arr2);
  return [...new Set(arr1.filter(item => set2.has(item)))];
}
console.log(findCommonElements([1, 2, 2, 3, 4], [2, 3, 3, 5]));




function* fibonacci(max) {
  let a = 0, b = 1;
  while (a <= max) {
    yield a;
    [a, b] = [b, a + b];
  }
}
console.log([...fibonacci(20)]);




function makeIterable(obj) {
  obj[Symbol.iterator] = function* () {
    for (const key of Object.keys(this)) {
      yield [key, this[key]];
    }
  };
  return obj;
}
const myObj = makeIterable({ a: 1, b: 2, c: 3 });
console.log([...myObj]);




function* generateOdds(max) {
  for (let i = 1; i <= max; i += 2) {
    yield i;
  }
}

function* generateEvens(max) {
  for (let i = 0; i <= max; i += 2) {
    yield i;
  }
}

function* delegateNumbers(max) {
  yield* generateOdds(max);
  yield* generateEvens(max);
}

function* generateLetters() {
  yield* ['A', 'B', 'C', 'D'];
}

function* generateDigits() {
  yield* [1, 2, 3, 4];
}

function* delegateCombined() {
  yield* generateLetters();
  yield* generateDigits();
}


console.log([...delegateNumbers(10)]);

console.log([...delegateCombined()]);