"use strict";

// console.log(this);

/*
const logThis = () => {
  console.log(this);
};
*/
/*
function logThis(x, y) {
  console.log(this);
  console.log(x, y);
}

const obj = {
  num: 10,
};
*/
// logThis();

// const boundLogThis = logThis.bind(obj, 10, 20);

// logThis.call(obj, 10, 20);
// logThis.apply(obj, [10, 20]);

// boundLogThis(30);

/*
const button = document.querySelector("button");

button.addEventListener("click", logThis);

const obj = {
  num: 10,
  logThis,
};

obj.logThis();
*/

/*
[1, 2, 3].forEach(
  function (num) {
    console.log(this);
    console.log(num);
  },
  { num: 10 }
);
*/

class Person {
  constructor(name) {
    // console.log(this);
    this.name = name;
    console.log(this);
  }

  speak() {
    console.log("Hello I am " + this.name);
  }
}

const abbas = new Person("Abbas");
const mark = new Person("Mark");
abbas.speak();
mark.speak();
