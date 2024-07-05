const arr = [1, 2, 3, 4];
/*
const doubled = arr.map(double);

function double(num) {
  return (num * 2);
}
*/
/*
const doubled = arr.map(function double(num) {
  return (num * 2);
});
*/
/*
const doubled = arr.map(function (num) {
  return (num * 2);
});
*/

// arrow functions : a more concise function syntax, particularly useful for replacing short anonymous functions.
/*
const doubled = arr.map((num) => {
  return (num * 2);
});
*/

const double = (num) => num * 2;
//const doubled = arr.map((num) => num * 2);
const doubled = arr.map(double);

console.log(doubled); // [ 2, 4, 6, 8 ]

// const first = arr[0];
// const second = arr[1];

// Destructuring assignment : a javascript syntax for saving values from an array or object in variables
// Rest Operator: a javascript operator using ... for condensing multiple elements into a single array. This uses the same syntax as the spread operator, but functionally is essentially the opposite
/*
const [first, second, ...rest] = arr;
// console.log(first, second);
console.log(rest); // [ 3, 4 ]
*/
console.log(arr); // [ 1, 2, 3, 4 ]

const person = {
  name: "Conner",
  website: "FrontendExpert",
};

const { name: firstName, company = "AlgoExpert", ...rest } = person;
console.log(firstName); // Conner
console.log(company); // AlgoExpert
console.log(rest); // { website: 'FrontendExpert' }

function printName({ name }) {
  console.log(name); // Conner
}

printName(person);

function add(x, y) {
  console.log(x + y); // 3
}

// spread operator: a javascript operator using (...) for expanding iterables into individual elements.
// The spread syntax can also be used to combine two arrays
add(...arr);

const arr2 = [5, 6, 7];

const combined = [0, ...arr, 4.5, ...arr2];
console.log(combined); // [0, 1, 2, 3, 4, 4.5, 5, 6, 7]

function logParams(x, ...rest) {
  console.log(x); // 1
  console.log(rest); // [2, 3, 4]
}

logParams(1, 2, 3, 4);

// Template Literal: Strings created using backticks `` that allow for inlining expressions rather than needing concatenation. Inlined expressions use the syntax ${expression}
const name = null;

// const defaultName = name != null ? name : 'Default Name';
// Null Coalescing also referred to as nullish coalescing, an operator using ?? for providing a default value if a value is null.
// If the value on the left side of the operator is not null or undefined, that value is used.
// Otherwise, the value on the right side of the operator is used.

const defaultName = name ?? "Default Name";

console.log("Hello " + name); // Hello Abbas
console.log(`Hello ${name} ${1 + 3}`); // Hello Abbas 4
console.log("Hello " + defaultName); //  Hello Default Name

const person1 = {
  company: {
    website: "AlgoExpert.io",
  },
};

// Optional Chaining: a javascript operator using ?. for reading object properties without throwing an error if the object is null.
console.log(person1?.company?.website ?? "Foo"); // AlgoExpert.io

// Short Circuit Evaluation : A method of utilizing the evaluation order of JavaScript to conditionally run code.
const shouldRunCode = true;

function logWorld() {
  console.log("Hello World"); // Hello World
}

if (shouldRunCode) {
  logWorld();
}

shouldRunCode && logWorld(); // Hello World
