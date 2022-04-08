import { object, string, number } from "yup";

const Validation = object({
  title: string().required("Required field!"),
  description: string().required("Required field!"),
  price: number("Price information should consist of numbers!")
    .positive("Price must be a positive number!")
    .required("Required field!"),
  star: number("Star information should consist of numbers!")
    .integer("You must write an integer!")
    .min(0, "Min value 0!")
    .max(5, "Max value 5!")
    .required("Required field!"),
  imageUrl: string()
    .url("Image information must be a valid URL!")
    .required("Required field!"),
  image1: string()
    .url("Image information must be a valid URL!")
    .required("Required field!"),
  image2: string()
    .url("Image information must be a valid URL!")
    .required("Required field!"),
});

export default Validation;
