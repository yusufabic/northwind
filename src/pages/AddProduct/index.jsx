import { useFormik } from "formik";
import { postProduct } from "../../services";
import validationSchema from "./validation";
import "./styles.css";

const AddProduct = () => {
  const { handleChange, handleSubmit, handleBlur, errors, touched } = useFormik(
    {
      initialValues: {
        title: "",
        description: "",
        price: "",
        star: "",
        imageUrl: "",
        image1: "",
        image2: "",
      },
      onSubmit: (values) => {
        const newProduct = {
          title: values.title,
          price: values.price,
          description: values.description,
          star: values.star,
          imageUrl: values.imageUrl,
          images: [values.image1, values.image2],
        };

        postProduct(newProduct).then((res) => {});
      },
      validationSchema,
    }
  );

  return (
    <div id="add" className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            name="title"
            type="text"
            className="form-control"
            placeholder="Title"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div className="error">
            {errors.title && touched.title && (
              <div className="text-danger  w-75"> {errors.title} </div>
            )}
          </div>
        </div>

        <div className="form-group">
          <label>Description</label>
          <input
            name="description"
            type="text"
            className="form-control"
            placeholder="Description"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div className="error">
            {errors.description && touched.description && (
              <div className="text-danger   w-75"> {errors.description} </div>
            )}
          </div>
        </div>

        <div className="form-group">
          <label>Price</label>
          <input
            name="price"
            className="form-control"
            placeholder="Price"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div className="error">
            {errors.price && touched.price && (
              <div className="text-danger w-75"> {errors.price} </div>
            )}
          </div>
        </div>

        <div className="form-group">
          <label>Star</label>
          <input
            name="star"
            className="form-control"
            placeholder="Star"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div className="error">
            {errors.star && touched.star && (
              <div className="text-danger w-75"> {errors.star} </div>
            )}
          </div>
        </div>

        <div className="form-group">
          <label>Image</label>
          <input
            name="imageUrl"
            type="text"
            className="form-control"
            placeholder="Image Url"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div className="error">
            {errors.imageUrl && touched.imageUrl && (
              <div className="text-danger w-75"> {errors.imageUrl} </div>
            )}
          </div>
        </div>

        <div className="form-group">
          <label>Images</label>
          <input
            name="image1"
            type="text"
            className="form-control"
            placeholder="Image1"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div className="error">
            {errors.image1 && touched.image1 && (
              <div className="text-danger w-75"> {errors.image1} </div>
            )}
          </div>
          <br />
        </div>
        <div className="form-group">
          <input
            name="image2"
            type="text"
            className="form-control"
            placeholder="Image2"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div className="error">
            {errors.image2 && touched.image2 && (
              <div className="text-danger w-75"> {errors.image2} </div>
            )}
          </div>
        </div>
        <div>
          <button type="submit" className="btn btn-primary my-2">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
