import { useState, Profiler, useDebugValue } from "react";

let renderCount = 0;

export default function Debugging() {
  renderCount++;
  console.log("rendering");

  return (
    <Profiler id="App" onRender={() => console.log("commit")}>
      <Counter initialValue={5} />
      <Counter />
      <p>Render count: {renderCount}</p>
    </Profiler>
  );
}

function Counter({ initialValue }) {
  const [count, setCount] = useMyState(initialValue);

  const startTime = Date.now();
  while (new Date() - startTime < 500) {}

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
    </>
  );
}

function useMyState(initialValue = 0) {
  useDebugValue("hello world");
  return useState(initialValue);
}
