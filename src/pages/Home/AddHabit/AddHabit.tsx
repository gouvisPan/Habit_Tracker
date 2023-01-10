import { Form, Formik } from "formik";
import * as Yup from "yup";
import TextField from "../../auth/TextField";
import './AddHabit.scss'

interface FormValues{
  name: string,
  desiredPerc: number
}

const AddHabit = () => {
  const validate = Yup.object({
    name: Yup.string().required("Name is required"),
    desiredPerc: Yup.string().required("Desired Percentage is required").min(0).max(100),
  });
  const initialValues: FormValues = {
    name: "",
    desiredPerc: 100
  }
  const onSubmitHandler = (values: FormValues) => {

  }

  return <Formik
      initialValues={initialValues}
      validationSchema={validate}
      onSubmit={(values) => {
        onSubmitHandler(values);
      }}
    >
      {(formik) => (
        <div className="add-form-container">
          <Form className="add-form-container__content">
            <div className="add-form-container__content--text-fields">
              <span>Habit Name</span>
              <TextField pholder="" name="name" type="text" />
              <span>Consistensy Goal</span>
              <TextField pholder="" name="desiredPerc"  type="text"/>
            </div>
            <button
              type="submit"
              className="add-form-container__content--submit-btn"
            >
              Sign In
            </button>
          </Form>
        </div>
      )}
    </Formik>

};

export default AddHabit;
