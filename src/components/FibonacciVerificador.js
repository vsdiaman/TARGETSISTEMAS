import React, { useState } from "react";
import ZerarCalculo from "./ZerarCalculo";
import "../App.css";

function FibonacciVerificador() {
  const [numero, setNumero] = useState("");
  const [resultado, setResultado] = useState("");

  const verificarFibonacci = () => {
    const num = parseInt(numero);
    let a = 0;
    let b = 1;

    while (b < num) {
      let temp = b;
      b = a + b;
      a = temp;
    }

    if (b === num) {
      setResultado(`${num} pertence à sequência de Fibonacci.`);
    } else {
      setResultado(
        `${num} não pertence à sequência de Fibonacci ou precisa digitar um numero válido.`
      );
    }
  };

  const resetCalculo = () => {
    setNumero("");
    setResultado("");
  };

  return (
    <div className="container">
      <h1>Verificador de Sequência de Fibonacci</h1>
      <label htmlFor="numero">Digite um número:</label>
      <input
        type="number"
        id="numero"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
      />
      <div className="fibonacci-verificador">
        <button className="verificar-button" onClick={verificarFibonacci}>
          Verificar
        </button>
        <ZerarCalculo onReset={resetCalculo} />
        <p>{resultado}</p>
      </div>
    </div>
  );
}

export default FibonacciVerificador;
