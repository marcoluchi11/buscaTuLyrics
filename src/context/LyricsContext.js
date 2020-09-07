import React, { createContext, useState } from "react";

export const LyricsContext = createContext();

const LyricsProvider = (props) => {
  const [buscar, setBuscar] = useState({ artista: "", cancion: "" });
  const [lyrics, setLyrics] = useState("");
  const [info, setInfo] = useState({});
  const [error, setError] = useState(false);
  return (
    <LyricsContext.Provider
      value={{
        buscar,
        info,
        lyrics,
        error,
        setError,
        setBuscar,
        setLyrics,
        setInfo,
      }}
    >
      {props.children}
    </LyricsContext.Provider>
  );
};

export default LyricsProvider;
