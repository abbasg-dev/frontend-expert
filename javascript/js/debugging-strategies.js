const button = document.querySelector("button");

button.addEventListener("click", moveRight);

function moveRight() {
  // debugger;
  const circle = document.getElementById("circle");
  const { left } = getComputedStyle(circle);
  // circle.style.left = parseInt(left) + 10 + "px";
  circle.style.left = left + 10;
}
