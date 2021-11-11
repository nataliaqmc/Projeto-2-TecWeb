import Voo from "./components/Voo";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  var axios = require("axios").default;
  const [genres, setGenre] = useState([]);
  const [genreMovies, setGenreMovies] = useState([]);
  const [genreSeries, setGenreSeries] = useState([]);
  // Requisição de todos os genres:
  var get_genres = {
    method: 'GET',
    url: 'https://data-imdb1.p.rapidapi.com/genres/',
    headers: {
      'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
      'x-rapidapi-key': 'e9a145f218msh1c9665147f78266p12c595jsn9c56042d252a'
    }
  };
  useEffect(() => {
    axios
      .request(get_genres)
      .then((res) => setGenre(res.data.results));
  }, []);
  console.log(genres);

  // Requisição de todos os filmes de um genre:
  var movies_by_genre = {
    method: 'GET',
    url: 'https://data-imdb1.p.rapidapi.com/movie/byGen/Drama/',
    params: {page_size: '50'},
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
  var series_by_genre = {
    method: 'GET',
    url: 'https://data-imdb1.p.rapidapi.com/series/byGen/Drama/',
    params: {page_size: '50'},
    headers: {
      'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
      'x-rapidapi-key': 'e9a145f218msh1c9665147f78266p12c595jsn9c56042d252a'
    }
  };
  useEffect(() => {
    axios
      .request(series_by_genre)
      .then((res) => setGenreSeries(res.data.results));
  }, []);
  console.log(genreSeries);
  
  return (
    
    <div className="App">
      {genres.map((genre)=>(
        <Voo genre={genre.genre}>{genres}</Voo>
      ))}
    </div>
  );
}

export default App;