// Array: a data structure for storing lists of information.
// javascript arrays are mutable and can contain data of different types. While these are just standard objects, they have a special syntax for easily creating and updating them.

const arr = [1, 2, 3];
/*
arr.length = 1;
// arr.length = 3;
// const arr = new Array(5);
// arr.length = 10;
// arr.fill(0);
console.log(arr);
*/
//arr[1] = 10;
console.log(arr); // [1, 2, 3];
console.log(arr.includes(3)); // true
console.log(arr.indexOf(3)); // 2
console.log(arr.lastIndexOf(2)); // 1

arr[arr.length] = 4; // length = 3 arr[3] = 4; arr = [1, 2, 3, 4];
arr.push(4, 5, 6); // [1, 2, 3, 4, 4, 5, 6];
console.log(arr.pop()); // 6
arr.unshift(4, 5, 6); // [4, 5, 6, 1, 2, 3, 4, 4, 5];
arr.shift(); // [5, 6, 1, 2, 3, 4, 4, 5];
console.log(arr); // [5, 6, 1, 2, 3, 4, 4, 5];

console.log(typeof arr); // object
console.log(Array.isArray(arr)); // true
console.log(arr instanceof Array); // true

arr.splice(1, 3); // [5, 3, 4, 4, 5];
arr.splice(1, 0, "Hello", "World"); // before 1 after 0
console.log(arr); // [ 5, 'Hello', 'World', 3, 4, 4, 5 ];

console.log(arr.slice(0, 2)); // [ 5, 'Hello' ]
console.log(arr.concat("hello", "world")); // [5, 'Hello', 'World', 3, 4, 4, 5, 'hello', 'world']
console.log(arr.reverse()); // [5, 4, 4, 3, 'World', 'Hello', 5];
console.log(arr.join(" | ")); // 5 | 4 | 4 | 3 | World | Hello | 5
console.log(arr.join(", ")); // 5, 4, 4, 3, World, Hello, 5

// loop over array, traditional loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

/*
5
4
4
3
World
Hello
5
*/

let i = 0;
for (const value of arr) {
  console.log(value);
  i++;
}
/*
5
4
4
3
World
Hello
5
*/

// functions on the array object for iteration

arr.forEach(
  function (value, index) {
    console.log(value, index, this);
  },
  { num: 10 }
);

/*
5 0 { num: 10 }
4 1 { num: 10 }
4 2 { num: 10 }
3 3 { num: 10 }
World 4 { num: 10 }
Hello 5 { num: 10 }
5 6 { num: 10 }
*/

const mappedArray = arr.map(
  function (value, index, array) {
    //console.log(array);
    return value + index + this.num;
  },
  { num: 10 }
);
console.log(arr); // [ 5, 4, 4, 3, 'World', 'Hello', 5 ]
console.log(mappedArray); // [ 15, 15, 16, 16, 'World410', 'Hello510', 21 ]

const filteredArray = arr.filter(
  function (value, index, array) {
    return value > this.num;
  },
  { num: 1 }
);

console.log(arr); // [ 5, 4, 4, 3, 'World', 'Hello', 5 ]
console.log(filteredArray); // [ 5, 4, 4, 3, 5 ]

const foundValue = arr.find(
  function (value, index, array) {
    return value > this.num;
  },
  { num: 1 }
);

console.log(arr); // [ 5, 4, 4, 3, 'World', 'Hello', 5 ]
console.log(foundValue); // 5

const foundIndex = arr.findIndex(
  function (value, index, array) {
    return value > this.num;
  },
  { num: 1 }
);

console.log(arr); // [ 5, 4, 4, 3, 'World', 'Hello', 5 ]
console.log(foundIndex); // 0

const allPass = arr.every(
  function (value, index, array) {
    return value > this.num;
  },
  { num: 0 }
);

console.log(arr); // [ 5, 4, 4, 3, 'World', 'Hello', 5 ]
console.log(allPass); // false

const somethingPass = arr.some(
  function (value) {
    return value > this.num;
  },
  { num: 6 }
);

console.log(arr); // [ 5, 4, 4, 3, 'World', 'Hello', 5 ]
console.log(somethingPass); // false

const arr1 = [1, 2, 3];
// reduce, reduceRight
const sum = arr1.reduceRight(function (accumulator, currValue) {
  return accumulator + currValue;
}, 0);

const difference = arr1.reduce(function (accumulator, currValue) {
  return accumulator - currValue;
}, 0);

console.log(arr1); // [1, 2, 3];
console.log(sum); // 6
console.log(difference); // -6

const arr2 = [5, 7, 3, 0];
arr2.sort(compareNumbers);

function compareNumbers(firstNumber, secondNumber) {
  if (firstNumber === 3) {
    return -1;
  }
  if (secondNumber === 3) {
    return 1;
  }
  return firstNumber - secondNumber;
}

console.log(arr2); // [ 3, 0, 5, 7 ]
