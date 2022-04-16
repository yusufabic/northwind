import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Card = ({ item, onClick }) => {
  return (
    <div className="card">
      <img src={item.imageUrl} className="card-img-top" alt={item.title} />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <h2>{item.price}</h2>
        <div className="d-flex justify-content-between">
          <button
            className="btn btn-primary btn-sm"
            onClick={() => onClick(item)}
            type="button"
          >
            Detail
          </button>
          <span>|</span>
          <Link to={`/product/${item.id}`} className="link">
            Detail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
