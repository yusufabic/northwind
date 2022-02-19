import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <Link to="/" className={styles.logo}>
          Northwind
        </Link>
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
        <Link to="/card">Cart</Link>
      </div>
    </nav>
  );
};

export default Navbar;
