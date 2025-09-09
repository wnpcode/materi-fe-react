import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { MyButton, MyButton2 } from "./components/Button";
import MyButtonClass from "./components/ButtonClass";
import { useEffect } from "react";
import axios from "axios";
import DigimonPage from "./components/CardLayout";

function App() {
  const [count, setCount] = useState(0);
  const hobby = ["berenang", "traveling", "bersepeda"];

  useEffect(() => {
    if (count == 5) alert("Count sudah mencapai angka 5");
    // axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
    // fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  }, [count]);

  useEffect(() => {
    // alert("Render selesai");
  }, []);
  useEffect(() => {
    console.log("ada yang berubah");
  });
  return (
    <>
      <DigimonPage></DigimonPage>
    </>
  );
}

export default App;
