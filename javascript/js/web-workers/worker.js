// for (let i = 0; i < 3000000000; i++) {
//   i + 2;
// }

//document.body += "hello";

// addEventListener("message", (event) => {
//   console.log(event.data);
//   postMessage(event.data * 10);
// });

addEventListener("connect", (event) => {
  const port = event.ports(0);

  port.onmessage = function (event) {
    // console.log(event.data);
    port.postMessage(event.data * 10);
  };
});

// onmessage = function (event) {
//   console.log(event.data);
// };

// console.log("slow operation finished");
