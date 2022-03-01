import React from "react";
import "./styles.css";

const ListGroup = ({ item, onClick, selectedCategory }) => {
  return (
    <li
      className="list-group-item"
      style={selectedCategory === item.id ? { fontWeight: "bold" } : null}
      onClick={() => onClick(item.id)}
    >
      {item.name}
    </li>
  );
};

export default ListGroup;
