const weakSet = new WeakSet();
weakSet.add(123); // TypeError: Invalid value used in weak set
weakSet.add({});

(function () {
  const obj = {};
  weakSet.add(obj);
})();

console.log(weakSet.size); // undefined
console.log(weakSet.has({})); // false

const obj = {};
weakSet.add(obj);

console.log(weakSet.has(obj)); // true
