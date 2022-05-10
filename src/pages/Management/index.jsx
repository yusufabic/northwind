import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setEditProduct } from "../../store/edit";
import { Link, useHistory } from "react-router-dom";
import { fetchProductList, deleteProduct } from "../../services";
import "./styles.css";

const Management = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [filterText, setFilterText] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const onClick = (editProduct) => {
    dispatch(setEditProduct(editProduct));
    history.push("/edit");
  };

  useEffect(() => {
    fetchProductList().then((result) => {
      setProducts(result.data);
      setFilteredProducts(result.data);
      console.log("YA ~ result.data", result.data);
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
    <section id="management" className="page">
      <div className="d-flex justify-content-between align-items-baseline">
        <div className="w-75">
          <div className="input-group mb-3 search">
            <span className="input-group-text my-3 bg-primary text-white">
              Search Product
            </span>
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
        </div>
        <div className="w-25">
          <div className="add-btn">
            <Link to="/add" type="button" className="btn btn-primary">
              Add Product
            </Link>
          </div>
        </div>
      </div>

      <br />
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th className="text-center  border  bg-primary text-white">
              Product İd
            </th>
            <th className="text-center border   bg-primary text-white">
              Product Title
            </th>
            <th className="text-center border bg-primary text-white">Price</th>
            <th className="text-center border bg-primary text-white">
              Upload Date
            </th>
            <th className="text-center border bg-primary text-white">Edit</th>
            <th className="text-center border bg-primary text-white">Remove</th>
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
                <img
                  className="update-img"
                  src="/update.svg"
                  alt=""
                  onClick={() => onClick(item)}
                />
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
        <div className="popup border border-white">
          <h5 className="text-dark">Are you sure?</h5>
          <p className="text-dark">{selectedProduct.title} will be deleted</p>
          <button
            className="yes bg-primary text-white border border-white"
            onClick={() => {
              remove(selectedProduct);
              setShowPopup(false);
            }}
          >
            Yes
          </button>
          <button
            className="no bg-primary text-white border border-white"
            onClick={() => setShowPopup(false)}
          >
            No
          </button>
        </div>
      )}
    </section>
  );
};

export default Management;
