/*
let globalNum = 5;

function logNum() {
  const localNum = 1;
  console.log(globalNum + localNum);
}

globalNum = 10;
logNum();
*/

/*
function example() {
  const num = 5;

  //   function logNum(num) {
  //     console.log(num);
  //   }

  return function () {
    console.log(num);
  };

  // logNum();
}

// example();
const innerFunction = example();

innerFunction();
*/

/*
function makeFunctions() {
  let privateNum = 0;

  function privateIncrement() {
    privateNum++;
  }

  return {
    logNum: () => console.log(privateNum),
    increment: () => {
      privateIncrement();
      console.log("Incremented");
    },
  };
}

const { logNum, increment } = makeFunctions();
const { logNum: logNum2, increment: increment2 } = makeFunctions();

logNum();
// console.log(privateNum);
increment();
logNum();

logNum2();
increment2();
logNum2();
*/

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 500);
}

console.log(i);
