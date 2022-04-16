import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { postProduct } from "../../services";
import "./styles.css";

const AddValidations = Yup.object().shape({
  title: Yup.string().required("Required field!"),
  description: Yup.string().required("Required field!"),
  price: Yup.number("Price information should consist of numbers!")
    .positive("Price must be a positive number!")
    .required("Required field!"),
  star: Yup.number("Star information should consist of numbers!")
    .integer("You must write an integer!")
    .min(0, "Min value 0!")
    .max(5, "Max value 5!")
    .required("Required field!"),
  imageUrl: Yup.string()
    .url("Image information must be a valid URL!")
    .required("Required field!"),
  image1: Yup.string()
    .url("Image information must be a valid URL!")
    .required("Required field!"),
  image2: Yup.string()
    .url("Image information must be a valid URL!")
    .required("Required field!"),
});

const AddProduct = () => {
  return (
    <section id="add" className="page container">
      <Formik
        initialValues={{
          title: "",
          description: "",
          price: "",
          star: "",
          imageUrl: "",
          image1: "",
          image2: "",
        }}
        validationSchema={AddValidations}
        onSubmit={(values) => {
          const newProduct = {
            title: values.title,
            price: values.price,
            description: values.description,
            star: values.star,
            imageUrl: values.imageUrl,
            images: [values.image1, values.image2],
          };
          postProduct(newProduct);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div>Title</div>
            <Field name="title" type="text" className="form-control" />
            <div className="error">
              {errors.title && touched.title ? (
                <div className="text-danger text-sm">{errors.title}</div>
              ) : null}
            </div>
            <div>Description</div>
            <Field name="description" type="text" className="form-control" />
            <div className="error">
              {errors.description && touched.description ? (
                <div className="text-danger w-75">{errors.description}</div>
              ) : null}
            </div>
            <div>Price</div>
            <Field name="price" className="form-control" />
            <div className="error">
              {errors.price && touched.price ? (
                <div className="text-danger w-75">{errors.price}</div>
              ) : null}
            </div>
            <div>Star</div>
            <Field name="star" className="form-control" />
            <div className="error">
              {errors.star && touched.star ? (
                <div className="text-danger w-75">{errors.star}</div>
              ) : null}
            </div>
            <div>Image</div>
            <Field name="imageUrl" className="form-control" />
            <div className="error">
              {errors.imageUrl && touched.imageUrl ? (
                <div className="text-danger w-75">{errors.imageUrl}</div>
              ) : null}
            </div>
            <div>Image 1</div>
            <Field name="image1" className="form-control" />
            <div className="error">
              {errors.image1 && touched.image1 ? (
                <div className="text-danger  w-75">{errors.image1}</div>
              ) : null}
            </div>
            <div>Image 2</div>
            <Field name="image2" className="form-control" />
            <div className="error">
              {errors.image2 && touched.image2 ? (
                <div className="text-danger w-75">{errors.image2}</div>
              ) : null}
            </div>
            <button type="submit" className="btn btn-primary my-2">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};
export default AddProduct;
