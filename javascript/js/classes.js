// const person = {
//   isHuman: true,
// };

// const child = Object.create(person);
// child.__proto__ = person;
// child.maxAge = 18;

//console.log(person);
//console.log(child.isHuman);

// const child = Object.assign(Object.create(person), {
//   maxAge: 18,
// });

// const child = {
//   maxAge: 18,
//   __proto__: person,
// };

// Object.setPrototypeOf(child, person);

/*
const child = Object.create(person, {
  maxAge: {
    value: 18,
    writable: true,
    configurable: true,
    enumerable: true,
  },
});
*/

/*
const child = Object.create(person);
child.maxAge = 18;

const john = Object.create(child);
john.name = "John";
*/
// console.log(john);
// console.log(john.__proto__.__proto__);
// console.log(john.isHuman);
// console.log(john.maxAge);
// console.log(john.name);
// console.log(Object.getPrototypeOf(john));

// console.log(john.maxAge);
// child.maxAge = 19;

// console.log(person.maxAge);
// console.log(child.isHuman);

// const funcProto = Object.getPrototypeOf(() => {});
// console.log(Object.getOwnPropertyNames(funcProto));

// const arrayProto = Object.getPrototypeOf([]);
// console.log(Object.getOwnPropertyNames(arrayProto));
/*
function Person(name) {
  this.name = name;
}

Person.prototype = {
  constructor: Person,
  isHuman: true,
};

const abbas = new Person("Abbas");
const ahmad = new abbas.constructor("Ahmad");
*/
// const ahmad = new Person("Ahmad");
// console.log(abbas);
// console.log(abbas.isHuman);
// console.log(abbas.__proto__);
// console.log(Object.getPrototypeOf(abbas));
// console.log(abbas);
// console.log(Object.getPrototypeOf(abbas) === Object.getPrototypeOf(ahmad));

// Person.prototype.test = "test";
// ahmad.__proto__.test = "test";

// console.log(ahmad.test);
// console.log(ahmad);

// Person.prototype.speak = function () {
//   console.log("Hello this is " + this.name);
//   console.log(this.isHuman);
// };

// abbas.speak();
// ahmad.speak();

/*
Object.setPrototypeOf(abbas, Array.prototype);
console.log(abbas instanceof Person); // false
console.log(abbas instanceof Object); // true
console.log(abbas instanceof Array); // true
console.log(ahmad instanceof Person); // true
*/

/*
if (Array.prototype.push === undefined) {
  Array.prototype.push = function (value) {
    this[this.length] = value;
  };
}

const arr = [1, 2, 3];
arr.push(4);
console.log(arr);
*/

class Person {
  // static isHuman = true;
  constructor(name) {
    this.name = name;
  }
  // static greet() {
  //   console.log("hello");
  // }
  speak() {
    console.log("Hello this is " + this.name);
  }
}

/*
const abbas = new Person("Abbas");
const ahmad = new Person("Ahmad");
abbas.speak(); // Hello this is Abbas
// abbas.isHuman = false;
console.log(Person.isHuman); // true

console.log(abbas.isHuman); // undefined
console.log(ahmad.isHuman); // undefined

console.log(Person.greet()); // undefined
console.log(abbas.greet()); // TypeError: abbas.greet is not a function
*/

class Child extends Person {
  #age;
  constructor(name, age) {
    super(name);
    this.#age = age;
  }
}

class GrandChild extends Child {
  getAge() {
    console.log(this.#age); // Property '#age' is not accessible outside class 'Child' because it has a private identifier.
  }
}

const child = new Child("Abbas", 10);

/*
child.speak(); // Hello this is Abbas
console.log(child instanceof Person); // true
console.log(Person instanceof Function); // true
console.log(child.#age); // Property '#age' is not accessible outside class 'Child' because it has a private identifier
*/
