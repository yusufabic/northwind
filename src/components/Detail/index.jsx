import React from "react";
import "./styles.css";

const Detail = ({ product }) => {
  return (
    <div className="detail-container ">
      <div className="detail ">
        <div className="img-container ">
          <img src={product.imageUrl} alt="" />
        </div>
        <div className="table-continer ">
          <table>
            <tr>
              <td>ID</td>
              <td>{product.id}</td>
            </tr>
            <tr>
              <td>CAT.ID</td>
              <td>{product.categoryId}</td>
            </tr>
            <tr>
              <td>TITLE</td>
              <td>{product.title}</td>
            </tr>
            <tr>
              <td>PRICE</td>
              <td>{product.price}</td>
            </tr>
            <tr>
              <td>STAR</td>
              <td>{product.star}</td>
            </tr>
            <tr>
              <td>DATE</td>
              <td>{Date(product.date)}</td>
            </tr>
            <tr>
              <td>DESCRIPTION</td>
              <td>{product.description}</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="button">
        <button className="btn btn-primary ">Add to basket</button>
      </div>
    </div>
  );
};

export default Detail;
