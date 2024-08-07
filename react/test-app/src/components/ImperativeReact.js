import { forwardRef, useImperativeHandle, useRef, useState } from "react";

const Counter = forwardRef((props, ref) => {
  const [count, setCount] = useState(0);

  useImperativeHandle(ref, () => ({
    reset: () => setCount(0),
  }));

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
    </>
  );
});

const CustomInput = forwardRef((props, ref) => {
  const [value, setValue] = useState("");

  useImperativeHandle(ref, () => ({
    reset: () => setValue(""),
  }));

  return (
    <input
      {...props}
      value={value}
      onChange={(event) => setValue(event.target.value)}
      style={{ color: "red" }}
    />
  );
});

export default function ImperativeReact() {
  const counterRef = useRef();
  const customInputRef = useRef();

  return (
    <>
      <Counter ref={counterRef} />
      <CustomInput ref={customInputRef} placeholder="Type something..." />
      <button
        onClick={() => {
          counterRef.current.reset();
          customInputRef.current.reset();
        }}
      >
        Reset
      </button>
    </>
  );
}
