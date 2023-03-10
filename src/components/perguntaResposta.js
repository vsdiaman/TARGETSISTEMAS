import React from "react";
import "../App.css";

function PerguntaResposta(props) {
  return (
    <header>
      <div className="pergunta-resposta">
        <h2 className="pergunta">Pergunta:</h2>
        <p>{props.pergunta}</p>
        <h2>Resposta:</h2>
        <p className="resposta">{props.resposta}</p>
      </div>
    </header>
  );
}

export default PerguntaResposta;
