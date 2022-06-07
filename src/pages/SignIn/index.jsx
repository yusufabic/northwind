import { Formik, Form, Field } from "formik";
import { Link, useHistory } from "react-router-dom";
import { signIn } from "../../config/firebase";

const SignIn = ({ setIsLoggedIn }) => {
  const history = useHistory();
  return (
    <div className="container m-5">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          signIn(values.email, values.password)
            .then(() => {
              setIsLoggedIn(true);
              history.push("/management");
            })
            .catch((e) => {
              // TODO: Hata mesajının ekranda gözükmesi sağlanacak
              console.log("e", e.message);
            });
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <h2 className="my-5 fw-bold">Sign In</h2>

            <div>Email</div>
            <Field name="email" type="email" className="form-control" />
            <div className="error"></div>

            <div className="mt-2">Password</div>
            <Field name="password" type="password" className="form-control" />
            <div className="error"></div>

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
