import Movie from "./components/Movie";
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
    url: 'https://data-imdb1.p.rapidapi.com/series/byGen/Romance/',
    params: {page_size: '50'},
    headers: {
      'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
      'x-rapidapi-key': 'e9a145f218msh1c9665147f78266p12c595jsn9c56042d252a'
    }
  };
  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/movie/3/')
      .then((res) => setGenreSeries(res.data));
  }, []);
  console.log(genreSeries);
  
  return (
    <div>
      <div className="App-header">
          <div>Series</div>
          <img className="imagem" src="/heart.png" />
      </div>
      <div className="App">
        {genreSeries.map((genre)=>(
          <Movie title={genre.title}>{genreSeries}</Movie>
        ))}
      </div>
    </div>
  );
}

export default App;