import { Formik, Form, Field } from "formik";
import { signUp } from "../../config/firebase";

const SignUp = () => {
  return (
    <div className="container m-5">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          signUp(values.email, values.password)
            .then((response) => {
              console.log("YA ~ response", response);
            })
            .catch((e) => {
              console.log(e);
            });
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <h2 className="my-5 fw-bold">Sign Up</h2>

            <div>Email</div>
            <Field name="email" type="email" className="form-control" />
            <div className="error"></div>

            <div className="mt-2">Password</div>
            <Field name="password" type="password" className="form-control" />
            <div className="error"></div>

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
