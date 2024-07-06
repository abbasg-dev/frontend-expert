// Dom Manipulation: Using JavaScript to change the content, structure or styles of the page.

// getElementById: Gets a single element based on its id attribute
const secondLi = document.getElementById("second-li");

// querySelector: Gets a single element based on a CSS selector. If multiple elements match the selector, returns the first one.
const firstLi = document.querySelector("li");

// querySelectorAll: Gets all elements matching a CSS selector as a NodeList
const listItems = document.querySelectorAll("li");
console.log(firstLi);
console.log(secondLi);
console.log(listItems);
console.log(listItems.length);

Array.from(listItems).map((li) => {
  console.log(li);
});

// getElementsByClassName: Gets all elements with a specific class as an HTMLCollection
console.log(document.getElementsByClassName("list-item"));

// getElementsByTagName: Gets all elements with a specific HTML tag as an HTMLCollection
const listItem = document.getElementsByTagName("li");

Array.from(listItem).forEach((li) => {
  console.log(li);
});

listItems[0].style.color = "red";
listItems[0].style.backgroundColor = "blue";

listItems[0].textContent = "Changed";

// element.attribute: An alternative to the setAttribute function, attributes can be directly edited via their property name. For example, element.value would get the value attribute of the element.
listItems[0].value = 5;
listItems[0].classList.remove("big");

// element.setAttribute('attribute', 'value'): Sets an HTML attribute to a specific value.
listItems[0].setAttribute("class", "big");
listItems[0].classList.add("blue");
listItems[0].classList.toggle("big");
listItems[0].classList.toggle("big");
listItems[0].classList.toggle("big");
listItems[0].classList = "blue";

// createElement: Creates a new HTML element
const p = document.createElement("p");

// createTextNode: Creates a text node as an alternative to setting textContent
const text = document.createTextNode("Hello World");

// element.textContent: The text content of an element, including that of any children. Note: this is slightly different from element.innerText, which only gets text that is actually rendered and element.innerHTML which gets the entire HTML code as a string.
p.textContent = "Hello World";
p.append(text);

console.log(listItems[0].innerHTML);
console.log(document.querySelector("ol").innerHTML);

// append: Appends 1 or more nodes (elements or text) to the end of the contents of another element.
document.body.append(p);

// appendChild: Appends an element to the end of the contents of another element.
document.body.appendChild(p);

// prepend: Prepends 1 or more nodes (elements or text) to the beginning of the contents of another element.
document.body.prepend(p);

document.body.innerHTML += "<p>HTML Test String</p>";
// document.body.innerHTML = "";
// document.body.innerHTML = "<script>doSomethingBad()</script>";

const parent = document.querySelector("ol");

// createDocumentFragment: Creates a document fragment, which is useful for appending multiple elements at once after a loop.
const fragment = document.createDocumentFragment();
const listItemsToAdd = [];
for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = `list item with i=${i}`;
  // parent.append(li);
  // listItemsToAdd.push(li);
  fragment.append(li);
}
// parent.append(...listItemsToAdd);
parent.append(fragment);

listItems[0].parentNode.removeChild(listItems[0]);

// remove: Removes the element from the DOM.
listItems[0].remove();

// innerWidth: The width of the browser window.
console.log(window.innerWidth);

// innerHeight: The height of the browser window.
console.log(window.innerHeight);

// element.classList: An object for updating CSS classes. Specifically, this contains 3 primary functions: add(className), remove(className) and toggle(className)
listItems[0].classList.add("big");

// getComputedStyle: Gets styles as they are currently rendered on the page, converted to pixels.
console.log(window.getComputedStyle(listItems[0]).fontSize);

// element.style.property: Sets a CSS property using inline styles, although CSS classes should usually be preferred. The style object will only contain inline styles, not those set with CSS.
listItems[0].style.fontSize;

const scrollable = document.getElementById("scrollable");

// clientHeight: The height of visible content and padding
console.log(scrollable.clientHeight);

// offsetHeight: The height of visible content, padding, borders and scrollbars.
console.log(scrollable.offsetHeight);

// scrollHeight: The height of all content and padding, including content scrolled out of view.
console.log(scrollable.scrollHeight);

// offsetTop: The distance from the outer top border of the element to the inner top border of the nearest positioned parent.
console.log(scrollable.offsetTop);

console.log(scrollable.querySelectorAll("p")[0].offsetTop);

// scrollIntoView: Scrolls the container so the element is in view
scrollable.querySelectorAll("p")[5].scrollIntoView();

// scrollTo: Scrolls the element to a specified top value in the options object.
// behavior: smooth will create a smooth transition.
scrollable.scrollTo({
  top: scrollable.querySelectorAll("p")[2].offsetTop,
  behavior: "smooth",
});
