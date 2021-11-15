import React from "react";
import "./index.css";


function deletar (title,id){
  var axios = require("axios").default;
  const deletar = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8000/api/movie/delete/'+title+'/'+id+"/", {'title':title, 'imdb_id':id})
  }
  return deletar
}


export default function MovieDelete(props) {
  console.log(props.title)
  console.log(props.imdb_id)
  
  return (
    <div className="card">
      <p className="card-title">{props.title}</p>
      <a onClick ={deletar(props.title,props.imdb_id)}>X</a>
    </div>
  );
}