// "use strict";

// import { algoExpert, frontendExpert } from "./helpers.js";
// import Person from "./person.js";

// frontendExpert();
// algoExpert();

// const abbas = new Person("Abbas");
// abbas.sayHello();

const shouldSayFrontend = true;

console.log(this);

if (shouldSayFrontend) {
  const { frontendExpert } = await import("./helpers.js");
  frontendExpert();
}
