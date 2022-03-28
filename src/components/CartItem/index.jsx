import React from "react";
import "./styles.css";

const CartItem = ({ product, increase, decrease, remove }) => {
  return (
    <div className="container px-4 py-0 mx-auto">
      <div className="row d-flex justify-content-center border-top">
        <div className="col-5">
          <div className="row d-flex">
            <div className="item">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="item-img"
              />
            </div>
          </div>
        </div>
        <div className="my-auto col-7">
          <div className="row">
            <div className="col-4">
              <p>{product.title}</p>
            </div>
            <div className="col-4">{product.price * product.quantity}</div>
            <div className="col-2">
              <div className="row">
                <div className="col">
                  <img
                    src="/plus.svg"
                    alt="plus"
                    className={product.quantity > 9 ? "visibility" : "plus"}
                    onClick={() => increase(product)}
                  />
                </div>
                <div className="col">
                  <p className="mb-0">{product.quantity}</p>
                </div>
                <div className="col">
                  <img
                    src="/minus.svg"
                    alt="minus"
                    className={product.quantity < 2 ? "visibility" : "minus"}
                    onClick={() => decrease(product)}
                  />
                </div>
              </div>
            </div>
            <div className="col-2  mx-auto remove">
              <img
                src="/remove.svg"
                alt="remove"
                onClick={() => remove(product)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
