import React from "react";
import { useQuery } from "react-query";
import Card from "../../components/card/index2";
import { fetchProductlist } from "../../api";
import styles from "./styles.module.css";
const Products = () => {
  const { isLoading, error, data } = useQuery("repoData", fetchProductlist);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className={styles.products}>
      <div className={styles.cardContainer}>
        {data.map((item, key) => (
          <Card key={key} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
