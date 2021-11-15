import React from "react";
import "./index.css";

export default function Movie(props) {
  return (
    <div className="card">
      <p className="card-title">{props.title}</p>
      <img className="imagem" src="/heart.png" />
    </div>
  );
}