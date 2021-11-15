import React from "react";
import "./index.css";

export default function Movie(props) {
  var axios = require("axios").default;
  const favoritar = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8000/api/movie/favoritar/', {'title':props.title})
  }
  return (
    <div className="card">
      <p className="card-title">{props.title}</p>
      <img onClick={favoritar} className="imagem" src="/heart.png" />
    </div>
  );
}