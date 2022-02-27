import axios from "axios";
import { productsURL } from "../constants/endpoints";

export const fetchProductList = () => axios.get(productsURL);

export const fetchProduct = (id) => axios.get(`${productsURL}/${id}`);
