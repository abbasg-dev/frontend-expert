/*
const button = document.querySelector("button");

// const abortController = new AbortController();
// button.addEventListener("click", onClick, {
//   capture: true,
//   once: true,
//   passive: true,
//   signal: abortController.signal,
// });

// document.body.addEventListener("click", onClick, true);

// abortController.abort();

// button.addEventListener("click", onClick);
// button.addEventListener("dblclick", onClick);
// button.addEventListener("mousedown", onClick);
button.addEventListener("mouseup", onClick);

function onClick(event) {
  // event.stopPropagation();
  // event.preventDefault();
  // console.log(event);
  // console.log(event.type);
  console.log(event.target);
  console.log(this);
  // console.log("You clicked the button");
  // button.removeEventListener("click", onClick);
}
*/

// window.addEventListener("keydown", (event) => {
//   console.log(event.code);
// });

// window.addEventListener("keyup", (event) => {
//   console.log(event.code);
// });

// window.addEventListener("keypress", (event) => {
//   console.log(event.code);
// });

const scrollable = document.getElementById("scrollable");
const button = document.querySelector("button");

// scrollable.addEventListener("scroll", (event) => {
//   console.log(event.target.scrollTop);
// });

// scrollable.addEventListener("mouseenter", (event) => {
//   console.log(event.pageX, event.pageY);
// });

// button.addEventListener("dragstart", (event) => {
//   console.log(event);
// });

// scrollable.addEventListener("mousemove", (event) => {
//   console.log(event.pageX, event.pageY);
// });

// scrollable.addEventListener("drop", (event) => {
//   scrollable.prepend(button);
// });

// scrollable.addEventListener("dragover", (event) => {
//   event.preventDefault();
// });

scrollable.addEventListener("click", (event) => {
  if (event.target !== this) {
    event.target.textContent = "Clicked";
  }
});
