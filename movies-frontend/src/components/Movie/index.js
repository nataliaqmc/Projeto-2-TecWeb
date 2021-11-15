import React from "react";
import "./index.css";

function favoritar (title,id){
  var axios = require("axios").default;
  const favoritar = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8000/api/movie/'+title+'/'+id+"/", {'title':title, 'imdb_id':id})
  }
  return favoritar
}


export default function Movie(props) {
  console.log(props.title)
  console.log(props.imdb_id)

  
  return (
    <div className="card">
      <p className="card-title">{props.title}</p>
      <img onClick={favoritar(props.title,props.imdb_id)} className="imagem" src="/heart.png"/>
    </div>
  );
}
