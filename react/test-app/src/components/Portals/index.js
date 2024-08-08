import { useState } from "react";
import { createPortal } from "react-dom";
import "./Portals.css";

export default function Portals() {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <>
      <div
        className="container"
        onClick={() => {
          console.log("Clicked container");
        }}
      >
        <button onClick={() => setIsHidden(!isHidden)}>
          {isHidden ? "Show Modal" : "Hide Modal"}
        </button>
        {isHidden || <Modal />}
      </div>

      <p className="other">Other Context</p>
    </>
  );
}

function Modal() {
  return createPortal(
    <p className="modal">Modal</p>,
    document.getElementById("modal-root")
  );
}
