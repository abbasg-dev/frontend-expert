import { useState, useEffect, useLayoutEffect } from "react";

export default function DisplayCounter() {
  const [isShown, setIsShown] = useState(true);

  return (
    <>
      <button onClick={() => setIsShown(!isShown)}>
        {isShown ? "Hide Counter" : "Show Counter"}
      </button>
      {isShown ? <Counter /> : null}
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [bool, setBool] = useState(false);

  useLayoutEffect(() => {
    if (count === 3) {
      setCount(4);
    }
  }, [count]);

  useEffect(() => {
    console.log("render");
  });

  const startTime = new Date();
  while (new Date() - startTime < 100) {}

  return (
    <div className="counter">
      <button onClick={() => setBool(!bool)}>Re-Render</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
}
