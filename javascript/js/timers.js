const start = document.getElementById("start");
const stop = document.getElementById("stop");
const count = document.getElementById("count");

start.addEventListener("click", startTime);
stop.addEventListener("click", stopTime);

// let timerID;
let animationFrameID;

// console.log(performance.now());

/*
let timeoutID = setTimeout(() => {
  console.log("timeout");
}, 0);

clearTimeout(timeoutID);
*/

/*
setTimeout(() => {
  // console.log(performance.now());
  console.log(Date.now());
}, 1000);
*/

const date = new Date(2024, 0, 10, 9, 25, 10, 30);
// const date = new Date("July 19, 2024");
date.setMonth(7);
console.log(date);

// console.log(date.getMonth());
// console.log(date.getHours());
// console.log(date.getDay());

function startTime(timestamp) {
  console.log(timestamp);
  /*
    timerID = setInterval(() => {
    // console.log("starting");
    count.textContent++;
  }, 500);
  */
  count.textContent++;
  animationFrameID = requestAnimationFrame(startTime);
}

function stopTime() {
  // clearInterval(timerID);
  cancelAnimationFrame(animationFrameID);
}
