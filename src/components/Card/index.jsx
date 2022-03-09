import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedProduct } from "../../store/product";
import "./styles.css";

const Card = ({ item }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const onClick = (item) => {
    dispatch(setSelectedProduct(item));
    history.push("/detail");
  };
  return (
    <div className="card">
      <img src={item.imageUrl} className="card-img-top" alt={item.title} />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <h2>{item.price}</h2>
        <div className="d-flex justify-content-between">
          <button
            onClick={() => onClick(item)}
            type="button"
            className="btn btn-primary btn-sm"
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
