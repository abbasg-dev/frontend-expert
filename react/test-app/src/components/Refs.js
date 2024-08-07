import { forwardRef, useRef } from "react";

export default function Refs() {
  /*
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };
  */
  return (
    <>
      <MyInput ref={handleRef} />
      {/* <button onClick={focusInput}>Focus</button> */}
    </>
  );
}

function handleRef(domNode) {
  console.log(domNode);
}

const MyInput = forwardRef(function (props, ref) {
  return <input ref={ref} {...props} style={{ color: "red" }} />;
});
