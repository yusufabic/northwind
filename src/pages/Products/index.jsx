import { useState, useEffect } from "react";
import { fetchProductList } from "../../services";
import Card from "../../components/Card";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProductList().then((result) => {
      setProducts(result.data);
    });
  }, []);

  return (
    <div>
      <div className="row row-cols-4">
        {products.map((item, i) => (
          <div key={i} className="col">
            <Card item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
