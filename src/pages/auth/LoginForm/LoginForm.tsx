import { Form, Formik } from "formik";

import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { loginUser } from "../../../store/actions/user-actions";
import "../RegisterForm/RegisterForm.scss";
import TextField from "../TextField";

const LoginForm = () => {
  const dispatch = useAppDispatch();

  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const onSubmit = (email: string, password: string) => {
    dispatch(
      loginUser({
        email,
        password,
      })
    );
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        onSubmit(values.email, values.password);
      }}
    >
      {(formik) => (
        <div className="form-container">
          <Form className="form-container__content">
            <div className="form-container__content--text-fields">
              <TextField pholder="e-mail" name="email" type="text" />
              <TextField pholder="password" type="password" name="password" />
            </div>
            <button
              type="submit"
              className="form-container__content--submit-btn"
            >
              Sign In
            </button>
          </Form>

          {/* {successState && <Success message="E-mail sent!" />}
              {errorState && <Error message="Something went wrong" />} */}
        </div>
      )}
    </Formik>
  );
};

export default LoginForm;
