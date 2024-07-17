// object: the base non-primitive data structure of javascript used to store key-value pairs. Object keys are usually strings, but they can also be symbols. Values on the other hand can be any type.
// Objects are usually declared with the object literal syntax.

// symbol: a primitive value in javascript used for unique values.
// a symbol is created using the Symbol(description) function, which returns a unique symbol. Even if two symbols have the same description, they will still be considered unique.
// While symbols created using the Symbol(description) function are completely unique, symbols can also be created using Symbol.for(key). This works the same way, except two calls to this function with the same key will return the same symbol, based on a global symbol registry.

const website = {
  name: "AlgoExpert",
  rating: 5,
  founders: ["Clement", "Antoine"],
  [Symbol.toPrimitive](hint) {
    if (hint === "number") {
      return 5;
    } else if (hint === "string") {
      return "hello";
    }
    return 2;
  },
};

// sayHello() {
//     console.log("hello");
// },
// get getRating() {
//     return (this.rating = 2);
// },
// set setRating(value) {
//     this.rating = value;
// },

// const key = "name";
console.log(website.name); // AlgoExpert
console.log(website["name-something"]); // undefined
// console.log(website.key); // undefined

website.name = "FrontendExpert";
console.log(website.name); // FrontendExpert

website.foo = "bar";
console.log(website);

delete website.foo;
console.log(website);

// const obj = {};
// console.log(obj === obj); // true

const name = "Abbas";
const obj = {
  name: name,
};

console.log(obj); // { name: 'Abbas' }

const obj1 = new Object();
obj1.name = "Abbas";
console.log(obj1);

function Website(name, rating, founders) {
  this.name = name;
  this.rating = rating;
  this.founders = founders;
}

const frontendExpert = new Website("FrontendExpert", 5, ["Conner"]);
console.log(frontendExpert);

const id = Symbol("id");
const id2 = Symbol("id2");
const id3 = Symbol.for("id3");
const id4 = Symbol.for("id3");
console.log(id3 === id4); // true

// console.log(id == id2); // false

const obj2 = {
  [id]: 1234,
  [id2]: 0,
  id: "hello",
  id: "world",
};

console.log(obj2); // { id: 'world', [Symbol(id)]: 1234, [Symbol(id2)]: 0 }

console.log("toString" in website); // true
console.log(website.hasOwnProperty("toString")); // false
console.log(website.name !== undefined); // true

// website.sayHello(); // hello
// console.log(website.getRating); // 2
// website.setRating = 6;
// console.log(website.getRating); // 2

const obj3 = {
  foo: "bar",
  hello: "world",
  [Symbol("id")]: 0,
  __proto__: website,
};

// console.log(obj3); // { foo: 'bar' }
// console.log(obj3.name); // FrontendExpert

/*
console.log(Object.keys(obj3)); // [ 'foo', 'hello' ]
console.log(Object.values(obj3)); // [ 'bar', 'world' ]
console.log(Object.entries(obj3)); // [ [ 'foo', 'bar' ], [ 'hello', 'world' ] ]
*/

// Object.entries(obj3).forEach(function ([key, value]) {
//   console.log(key, value);
// });

for (key in obj3) {
  console.log(key);
}
/*
foo
hello
name
rating
founders
*/

const myObj = {
  original: 123,
};

Object.assign(myObj, obj);
console.log(myObj); // { original: 123, name: 'Abbas' }

// console.log(Object.isFrozen(website)); // false
// Object.freeze(website);
Object.seal(website);
website.name = "FrontendExpert";
website.name = "bar";
console.log(Object.isSealed(website)); // true
console.log(website);
/*
{
  name: 'bar',
  rating: 5,
  founders: [ 'Clement', 'Antoine' ]
}
*/

// console.log(website.toString()); // [object Object]
website.toString = function () {
  return "Hello World";
};
// console.log(website.toString()); // [object Object]

// console.log(website.valueOf()); // { name: 'bar', rating: 5, founders: [ 'Clement', 'Antoine' ] }
website.valueOf = function () {
  return 1;
};
// console.log(website - 1); // 1
// console.log(String(website)); // hello
console.log(10 - website); // 5
console.log(10 + website); // 12
