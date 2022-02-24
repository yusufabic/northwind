import React from "react";
import { useQuery } from "react-query";
import { fetchProductList } from "../../services";
import Card from "../../components/Card";
const Products = () => {
  const { isLoading, error, data } = useQuery("products", fetchProductList);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <div className="row row-cols-4">
        {data.map((item, key) => (
          <div className="col">
            <Card key={key} item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
