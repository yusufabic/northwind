import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <p className={styles.logo}>Northwind</p>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/products">Products</Link>
      </div>
      <div>
        <Link to="/product">Product</Link>
      </div>
      <div>
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
};

export default Navbar;
