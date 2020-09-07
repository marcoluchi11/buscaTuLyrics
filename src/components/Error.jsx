import React from "react";
const Error = ({ mensaje }) => {
  return (
    <p className="alert alert-danger mt-2" role="alert">
      {mensaje}
    </p>
  );
};

export default Error;
