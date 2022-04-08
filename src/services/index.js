import axios from "axios";
import { categoriesURL, productsURL } from "../constants/endpoints";

export const fetchProductList = () => axios.get(productsURL);

export const fetchProduct = (id) => axios.get(`${productsURL}/${id}`);

export const fetchCategories = () => axios.get(categoriesURL);

export const deleteProduct = (id) => axios.delete(`${productsURL}/${id}`);

export const postProduct = (newProduct) => axios.post(productsURL, newProduct);
