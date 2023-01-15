import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useAppDispatch } from "../../../hooks/hooks";
import { AddFormValues } from "../../../model/interfaces/AddFormValues";
import { addHabit } from "../../../store/actions/habit-actions";
import TextField from "../../auth/TextField";
import "./AddHabit.scss";

const AddHabit = () => {
  const dispatch = useAppDispatch();

  const validate = Yup.object({
    name: Yup.string()
      .required("Name is required, please insert your name!")
      .max(20, "Describe your hobie in less than 20 characters!"),
    desiredPerc: Yup.string().min(0).max(100),
  });
  const initialValues: AddFormValues = {
    name: "",
    desiredPerc: 100,
  };

  const onSubmitHandler = (values: AddFormValues) => {
    dispatch(addHabit(values));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validate}
      onSubmit={(values, { resetForm }) => {
        onSubmitHandler(values);
        resetForm();
      }}
    >
      {(formik) => (
        <div className="add-form-container">
          <Form className="add-form-container__content">
            <h2>Form a new Habit!</h2>
            <div className="add-form-container__content--text-fields">
              <span>Habit Name</span>
              <TextField pholder="" name="name" type="text" />
              <span>Consistensy Goal</span>
              <TextField pholder="" name="desiredPerc" type="number" />
            </div>
            <button
              type="submit"
              className="add-form-container__content--submit-btn"
            >
              Add
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default AddHabit;
