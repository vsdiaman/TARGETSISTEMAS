import React, { useState } from "react";
import ZerarString from "./ZerarString";
import "../App.css";

function InverterString() {
  const [stringInput, setStringInput] = useState("");
  const [reversedString, setReversedString] = useState("");

  const reverseString = () => {
    let reversed = "";
    for (let i = stringInput.length - 1; i >= 0; i--) {
      reversed += stringInput[i];
    }
    setReversedString(reversed);
  };
  const resetString = () => {
    setStringInput("");
    setReversedString("");
  };

  return (
    <div className="container">
      <h1>Inverter os caracteres de um string</h1>
      <label htmlFor="numero">Digite uma palavra:</label>
      <input
        type="text"
        value={stringInput}
        onChange={(e) => setStringInput(e.target.value)}
      />
      <div className="fibonacci-verificador">
        <button className="verificar-button" onClick={reverseString}>
          Inverter
        </button>
        <ZerarString onReset={resetString} />
        <p>{reversedString}</p>
      </div>
    </div>
  );
}

export default InverterString;
