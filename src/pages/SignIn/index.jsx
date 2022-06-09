import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";
import { signIn } from "../../config/firebase";

const SigInValidations = Yup.object().shape({
  email: Yup.string().required("Required field!"),
  password: Yup.string().required("Required field!").min(6, "Min value 6!"),
});

const SignIn = ({ setIsLoggedIn }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();
  return (
    <div className="container m-5">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SigInValidations}
        onSubmit={(values) => {
          signIn(values.email, values.password)
            .then(() => {
              setIsLoggedIn(true);
              history.push("/management");
            })
            .catch((e) => {
              // TODO: Hata mesajının ekranda gözükmesi sağlanacak
              setErrorMessage(e.message);
              console.log("YA ~ e.message", e.message);
            });
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <h2 className="my-5 fw-bold">Sign In</h2>

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
            <div className="mt-5 text-danger">{errorMessage}</div>

            <button type="submit" className="btn btn-primary mt-4">
              Sign In
            </button>

            <div className="mt-2">
              <p>
                <Link to="/signup">
                  <b> Click </b>
                </Link>
                to register.
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignIn;
