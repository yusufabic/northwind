import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./styles.css";

const Navbar = () => {
  const { cart } = useSelector((state) => state.cart);
  const [totalItem, setTotalItem] = useState(0);

  useEffect(() => {
    setTotalItem(cart.reduce((total, item) => total + item.quantity, 0));
  }, [cart]);

  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="container-fluid">
        <div className="navbar-brand">Northwind</div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link to="/management">Management</Link>
            </li>
            <li className="nav-item">
              <Link to="/cart">Cart/{totalItem} </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
