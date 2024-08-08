import { useState, useMemo, lazy, Suspense, useCallback } from "react";
const MyButton = lazy(() => import("./MyButton"));

export default function Performance() {
  const [num, setNum] = useState(10);
  const [logValue, setLogValue] = useState("");
  const fibValue = useMemo(() => {
    console.log("calculating fib value");
    return fib(num);
  }, [num]);
  const onClickLog = useCallback(() => {
    console.log(logValue);
  }, [logValue]);

  return (
    <>
      <h1>
        Fib {num} is {fibValue}
      </h1>
      <input
        type="number"
        value={num}
        onChange={(event) => setNum(parseInt(event.target.value))}
      />
      <br />
      <input
        type="text"
        value={logValue}
        onChange={(event) => setLogValue(event.target.value)}
      />
      &nbsp;
      {logValue.length > 0 ? (
        <Suspense>
          <MyButton onClick={onClickLog}>Log Value</MyButton>
        </Suspense>
      ) : null}
    </>
  );
}

function fib(n) {
  if (n === 2) return 1;
  if (n === 1) return 0;
  return fib(n - 1) + fib(n - 2);
}
