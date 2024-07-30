/*
enum State {
  On,
  Off,
}

let test: State = State.Off;
// test = State.On;
console.log(test);
*/
var StringNumGetterSetter = /** @class */ (function () {
    function StringNumGetterSetter() {
        this.map = new Map();
    }
    StringNumGetterSetter.prototype.set = function (key, value) {
        this.map.set(key, value);
    };
    StringNumGetterSetter.prototype.get = function (key) {
        return this.map.get(key);
    };
    return StringNumGetterSetter;
}());
