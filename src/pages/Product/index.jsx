import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart";
import { setNotification } from "../../store/notification";
import "./styles.css";
import Detail from "../../components/Detail";
import { fetchProduct } from "../../services";

const Product = () => {
  const dispatch = useDispatch();

  const _addToCart = (param) => {
    dispatch(addToCart(param));
    dispatch(setNotification({ show: true, message: "Added to cart" }));
  };
  const { product_id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    fetchProduct(product_id).then((result) => {
      setProduct(result.data);
    });
  }, []);

  return (
    <section id="page" className="center">
      <Detail product={product} addToCart={(param) => _addToCart(param)} />
    </section>
  );
};

export default Product;
