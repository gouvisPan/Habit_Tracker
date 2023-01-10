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
import { userActions } from "../../store/reducers/userSlice";
import { loginUserWithGoogle } from "../../store/actions/user-actions";
const Auth: React.FC = () => {
  const [whiteCSS, setwhiteCss] = useState("register__left");
  const [colorfulCSS, setColorfulCss] = useState("register__right");
  const [signIn, setSignIn] = useState(true);
  const dispatch = useAppDispatch();

  const { data, isAuthenticated } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && data) {
      navigate("/home");
    }
  }, [isAuthenticated, data]);

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

  const googleLoginHandler = () => {
    dispatch(loginUserWithGoogle());
  };

  const whiteJSX = signIn ? (
    <Fragment>
      <h1>Sign In</h1>
      <LoginForm />
      <h3>Or</h3>
      <div className="register__left--google" onClick={googleLoginHandler}>
        <FcGoogle className="register__left--google__icon" />
        <span>Login with google</span>
      </div>
    </Fragment>
  ) : (
    <Fragment>
      <h1>Create Account</h1>
      <RegisterForm />
      <h3>Or</h3>
      <div className="register__left--google">
        <FcGoogle className="register__left--google__icon" />
        <span>Sign Up with google</span>
      </div>
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
      <h1>GoalTrack User?</h1>
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
