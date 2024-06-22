"use strict";

x = 5;

const num = 10;

//console.log(num);
//num = 20;
//console.log(num);

//let num = 10.5;
//let strNum = "10px";
//console.log(Number(strNum));
//console.log(parseInt(strNum));
//console.log(typeof 100);

let str = "a,b,c,d";

//console.log(`Result: ${10 + 20}`);
//console.log(str[1]);
//console.log(str.charAt(1));
//console.log(str.includes("b"));
//console.log(str.startsWith("b"));
//console.log(str.endsWith("b"));
//console.log(str.toUpperCase().toLowerCase());
//console.log(str.substr(1));
//console.log(str.slice(1, 5));
//console.log(str.padStart(5, "-"));
//console.log(str.split("e"));

const person = {
  name: "Abbas",
  course: "FrontendExpert",
};

//console.log(typeof JSON.parse(JSON.stringify(person)));
person.name = "Ahmad";
//console.log(person.name);

const map = new Map();
map.set(456, "hello");
map.set(123, "world");
//console.log(map.get(456));
//console.log(map.size);
//console.log(map.get(0));

const set = new Set();
set.add("hello");
set.add("hello");
set.delete("hello");
set.add("world");
//console.log(set.has("world"));
//console.log(set.size);

const arr = [1, 2, 3];
arr.push(4);
//console.log(typeof arr);

function addTwo(num = 6) {
  return num + 2;
}

function callFunc(func, param) {
  console.log(func(param));
}

//callFunc(addTwo, 10);
//console.log(addTwo instanceof Object);

for (let i = 0; i < 4; i++) {
  if (i === 1) {
    continue;
  }
  //console.log(i);
}

let z = 0;
do {
  //console.log(z);
  z++;
} while (z < 0);

for (const value of "abc") {
  //console.log(value);
}

const obj = {
  name: "Abbas",
  course: "FrontendExpert",
};

for (const key in obj) {
  //console.log(key, obj[key]);
}

[1, 2, 3].forEach(function (value) {
  //console.log(value);
});

// const condition = false;

// if (condition) {
//   console.log("It was true");
// } else if (condition === false) {
//   console.log("It was false");
// } else {
//   console.log("Default");
// }

const myNum = 5;

// switch (myNum) {
//   case 1:
//     console.log("It was 1");
//     break;
//   case 2:
//   case 3:
//     console.log("It was 3");
//     break;
//   default:
//     console.log("Default");
// }

//console.log(myNum > 5 ? "Greater than 5" : "Less than 5");

// try {
//   throw new Error("Oh no");
// } catch (error) {
//   console.log(error);
// }
// throw new Error("Oh no");

// console.log("Here");

// Single line comment
/* Multi line
comment
new lines
console.log('here')
*/

console.log("value");
console.error("error message");
console.debug("Debug message");
console.table([
  [1, 2],
  ["hello", "world"],
]);
console.count("key");
console.count();
console.countReset("key");
console.count("key");
console.time("key");
for (let j = 0; j < 10000; j++) {}
console.timeEnd("key");

console.time();
for (let j = 0; j < 10000; j++) {}
console.timeEnd();

function foo() {
  console.trace();
}
foo();
