import React from "react";
import styled from "@emotion/styled";

const Borde = styled.div`
  border-right: 1.5px black solid;
`;
const Cancion = ({ letra, letraNombre }) => {
  return (
    <Borde>
      <h2 className="capitalizar">{letraNombre}</h2>
      <p className="letra">{letra}</p>
    </Borde>
  );
};

export default Cancion;
