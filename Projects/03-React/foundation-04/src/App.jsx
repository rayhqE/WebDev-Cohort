import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {
  const [value, setValue] = useState(5);
  const increment = () => {
    setValue(value + 1); //NOT SO GOOD
  };
  const decrement = () => {
    setValue(value - 1);
  };
  return (
    <>
      <div>
        <h1>Value: {value}</h1>
        <button onClick={increment}>➕</button>
        <button onClick={decrement}>➖</button>
      </div>
    </>
  );
}

export default App;
 