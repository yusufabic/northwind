import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../store/cart";
import { setNotification } from "../../store/notification";
import Detail from "../../components/Detail";
import "./styles.css";

const ProductDetail = () => {
  const { selectedProduct } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const _addToCart = (param) => {
    dispatch(addToCart(param));
    dispatch(setNotification({ show: true, message: "Added to cart" }));
  };

  return (
    <section id="productDetail" className="page center">
      <Detail
        product={selectedProduct}
        addToCart={(param) => _addToCart(param)}
      />
    </section>
  );
};

export default ProductDetail;
