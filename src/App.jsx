import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { MyButton, MyButton2 } from "./components/Button";
import MyButtonClass from "./components/ButtonClass";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const hobby = ["berenang", "traveling", "bersepeda"];

  useEffect(() => {
    if (count == 5) alert("Count sudah mencapai angka 5");
    // axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
    fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  }, [count]);

  useEffect(() => {
    // alert("Render selesai");
  }, []);
  useEffect(() => {
    console.log("ada yang berubah");
  });
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {hobby.map((item, index) => (
          <p key={index}>
            {index} - {item}
          </p>
        ))}
        <MyButton title="Tombol Ku" color="darkred" />
        <MyButton color="#660000ff" title="Tombol 2" />
        <MyButton2 title="Tombol 3" color="darkgreen" />
        <MyButton2 title="Tombol 4" color="grey" />
        {/* <MyButtonClass></MyButtonClass> */}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
