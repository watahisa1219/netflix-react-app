import React, { useState, useEffect } from "react";
import axios from "../modules/axios";
import { requests } from "../modules/request";
import "../style/Banner.css";

export const Banner = () => {

  // stateの初期化
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchData = async() => {
      const request = await axios.get(requests.feachNetflixOriginals);

      //apiからランダムで値を取得
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  // descriptionの切り捨てよう関数
  const truncate = (str, n) => {
    // undefinedを弾く
    if (str !== undefined) {
      return str.length > n ? str.substr(0, n - 1) + "..." : str;
    }
  }

  return (
    <header
      className="Banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="Banner-contents">
        <h1 className="banner-title">
          {movie.title || movie.name || movie.orignal_name}
        </h1>
        <div className="Banner-buttons">
          <button className="Banner-button">再生</button>
          <button className="Banner-button">もっと見る</button>
        </div>

        <h1 className="Banner-description">{truncate(movie.overview, 150)}</h1>
      </div>

      <div className="Banner-fadeBottom" />
    </header>
  );
};