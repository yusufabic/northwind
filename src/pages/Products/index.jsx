import { useState, useEffect } from "react";
import { fetchProductList, fetchCategories } from "../../services";
import Card from "../../components/Card";
import ListGroup from "../../components/ListGroup";
import "./styles.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    fetchProductList().then((result) => {
      setProducts(result.data);
      setSelectedProducts(result.data);
    });
    fetchCategories().then((result) => {
      setCategories(result.data);
    });
  }, []);

  useEffect(() => {
    const result = products.filter(
      (product) => product.categoryId === selectedCategory
    );
    if (selectedCategory === 0) {
      setSelectedProducts(products);
    } else {
      setSelectedProducts(result);
    }
  }, [selectedCategory]);

  return (
    <section className="row">
      <div className="col-3">
        <ul className="list-group">
          <ListGroup
            item={{ id: 0, name: "All" }}
            onClick={(param) => setSelectedCategory(param)}
            selectedCategory={selectedCategory}
          />
          {categories.map((item, key) => {
            return (
              <ListGroup
                key={key}
                item={item}
                onClick={(param) => setSelectedCategory(param)}
                selectedCategory={selectedCategory}
              />
            );
          })}
        </ul>
      </div>
      <div className="col-9">
        <div className="row row-cols-4">
          {selectedProducts.map((item, i) => (
            <div key={i} className="col">
              <Card item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
