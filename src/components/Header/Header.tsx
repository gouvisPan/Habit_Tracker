import React from "react";
import SpinningButton from "./SpinningButton/SpinningButton";
import "./Header.scss";
import { BiLogOutCircle } from "react-icons/bi";
import { useAppDispatch } from "../../hooks/hooks";
import { logoutUser } from "../../store/actions/user-actions";
import logo from "../../assets/logo-no-bg.png";

const Header = () => {
  const dispatch = useAppDispatch();

  const signOutClickHandler = () => {
    dispatch(logoutUser());
  };

  return (
    <div className="header-container">
      <img src={logo} alt="GoalTrack logo" className="header-container__logo" />
      <SpinningButton />
      <BiLogOutCircle
        className="header-container__logout"
        onClick={signOutClickHandler}
      />
    </div>
  );
};

export default Header;
