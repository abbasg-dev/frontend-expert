const BASE_API = "http://localhost:8080/api";
const JSON_API = "http://localhost:8080/jsonApi";
const POST_API = "http://localhost:8080/postApi";
const SLOW_API = "http://localhost:8080/slowApi";

// console.log(fetch(BASE_API));

// fetch(BASE_API + "?firstName=Abbas&lastName=Ghaith")
/*
fetch(url)
  .then((res) => res.text())
  .then(console.log)
  .catch((error) => console.error("Oh no: " + error));
*/

/*
const form = document.querySelector("form");
form.addEventListener("submit", onSubmit);
*/

async function main() {
  //   const url = new URL(BASE_API);
  //   url.searchParams.set("firstName", "Abbas");
  //   url.searchParams.set("lastName", "Ghaith");

  /*
  const data = {
    name: "Abbas",
  };

  const headers = new Headers();
  headers.append("Content-Type", "application/json; charset=utf-8");

  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers,
  };
  */
  /*
  event.preventDefault();

  const options = {
    method: "POST",
    body: new FormData(form),
  };
  */

  const abortController = new AbortController();
  setTimeout(() => abortController.abort(), 2000);

  try {
    const response = await fetch(SLOW_API, {
      signal: abortController.signal,
    });
    // console.log(response.headers.get("content-type"));
    // console.log(response.status);
    // console.log(response.ok);
    // const obj = await response.json();
    // console.log(obj);
    const text = await response.text();
    console.log(text);
  } catch (error) {
    console.error("Oh no: " + error);
  }
}

main();

// console.log("After fetch");

/*
const request = new XMLHttpRequest();
request.addEventListener("load", function () {
  console.log(this.responseText);
});
// request.addEventListener("error", function () {
//   console.log(this.responseText);
// });

request.open("GET", BASE_API);
request.send();
*/
