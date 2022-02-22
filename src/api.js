import axios from "axios";

export const fetchProductlist = async () => {
  const { data } = await axios.get(
    "https://northwindapi.herokuapp.com/products"
  );

  return data;
};
