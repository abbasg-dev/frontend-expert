const set = new Set();
set.add(123);
set.add(456);
set.add({});
set.delete(123);
set.clear();

console.log(set.has(123)); // false
console.log(set.has(1234)); // false
console.log(set.has({})); // false

for (value of set) {
  console.log(value);
}

set.forEach((value) => {
  console.log(Value);
});

// const iter = set.values();
// const iter = set.keys();
const iter = set.entries();
console.log(iter.next().value);

const arr = [1, 2, 2, 3, 4];
console.log(Array.from(new Set(arr))); // [1, 2, 3, 4];
