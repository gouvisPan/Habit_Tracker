import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaSignOutAlt } from "react-icons/fa";

import "./Header.scss";
import { logoutUser } from "../../store/actions/user-actions";
import { useAppDispatch } from "../../hooks/hooks";
import { useLocation } from "react-router-dom";

interface NavProps {
  scrolled: Boolean;
}

const Navbar: React.FC<NavProps> = (props) => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const colorCss =
    !pathname.includes("learning/") &&
    !pathname.includes("teaching/") &&
    props.scrolled
      ? "colored"
      : "colored";
  // const colorCss = props.scrolled ? "transparent" : "colored";

  const handleSignOut = () => {
    dispatch(logoutUser());
  };

  return (
    <nav className={`desktop-nav ${colorCss}`}>
      <NavLink
        to="/learning"
        className={(navData) =>
          navData.isActive ? "navActiv" : `desktop-nav__a ${colorCss}__a`
        }
      >
        <span>My Mentors</span>
      </NavLink>
      <NavLink
        to="/teaching"
        className={(navData) =>
          navData.isActive ? "navActiv" : `desktop-nav__a ${colorCss}__a`
        }
      >
        <span>My Mentees</span>
      </NavLink>
      <NavLink
        to="/profile"
        className={(navData) =>
          navData.isActive ? "navActiv" : `desktop-nav__a ${colorCss}__a`
        }
      >
        <CgProfile className="desktop-nav__profile-icon" />
      </NavLink>
      <FaSignOutAlt onClick={handleSignOut} className={`${colorCss}__logout`} />
    </nav>
  );
};

export default Navbar;
