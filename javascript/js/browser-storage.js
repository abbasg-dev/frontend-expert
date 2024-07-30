// document.cookie = `user=Ahmad; expires=${new Date().toUTCString()}`;

// document.cookie = `user=Abbas; secure; samesite=strict}`;
// console.log(document.cookie);

/*
const course = document.cookie
  .split("; ")
  .find((cookie) => cookie.startsWith("course="))
  .split("=")[1];

console.log(course);
*/

/*
localStorage.setItem("user", "Abbas");
localStorage.setItem("course", "FrontendExpert");
console.log(localStorage.getItem("user"));
localStorage.removeItem("user");
localStorage.clear();
console.log(localStorage.getItem("user"));
*/

const request = indexedDB.open("myDatabase", 1);

request.addEventListener("upgradeneeded", (event) => {
  const database = event.target.result;
  /*
  const store = database.createObjectStore("users", { keyPath: "id" });
  store.createIndex("name", "name");

  store.add({
    id: 0,
    name: "Abbas",
    course: "FrontendExpert",
  });
  store.add({
    id: 1,
    name: "Ahmad",
    course: "AlgoExpert",
  });
  */
  /*
  database.transaction(["users"], "readwrite").objectStore("users").add({
    id: 2,
    name: "Adel",
    course: "FrontendExpert",
  });
  */
  //   database.transaction(["users"], "readwrite").objectStore("users").delete(1);

  const req = database
    .transaction(["users"], "readwrite")
    .objectStore("users")
    .index("name")
    .get("Abbas");

  req.addEventListener("success", (event) => {
    console.log(event.target.result.course);
  });
});
