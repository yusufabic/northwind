import axios from "axios";
import { productsURL } from "../constants/endpoints";

export const fetchProductList = async () => {
  const { data } = await axios.get(productsURL);
  return data;
};
