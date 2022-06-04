import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  return (
    <nav className="navbar p-0 navbar-expand nav-color">
      <div className="container-fluid">
        <div className="navbar-brand">
          <Link to="/" className="nav-link">
            <img src="/logo.png" alt="Northwind" />
          </Link>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav d-flex">
            <li className="nav-item pe-3">
              <Link to="/products" className="nav-link">
                Products
              </Link>
            </li>
            <li className="nav-item pe-3">
              <Link to="/management" className="nav-link">
                Management
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link">
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
