import React from "react";
import { Row } from "./Row";
import { Banner } from "./Banner";
import { Nav } from "./Nav";
import { requests } from "../modules/request";
import "../style/App.css";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="Netflix オリジナル作品"
        fetchUrl={requests.feachNetflixOriginals}
        isLargeRow
      />
      <Row title="マイリスト" fetchUrl={requests.feactTopRated} />
      <Row title="新作" fetchUrl={requests.feactComedyMovies} />
      <Row title="人気急上昇の作品" fetchUrl={requests.feactRomanceMovies} />
      <Row title="もう一度観る" fetchUrl={requests.feactDocumentMovies} />
    </div>
  );
}

export default App;
