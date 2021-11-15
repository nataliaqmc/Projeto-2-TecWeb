import "./App.css";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import MovieDelete from "./components/Movie/deletar";



function Favoritar() {
    const [genreSeries, setGenreSeries] = useState([]);
    var axios = require("axios").default;

    useEffect(() => {
        axios
          .get('http://localhost:8000/api/movie/')
          .then((res) => setGenreSeries(res.data));
      }, []);
      console.log(genreSeries);
  
  
  return (
    <div>
      <div className="App-header">
          <Link className="titulo" to="/">
            <div>Filmes</div>
          </Link>
          <img className="imagem" src="/heart.png" />
          
      </div>
      <div className="App">
        {genreSeries.map((genre)=>(
          <MovieDelete title={genre.title} imdb_id={genre.imdb_id}>{genreSeries}</MovieDelete>
        ))}
      </div>
    </div>
  );
}

export default Favoritar;