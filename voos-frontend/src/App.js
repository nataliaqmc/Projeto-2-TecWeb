import Voo from "./components/Voo";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  var axios = require("axios").default;
  const [voos, setVoos] = useState([]);
  var options = {
    method: 'GET',
    url: 'https://advanced-movie-search.p.rapidapi.com/genre/movie/list',
    headers: {
      'x-rapidapi-host': 'advanced-movie-search.p.rapidapi.com',
      'x-rapidapi-key': 'e9a145f218msh1c9665147f78266p12c595jsn9c56042d252a'
    }
  };
  useEffect(() => {
    axios
      .request(options)
      .then((res) => setVoos(res.data.genres));
  }, []);
  console.log(voos);

  return (
    
    <div className="App">
      {voos.map((voo)=>(
        <Voo>{voo}</Voo>
      ))}
    </div>
  );
}

export default App;