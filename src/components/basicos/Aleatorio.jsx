import React from "react";

export default (props) => {
//const max = props.max;
//const min = props.min;
    const {min, max} = props
    const valorAleatorio = (Math.random() * (max - min) + min).toFixed(2);

  return (
    <div>
      <h2>Valor Aleatório</h2>
      <p>
        <strong>Valor mínimo: {min}</strong>
      </p>
      <p>
        <strong>Valor máximo: {max}</strong>
      </p>
      <p>
        <strong>Valor gerado: {valorAleatorio}</strong>
      </p>
    </div>
  );
};
