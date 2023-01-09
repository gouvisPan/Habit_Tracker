import React from "react";
import { ErrorMessage, useField } from "formik";
import "./RegisterForm/RegisterForm.scss";

const TextField: React.FC<{ name: string; pholder: string; type: string }> = (
  props
) => {
  const [field] = useField(props);

  return (
    <div className="form-container__content--text-field">
      <input {...field} {...props} placeholder={props.pholder} />
      <ErrorMessage
        component="div"
        name={field.name}
        className="form-container__content--text-field__error"
      />
    </div>
  );
};

export default TextField;
