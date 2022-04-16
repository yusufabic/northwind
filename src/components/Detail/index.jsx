import React from "react";
import Carousel from "../Carousel";
import "./styles.css";

const Detail = ({ product, addToCart }) => {
  return (
    <div id="detail" className="">
      <div className="detail-container row">
        <div className="img-container col-md-5">
          {product && (
            <Carousel slides={[product.imageUrl, ...product.images]} />
          )}
        </div>
        <div className="table-continer pt-3 rounded col-md-7">
          <table class="table table-striped table-dark">
            <tr>
              <td className="bg-primary text-white border border-white text-center">
                ID
              </td>
              <td className="border border-white text-dark px-3">
                {product.id}
              </td>
            </tr>
            <tr>
              <td className="bg-primary text-white border border-white text-center">
                CAT.ID
              </td>
              <td className="border border-white text-dark px-3">
                {product.categoryId}
              </td>
            </tr>
            <tr>
              <td className="bg-primary text-white border border-whit text-center">
                TITLE
              </td>
              <td className="border border-white text-dark px-3">
                {product.title}
              </td>
            </tr>
            <tr>
              <td className="bg-primary text-white border border-white text-center">
                PRICE
              </td>
              <td className="border border-white text-dark px-3">
                {product.price}
              </td>
            </tr>
            <tr>
              <td className="bg-primary text-white border border-white text-center">
                STAR
              </td>
              <td className="border border-white text-dark px-3">
                {product.star}
              </td>
            </tr>
            <tr>
              <td className="bg-primary text-white border border-white text-center">
                DATE
              </td>
              <td className="border border-white text-dark px-3">
                {Date(product.date)}
              </td>
            </tr>
            <tr>
              <td className="bg-primary text-white border border-white text-center">
                DESCRIPTION
              </td>
              <td className="border border-white text-dark px-3">
                {product.description}
              </td>
            </tr>
          </table>
        </div>

        <div className="button-add py-2">
          <button
            className="btn btn-primary"
            onClick={() => addToCart(product)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
