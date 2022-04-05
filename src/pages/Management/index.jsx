import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchProductList, deleteProduct } from "../../services";
import "./styles.css";

const Management = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    fetchProductList().then((result) => {
      setProducts(result.data);
      setFilteredProducts(result.data);
    });
  }, []);

  useEffect(() => {
    if (filterText.length) {
      let filtered = products.filter((item) =>
        item.title.toLowerCase().includes(filterText)
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [filterText]);

  const remove = (product) => {
    deleteProduct(product.id).then(() =>
      fetchProductList().then((result) => {
        setProducts(result.data);
        setFilteredProducts(result.data);
      })
    );
  };

  return (
    <section id="management">
      <div className="input-group mb-3 search">
        <span className="input-group-text my-3">Search Product</span>
        <input
          type="text"
          className="form-control my-3"
          id="basic-url"
          placeholder="Type Product Name"
          value={filterText}
          onChange={(e) =>
            setFilterText(e.target.value.toString().toLowerCase())
          }
        />
      </div>

      <br />
      <table className="table table-hover">
        <thead>
          <tr>
            <th className="text-center border border-dark">Product İd</th>
            <th className="text-center border border-dark">Product Title</th>
            <th className="text-center border border-dark">Price</th>
            <th className="text-center border border-dark">Upload Date</th>
            <th className="text-center border border-dark">Edit</th>
            <th className="text-center border border-dark">Remove</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((item, i) => (
            <tr key={i}>
              <td className="text-center">{item.id}</td>
              <td className="text-center">{item.title} </td>
              <td className="text-center">{item.price} TL</td>
              <td className="text-center">
                {new Date(Date(item.date)).toISOString().substring(0, 10)}
              </td>
              <td className="text-center">
                <Link to="/edit" className="text-decoration-none text-dark">
                  <img className="update-img" src="/update.svg" alt="" />
                </Link>
              </td>
              <td className="text-center">
                <img
                  className="remove-img"
                  src="/remove.svg"
                  onClick={() => {
                    setShowPopup(true);
                    setSelectedProduct(item);
                  }}
                  alt=""
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />

      {showPopup && (
        <div className="popup">
          <h5 className="text-danger">Are you sure?</h5>
          <p className="text-danger">{selectedProduct.title} will be deleted</p>
          <button
            className="yes"
            onClick={() => {
              remove(selectedProduct);
              setShowPopup(false);
            }}
          >
            Yes
          </button>
          <button className="no" onClick={() => setShowPopup(false)}>
            No
          </button>
        </div>
      )}
    </section>
  );
};

export default Management;
