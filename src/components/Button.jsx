import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

export const MyButton = ({ title }) => {
  const [color, setColor] = useState("red");
  const buttonRef = useRef(null);
  title = "laksjdflj";

  const gantiWarna = (value = "green") => {
    console.log("button ref", buttonRef.current);
    console.log(document.getElementById("buttonRef"));
    buttonRef.current.textContent = "hai";
    setColor(value);
  };

  function gantiWarna2(value = "green") {
    setColor(value);
  }

  useEffect(() => {
    console.log("Child komponen ada yang berubah");
  });
  return (
    <button
      id="buttonRef"
      ref={buttonRef}
      style={{
        backgroundColor: color,
      }}
      onClick={() => gantiWarna("yellow")}
    >
      {title}
    </button>
  );
};

export const MyButton2 = (props) => {
  return (
    <button
      style={{
        backgroundColor: props.color,
      }}
    >
      {props.title}
    </button>
  );
};
