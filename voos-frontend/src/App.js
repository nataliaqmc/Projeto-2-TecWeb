import axios from "axios";
import Voo from "./components/Voo";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [voos, setVoos] = useState([]); // Remova o array de notes que existia na versão anterior

  useEffect(() => {
    axios
      .get("https://rapidapi.com/skyscanner/api/skyscanner-flight-search/")
      .then((res) => setVoos(res.data));
  }, []);

  console.log(voos);

  return (
    
    <div className="App">
      {voos.map((voo) => (
        <Voo key={`voo__${voo.id}`} title={voo.title}>
          {voo.content}
        </Voo>
      ))}
    </div>
  );
}

export default App;