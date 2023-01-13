import { useAppSelector } from "../../../hooks/hooks";
import "./BasicInfo.scss";
import { useAppDispatch } from "../../../hooks/hooks";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import TextField from "../../../components/UI/TextField";

interface FormValues {
  name: string;
}

const BasicInfo = () => {
  const { data: user, token } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  const validate = Yup.object({
    name: Yup.string().max(20).required("Name is required"),
    slogan: Yup.string().min(10),
    bio: Yup.string().min(15),
  });

  const onSubmit = (name: string) => {};

  return (
    <Formik
      initialValues={{
        name: user!.name,
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        onSubmit(values.name);
      }}
    >
      {(formik) => (
        <Form className="basic-info-container">
          <h3>Basic Info</h3>
          <TextField
            name="name"
            pholder={user!.name}
            isLarge={false}
            className="basic-info-container__input"
          />
          <TextField
            name="slogan"
            isLarge={false}
            pholder={false || "Add your motivation quote here!"}
            className="basic-info-container__input"
          />
          <button type="submit">Save</button>
        </Form>
      )}
    </Formik>
  );
};

export default BasicInfo;
