const map = new Map([
  ["test", 123],
  [10, "ten"],
]);
// map.set("test", 123);
// map.set(10, "ten");
// const obj = {};
// map.set(obj, 42);
// console.log(map.get(10)); // ten
// console.log(map.size); // 3
// console.log(map.has(10)); // true
// console.log(map.has("ten")); // false
// console.log(map.has({})); // false
// map.delete(10);
// console.log(map.has(obj)); // true
// console.log(map.has(10)); // false
// console.log(map.has("test")); // true
// map.clear();
// console.log(map.size); // 0

// for ([key, value] of map) {
//   console.log(key, value);
// }

// map.forEach((value, key) => {
//   console.log(key, value);
// });

// const iter = map.entries();
// const iter = map.keys();
const iter = map.values();
console.log(iter.next().value); // 123
console.log(iter.next().value); // ten
console.log(iter.next().value); // undefined
