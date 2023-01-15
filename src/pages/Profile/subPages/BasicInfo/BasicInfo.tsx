import { useAppSelector } from "../../../../hooks/hooks";
import "./BasicInfo.scss";
import { useAppDispatch } from "../../../../hooks/hooks";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import TextField from "../../../../components/UI/TextField";
import User from "../../../../model/User";
import { createUser } from "../../../../store/actions/user-actions";
import avatar1 from "../../../../assets/avatars/male_avatar_1.svg";
import avatar2 from "../../../../assets/avatars/female_avatar_1.svg";
import avatar3 from "../../../../assets/avatars/male_avatar_2.svg";
import avatar4 from "../../../../assets/avatars/female_avatar_2.svg";
import { useState } from "react";
import useWindowSize from "../../../../hooks/useWindowSize";

const BasicInfo = () => {
  const { data: user } = useAppSelector((state) => state.user);
  const [selectedAvatar, setSelectedAvatar] = useState<number>(user!.avatar);
  const [height, width] = useWindowSize();

  const dispatch = useAppDispatch();

  const validate = Yup.object({
    name: Yup.string().max(24, "Name must be under 24 characters"),
    slogan: Yup.string(),
  });

  const onSubmit = (name: string, motivation: string) => {
    const newUser: User = { ...user! };
    newUser.name = name;
    newUser.motivation = motivation;
    newUser.avatar = selectedAvatar;

    console.log(newUser);
    dispatch(createUser(newUser));
  };

  const handleAvatarClick = (num: number) => {
    setSelectedAvatar(num);
  };

  return (
    <Formik
      initialValues={{
        name: user!.name,
        motivation: user!.motivation,
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        onSubmit(values.name, values.motivation);
      }}
    >
      {(formik) => (
        <Form className="basic-info-container">
          {width > 700 && <h3>Basic Info</h3>}
          <div className="basic-info-container__images">
            <img
              src={avatar1}
              onClick={() => handleAvatarClick(1)}
              className={`${selectedAvatar === 1 ? "activated" : ""}`}
              alt="avatar 1"
            />
            <img
              src={avatar2}
              onClick={() => handleAvatarClick(2)}
              className={`${selectedAvatar === 2 ? "activated" : ""}`}
              alt="avatar 2"
            />
            <img
              src={avatar3}
              onClick={() => handleAvatarClick(3)}
              className={`${selectedAvatar === 3 ? "activated" : ""}`}
              alt="avatar 3"
            />
            <img
              src={avatar4}
              onClick={() => handleAvatarClick(4)}
              className={`${selectedAvatar === 4 ? "activated" : ""}`}
              alt="avatar 4"
            />
          </div>
          <TextField
            name="name"
            pholder={user!.name || "Insert your name"}
            isLarge={false}
            className="basic-info-container__input"
          />
          <TextField
            name="motivation"
            isLarge={false}
            pholder={user!.motivation || "Insert your motivation quote here!"}
            className="basic-info-container__input"
          />
          <button type="submit">Save</button>
        </Form>
      )}
    </Formik>
  );
};

export default BasicInfo;
