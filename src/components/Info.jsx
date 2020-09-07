import React from "react";
import styled from "@emotion/styled";
const Centrado = styled.div`
  margin: 0 auto;
  text-align: center;
`;
const Info = ({ info, error }) => {
  if (error) return null;
  const { strArtist, strBiographyEN, strCountry, strArtistThumb } = info;
  return (
    <Centrado>
      <h4>{strArtist}</h4>
      <img src={strArtistThumb} alt="" />
      <h5>{strCountry}</h5>
      <p className="letra">{strBiographyEN}</p>
    </Centrado>
  );
};

export default Info;
