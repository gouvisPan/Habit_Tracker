import React, { Fragment } from "react";
import RegisterForm from "./RegisterForm/RegisterForm";
import "./Auth.scss";
import { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import Shapes from "../../components/UI/Shapes/Shapes";
import LoginForm from "./LoginForm/LoginForm";
import { useAppSelector } from "../../hooks/hooks";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/hooks";

const Auth: React.FC = () => {
  const [whiteCSS, setwhiteCss] = useState("register__left");
  const [colorfulCSS, setColorfulCss] = useState("register__right");
  const [signIn, setSignIn] = useState(true);

  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  const signInHandler = () => {
    setwhiteCss(`register__left unmountWR`);
    setColorfulCss(`register__right unmountCL`);

    setTimeout(() => {
      setSignIn(false);
    }, 500);
  };

  const signUpHandler = () => {
    setwhiteCss(`register__left unmountWL`);
    setColorfulCss(`register__right unmountCR`);

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
      <Shapes />
      <h1>Not a user?</h1>
      <h5 className="anim">
        Give us some extra information and create your account.
      </h5>
      <button onClick={signInHandler}>Sign Up</button>
    </Fragment>
  ) : (
    <Fragment>
      <Shapes />
      <h1>HabitFormer User?</h1>
      <h5 className="anim">
        Welcome back! Login to your account and get back to your growth journey
        right away.
      </h5>
      <button onClick={signUpHandler}>Sign In</button>
    </Fragment>
  );

  return (
    <div className="register">
      <div className={whiteCSS}>{whiteJSX}</div>
      <div className={colorfulCSS}>{colorJSX}</div>
    </div>
  );
};

export default Auth;
