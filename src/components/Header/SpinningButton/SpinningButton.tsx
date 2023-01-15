import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { NavLink, useLocation } from "react-router-dom";
import "./SpinningButton.scss";

interface SpinningButtonProps {
  className: string;
}
const SpinningButton: React.FC<SpinningButtonProps> = (props) => {
  const { pathname } = useLocation();

  const [isHome, setIsHome] = useState<boolean>(!pathname.includes("home"));
  const [isButtonAnimating, setIsButtonAnimating] = useState<boolean>(false);

  const iconPressHandler = () => {
    setIsButtonAnimating(true);
    setTimeout(() => {
      setIsHome((isHome) => !isHome);
    }, 240);
    setTimeout(() => {
      setIsButtonAnimating(false);
    }, 700);
  };

  const renderedIcon = isHome ? (
    <AiFillHome className="spinning-icon" />
  ) : (
    <BsFillPersonFill className="spinning-icon" />
  );

  return (
    <NavLink onClick={iconPressHandler} to={isHome ? "/home" : "/profile"}>
      <div
        className={`${isButtonAnimating && "animate-l"} icon-c ${
          props.className
        }`}
      >
        {renderedIcon}
      </div>
    </NavLink>
  );
};

export default SpinningButton;
