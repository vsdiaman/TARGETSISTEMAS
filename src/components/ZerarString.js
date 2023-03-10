import React from "react";

function ZerarString(props) {
  function handleReset() {
    props.onReset();
  }

  return <button onClick={handleReset}>Apagar</button>;
}

export default ZerarString;
