Array.prototype.myMap = function (callback) {
  // In this function, `this` is the original array.
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(callback(this[i], i, this));
  }
  return output;
};

Array.prototype.myFilter = function (callback) {
  // In this function, `this` is the original array.
  const output = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this) === true) {
      output.push(this[i]);
    }
  }
  return output;
};

Array.prototype.myReduce = function (callback, initialValue) {
  // In this function, `this` is the original array.
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    if (i === 0 && initialValue === undefined) {
      accumulator = this[i];
    } else {
      accumulator = callback(accumulator, this[i], i, this);
    }
  }
  return accumulator;
};
