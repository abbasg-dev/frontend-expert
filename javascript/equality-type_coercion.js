console.log(5 == 5); // true
console.log(5 === 5); // true

// "lose" equality, values
console.log(5 == "5"); // true

// "strict" equality, type and values
console.log(5 === "5"); // false

console.log(Number(false)); // 0
console.log(Number(true)); // 1
console.log(true == 1); // true
console.log(false == 1); // false
console.log(false == 0); // true

console.log(Boolean(10)); // true
console.log(Boolean(0)); // false

console.log(String(0)); // 0
console.log(typeof String(0)); // string
console.log(typeof 0); // number

console.log(Number("abc")); // NaN
console.log(NaN == NaN); // false
console.log("abc" == "abc"); // true
console.log("abc" == "ab"); // false
console.log("abc" == 123); // false
console.log("abc" == NaN); // false

console.log(null == null); // true
console.log(null === undefined); // false
console.log(null == 0); // false
console.log(null == ""); // false
console.log(null == []); // false

const obj = {};
const arr = [];
console.log({} === {}); // false
console.log({} == {}); // false
console.log(obj === obj); // true
console.log(arr === []); // false
