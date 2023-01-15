import React, { Fragment } from "react";
import RegisterForm from "./RegisterForm/RegisterForm";
import "./Auth.scss";
import { useState, useEffect } from "react";
import Shapes from "../../components/UI/Shapes/Shapes";
import LoginForm from "./LoginForm/LoginForm";
import { useAppSelector } from "../../hooks/hooks";
import { useNavigate } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize";

const Auth: React.FC = () => {
  const [whiteCSS, setwhiteCss] = useState("auth__left");
  const [colorfulCSS, setColorfulCss] = useState("auth__right");
  const [signIn, setSignIn] = useState(true);
  const [height, width] = useWindowSize();
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  const signInHandler = () => {
    setwhiteCss(`auth__left unmountWR`);
    setColorfulCss(`auth__right unmountCL`);

    setTimeout(() => {
      setSignIn(false);
    }, 500);
  };

  const signUpHandler = () => {
    setwhiteCss(`auth__left unmountWL`);
    setColorfulCss(`auth__right unmountCR`);

    setTimeout(() => {
      setSignIn(true);
    }, 500);
  };

  const whiteJSX = signIn ? (
    <Fragment>
      <h1>Sign In</h1>
      <LoginForm />
    </Fragment>
  ) : (
    <Fragment>
      <h1>Create Account</h1>
      <RegisterForm />
    </Fragment>
  );

  const colorJSX = signIn ? (
    <Fragment>
      {width > 1300 && <Shapes />}
      <h1>Not a user?</h1>
      <h5 className="anim">
        Give us some extra information and create your account.
      </h5>
      <button onClick={signInHandler}>Sign Up</button>
    </Fragment>
  ) : (
    <Fragment>
      {width > 1300 && <Shapes />}
      <h1>HabitFormer User?</h1>
      <h5 className="anim">
        Welcome back! Login to your account and get back to your growth journey
        right away.
      </h5>
      <button onClick={signUpHandler}>Sign In</button>
    </Fragment>
  );

  return (
    <div className="auth">
      <div className={whiteCSS}>{whiteJSX}</div>
      <div className={colorfulCSS}>{colorJSX}</div>
    </div>
  );
};

export default Auth;
