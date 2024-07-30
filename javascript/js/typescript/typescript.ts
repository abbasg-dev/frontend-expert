/*
enum State {
  On,
  Off,
}

let test: State = State.Off;
// test = State.On;
console.log(test);
*/

/*
function add(x: number, y: number): void {
  console.log(x + y);
}

add(1, 2);
*/

/*
interface Instructor {
  name: string;
  course: string;
  age?: number;
}
*/

/*
const abbas: Instructor = {
  name: "Abbas",
  course: "FrontendExpert",
  age: 24,
};

const ahmad: Instructor = {
  name: "Ahmad",
  course: "AlgoExpert",
};
*/

/*
class AlgoExpertInstructor implements Instructor {
  name: string;
  course: string;

  constructor(name: string) {
    this.name = name;
    this.course = "AlgoExpert";
  }
}

const tim = new AlgoExpertInstructor("Tim");
*/

// const arr: Array<number> = [1, 2, 3];

interface GetterSetter<Key, Value> {
  set: (key: Key, value: Value) => void;
  get: (key: Key) => Value;
}

class StringNumGetterSetter implements GetterSetter<string, number> {
  map: Map<string, number> = new Map();

  set(key: string, value: number): void {
    this.map.set(key, value);
  }

  get(key: string): number {
    return this.map.get(key);
  }
}
