import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LyricsProvider from "./context/LyricsContext";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Lyrics from "./components/Lyrics";
function App() {
  //apikey

  // const apikey = "770503fb5478377cd69439b905540b0c";
  return (
    <LyricsProvider>
      <Container>
        <Jumbotron>
          <h1>Busca tu lyrics</h1>
          <div className="col-12">
            <Lyrics />
          </div>
        </Jumbotron>
      </Container>
    </LyricsProvider>
  );
}

export default App;
