import React from "react";
import "./index.css";

export default function Voo(props) {
  return (
    <div className="card">
      <p className="card-title">{props.genre}</p>
    </div>
  );
}