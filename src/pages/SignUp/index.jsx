import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { signUp } from "../../config/firebase";

const SignUpValidations = Yup.object().shape({
  email: Yup.string()
    .required("Required field!")
    .email("Please enter an email"),
  password: Yup.string().required("Required field!").min(6, "Min value 6!"),
});
const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <div className="container m-5">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignUpValidations}
        onSubmit={(values) => {
          signUp(values.email, values.password)
            .then()
            .catch((e) => {
              setErrorMessage(e.message);
            });
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <h2 className="my-5 fw-bold">Sign Up</h2>

            {errorMessage && (
              <div className="my-5 alert alert-danger text-dark">
                {errorMessage}
              </div>
            )}

            <div>Email</div>
            <Field name="email" type="email" className="form-control" />
            <div className="error">
              {errors.email && touched.email ? (
                <div className="text-danger text-sm">{errors.email}</div>
              ) : null}
            </div>

            <div className="mt-2">Password</div>
            <Field name="password" type="password" className="form-control" />
            <div className="error">
              {errors.password && touched.password ? (
                <div className="text-danger text-sm">{errors.password}</div>
              ) : null}
            </div>

            <button type="submit" className="btn btn-primary mt-4">
              Sign Up
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
