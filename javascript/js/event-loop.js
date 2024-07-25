function bark() {
  console.log("bark");
}

function meow() {
  console.log("meow");
}

function speak() {
  console.log("speaking");
  bark();
  meow();
  console.log("done speaking");
}

speak();

function logWorld() {
  console.log("world");
}

function logOne() {
  console.log("1");
}

function main() {
  // console.log("hello");
  // setTimeout(logWorld, 1000);
  // setTimeout(logWorld, 0);
  // superSlowFunction();
  // console.log("goodbye");

  setTimeout(logOne, 0);
  Promise.resolve(2)
    .then((val) => val * 2)
    .then(console.log);
  superSlowFunction();
  console.log("3");
}

function superSlowFunction() {}

main();

function mystery() {
  console.log("first");
  setTimeout(() => console.log("second"), 1000);
  setTimeout(() => console.log("third"), 0);
  console.log("fourth");
}

function chunkedSlowFunction() {
  setTimeout(processChunk, 0, 0);
}

function processChunk(start) {
  const end = start + 100000;
  for (let i = start; i < end; i++) {
    doCalculations(i);
  }
  if (end < 1000000000) {
    setTimeout(processChunk, 0, i + 1);
  }
}
