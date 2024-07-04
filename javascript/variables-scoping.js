/*
let: a keyword for declaring a block-scoped variable that cannot be accessed before initialization.

var: a keyword for declaring a function-scoped variable that is automatically initialized to undefined when it is hoisted.

const: a keyword for declaring a constant value. Constants have behavior as variable declared with let, except they cannot be reassigned.

Blocked Scoped: the behavior of a variable that is only accessible inside of the blocked it was defined. Most of the time, the block will simply be the nearest pair of curly braces to the declaration.

Function Scoped: the behavior of a variable that is only accessible inside of the block it was defined. Most of the time, the block will simply be the nearest pair of curly braces to the declaration.

Hoisting:
The process by which the javascript engine moves variable declarations to the top of their scope, allocating memory for
them before reaching the line of code where they are declared. For variables declared with var, they are initialized to
undefined until reaching the line of code that initializes the variable. For variables declared with let or const, the
variable is not initialized and thus cannot be accessed before the line of code that initializes it.
*/

function test() {
  const constNum = 0;
  let letNum = 0;
  const arr = [1, 2, 3];
  //arr = [1, 2, 3, 4];
  arr.push(4);
  console.log(arr);

  //   letNum = 2;
  //   constNum = 2;

  //   if (true) {
  //     var varNum = 0;
  //   }
  //console.log("varNum", varNum);

  //   console.log("letNum", letNum);
  //   console.log("letNum", constNum);
}

test();
