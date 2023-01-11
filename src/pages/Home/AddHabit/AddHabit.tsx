import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useAppDispatch } from "../../../hooks/hooks";
import { Habit } from "../../../model/Habit";
import { habitActions } from "../../../store/reducers/habitSlice";
import { userActions } from "../../../store/reducers/userSlice";
import TextField from "../../auth/TextField";
import "./AddHabit.scss";

interface FormValues {
  name: string;
  desiredPerc: number;
}

const AddHabit = () => {
  const dispatch = useAppDispatch();

  const validate = Yup.object({
    name: Yup.string().required("Name is required"),
    desiredPerc: Yup.string().min(0).max(100),
  });
  const initialValues: FormValues = {
    name: "",
    desiredPerc: 100,
  };
  const onSubmitHandler = (values: FormValues) => {
    const tmpHabit: Habit = {
      id: Math.random().toString(),
      name: values.name,
      desiredPerc: values.desiredPerc,
      totalDays: 0,
      totalChecks: 0,
      weeklyState: [false, false, false, false, false, false, false],
    };
    console.log(tmpHabit);
    dispatch(habitActions.addHabit(tmpHabit));
  };
  const clear = () =>{
    dispatch(habitActions.clearHabits());
  }
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
              <TextField pholder="" name="desiredPerc" type="text" />
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
