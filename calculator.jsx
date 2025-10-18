import { useState } from "react";
import DisplayArea from "./displayarea.jsx";
import Buttons from "./button.jsx";

function Calculator() {
  const [input, setInput] = useState("");

  return (
    <div className="w-72 bg-gray-800 p-4 rounded-xl shadow-lg">
      <DisplayArea value={input} />
      <Buttons input={input} setInput={setInput} /> 
    </div>
  );
}

export default Calculator;
