import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setSelectedProduct } from "../../store/product";
import { fetchProductList, fetchCategories } from "../../services";
import Card from "../../components/Card";
import ListGroup from "../../components/ListGroup";
import "./styles.css";

const Products = (props) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const id = props.location.state?.id;
  const dispatch = useDispatch();
  const history = useHistory();
  const onClick = (item) => {
    dispatch(setSelectedProduct(item));
    history.push("/detail");
  };

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

  useEffect(() => {
    if (id) {
      setSelectedCategory(id);
    }
  }, [id]);

  return (
    <section id="products" className="page row">
      <div className="col-3">
        <ul className="list-group">
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
        <div className="row">
          {selectedProducts.map((item, i) => (
            <div key={i} className="col card-product">
              <Card item={item} onClick={(item) => onClick(item)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
