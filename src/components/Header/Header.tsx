import SpinningButton from "./SpinningButton/SpinningButton";
import "./Header.scss";
import { BiLogOutCircle } from "react-icons/bi";
import { useAppDispatch } from "../../hooks/hooks";
import { logoutUser } from "../../store/actions/auth-actions";
import { useLocation } from "react-router";

const Header = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const colorCSS = pathname.includes("home") ? "white" : "";
  const signOutClickHandler = () => {
    dispatch(logoutUser());
  };

  return (
    <div className="header-container">
      <SpinningButton className={colorCSS} />
      <BiLogOutCircle
        className={`header-container__logout ${colorCSS}`}
        onClick={signOutClickHandler}
      />
    </div>
  );
};

export default Header;
