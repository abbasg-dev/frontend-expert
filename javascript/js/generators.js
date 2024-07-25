function* generator1() {
  yield 1;
  yield 2;
}

function* generator2() {
  yield 3;
  yield 4;
}

function* genNumbers() {
  //   yield 1;
  //   yield 2;
  //   yield 3;
  //   return 4;
  //   yield 5;
  //   for (let i = 0; i < count; i++) {
  //     yield i;
  //   }
  //   return 5;
  //   const value = yield 0;
  //   yield value + 3;
  yield generator1();
  yield 2.5;
  yield generator2();
}

const generator = genNumbers();

// for (value of generator) {
//   console.log(value);
// }

// console.log(generator.next().value);
for (value of generator) {
  console.log(value);
}
// console.log(generator.return());
// console.log(generator.throw(new Error("There was an error")));
// console.log(generator.next(5));
