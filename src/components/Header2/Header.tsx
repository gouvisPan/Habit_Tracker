import React from "react";
import Navbar from "./Navbar";
import logo from "./../../assets/reactLogo.png";
import { NavLink, useLocation } from "react-router-dom";
import useScroll from "../../hooks/useScroll";

const Header = () => {
  const scrollPosition = useScroll();

  return (
    <div className="header-container">
      <NavLink to="home">
        <img src={logo} alt="logo"></img>
      </NavLink>
      <Navbar scrolled={scrollPosition > 12} />
    </div>
  );
};

export default Header;
