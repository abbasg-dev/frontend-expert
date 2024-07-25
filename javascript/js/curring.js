function sum(a, b, c) {
  return a + b + c;
}

function subtract(a, b, c) {
  return a - b - c;
}

/*
function curriedSum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
*/

function curry(func) {
  return (a) => (b) => (c) => func(a, b, c);
}

const curriedSum = curry(sum);
const curriedSubtract = curry(subtract);

const addFour = curriedSum(4);
console.log(addFour(10)(10));

console.log(sum(1, 4, 10));
console.log(curriedSum(1)(4)(10));
console.log(curriedSubtract(1)(4)(10));
