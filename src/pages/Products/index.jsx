import React from "react";
import { useQuery } from "react-query";
import { fetchProductList } from "../../services";
import Card from "../../components/Card";
import styles from "./styles.module.css";

const Products = () => {
  const { isLoading, error, data } = useQuery("products", fetchProductList);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className={styles.cardContainer}>
      {data.map((item, key) => (
        <Card key={key} item={item} />
      ))}
    </div>
  );
};

export default Products;
