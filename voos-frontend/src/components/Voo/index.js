import React from "react";
import "./index.css";

export default function Voo(props) {
  return (
    <div className="card">
      <h3 className="card-title">{props.genres}</h3>
    </div>
  );
}