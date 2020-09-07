import React, { useContext, Fragment } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Label from "react-bootstrap/FormLabel";
import { LyricsContext } from "./../context/LyricsContext";
import Cancion from "./Cancion";
import Info from "./Info";
import Error from "./Error";
const Lyrics = () => {
  const {
    buscar,
    setBuscar,
    lyrics,
    setLyrics,
    info,
    setInfo,
    error,
    setError,
  } = useContext(LyricsContext);

  const handleChange = (e) => {
    setBuscar({
      ...buscar,
      [e.target.name]: e.target.value,
    });
  };
  const handleClick = () => {
    if (buscar.cancion.trim() === "" || buscar.artista.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    const getLyrics = async () => {
      const url = `https://api.lyrics.ovh/v1/${buscar.artista}/${buscar.cancion}`;

      const letra = await fetch(url);
      const holis = await letra.json();
      if (holis.error) {
        setError(true);
        return;
      }
      setError(false);
      setLyrics(holis.lyrics);
    };
    const getInfo = async () => {
      const url = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${buscar.artista}`;
      const letra = await fetch(url);
      const holis = await letra.json();
      if (holis.artists === null) {
        setError(true);
        return;
      }
      setError(false);
      setInfo(holis.artists[0]);
    };
    getLyrics();
    getInfo();
  };

  return (
    <Fragment>
      <form>
        <Label>Artista</Label>
        <InputGroup onChange={handleChange} size="xs" className="mb-3">
          <FormControl
            name="artista"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        <Label>Cancion</Label>
        <InputGroup onChange={handleChange} size="xs" className="mb-4">
          <FormControl
            name="cancion"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        {error ? (
          <Error mensaje="Ingrese un artista o cancion correcta" />
        ) : null}

        <input
          onClick={handleClick}
          type="button"
          className="btn btn-secondary mt-4 mb-4 btn-lg btn-block"
          value="Buscar"
        />
      </form>
      <div className="row">
        <div className="col-12 col-md-6">
          <Cancion error={error} letra={lyrics} letraNombre={buscar.cancion} />
        </div>
        <div className="col-12 col-md-6">
          <Info info={info} />
        </div>
      </div>
    </Fragment>
  );
};

export default Lyrics;
