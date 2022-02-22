import React from "react";

import { Link } from "react-router-dom";
import "./style.css";

const Card = ({ item }) => {
  return (
    <div className="card">
      <Link to="#/">
        <img src="https://picsum.photos/200" alt={item.title} />
        <br />
        <h1>{item.title}</h1>
        <br />
        <h2>{item.price}</h2>
      </Link>
      <br />
      <button>Detail</button>
      <span> | </span>
      <a href="/">Detail</a>
    </div>
  );
};

export default Card;
