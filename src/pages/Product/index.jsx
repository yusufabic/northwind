import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";
import Detail from "../../components/Detail";
import { fetchProduct } from "../../services";

const Product = () => {
  const { product_id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    fetchProduct(product_id).then((result) => {
      setProduct(result.data);
    });
  }, []);

  return (
    <div className="center">
      <Detail product={product} />
    </div>
  );
};

export default Product;
