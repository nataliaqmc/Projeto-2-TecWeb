import Movie from "./components/Movie";
import { useEffect, useState } from "react";
import React from "react";
import {Link} from "react-router-dom"
function Home() {
  var axios = require("axios").default;
  const [genreMovies, setGenreMovies] = useState([]);
  const [genreSeries, setGenreSeries] = useState([]);

  // Requisição de todos os filmes de um genre:
  var movies_by_genre = {
    method: 'GET',
    url: 'https://data-imdb1.p.rapidapi.com/movie/byGen/Drama/',
    params: {page_size: '100'},
    headers: {
      'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
      'x-rapidapi-key': 'e9a145f218msh1c9665147f78266p12c595jsn9c56042d252a'
    }
  };
  useEffect(() => {
    axios
      .request(movies_by_genre)
      .then((res) => setGenreMovies(res.data.results));
  }, []);
  console.log(genreMovies);

  // Requisição de todas as séries de um genre:
  useEffect(() => {
    axios
      .get('http://localhost:8000/api/movie/')
      .then((res) => setGenreSeries(res.data));
  }, []);
  console.log(genreSeries);
  
  return (
    <div>
      <div className="App-header">
          <div>Filmes</div>
          <Link to="/favoritos">
            <img className="imagem" src="/heart.png" />
          </Link>
      </div>
      <div className="App">
        {genreMovies.map((genre)=>(
          <Movie title={genre.title} imdb_id={genre.imdb_id}>{genreMovies}</Movie>
        ))}
      </div>
    </div>
  );
}

export default Home;