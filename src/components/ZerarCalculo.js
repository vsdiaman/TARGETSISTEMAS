import React from "react";

function ZerarCalculo(props) {
  function handleReset() {
    props.onReset();
  }

  return <button onClick={handleReset}>Zerar Cálculo</button>;
}

export default ZerarCalculo;
