export default class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hi, this is ${this.name}`);
  }
}

// export default Person;
// export { Person as default };
