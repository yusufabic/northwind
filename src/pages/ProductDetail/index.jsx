import React from "react";
import { useSelector } from "react-redux";
import Detail from "../../components/Detail";

const ProductDetail = () => {
  const { selectedProduct } = useSelector((state) => state.product);

  return <Detail product={selectedProduct} />;
};

export default ProductDetail;
