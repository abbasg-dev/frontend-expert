window.addEventListener("load", main);

function main() {
  const button = document.querySelector("button");
  button.addEventListener("click", setBackgroundColor);

  function setBackgroundColor() {
    document.body.style.backgroundColor = "#00334C";
  }
}
