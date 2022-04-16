import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../../components/CartItem";
import { update, remove } from "../../store/cart";
import "./styles.css";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState();

  useEffect(() => {
    setTotalPrice(
      cart.reduce((total, item) => total + item.price * item.quantity, 0)
    );
  }, [cart]);

  return (
    <section id="cart" className="page container px-4 py-5 mx-auto">
      <div className="row d-flex justify-content-center">
        <div className="col-5">
          <h4 className="heading">Shopping Cart</h4>
        </div>
        <div className="col-7 ">
          <div className="row text-right">
            <div className="col-4">
              <h6 className="mt-2">Product</h6>
            </div>
            <div className="col-4">
              <h6 className="mt-2">Price</h6>
            </div>
            <div className="col-4">
              <h6 className="mt-2">Quantity</h6>
            </div>
          </div>
        </div>
      </div>

      {cart.map((product, i) => {
        return (
          <div key={i}>
            <CartItem
              product={product}
              increase={() => dispatch(update({ id: product.id, amount: 1 }))}
              decrease={() => dispatch(update({ id: product.id, amount: -1 }))}
              remove={(param) => dispatch(remove(param))}
            />
          </div>
        );
      })}

      <div className="d-flex justify-content-end border-top py-3">
        <h6>Total Price : {totalPrice} </h6>
      </div>
    </section>
  );
};

export default Cart;
