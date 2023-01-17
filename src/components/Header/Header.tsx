import SpinningButton from "./SpinningButton/SpinningButton";
import "./Header.scss";
import { BiLogOutCircle } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { logoutUser } from "../../store/actions/auth-actions";
import { useLocation } from "react-router";

const Header = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const colorCSS = !pathname.includes("profile") ? "white" : "";
  const habits = useAppSelector((state) => state.habits.habitList);
  const showWeek = habits && habits.length !== 0;
  const styles = {
    transform: `translate(0px, 10px)`,
  };

  const signOutClickHandler = () => {
    dispatch(logoutUser());
  };

  return (
    <div className="header-container" style={showWeek ? {} : styles}>
      <SpinningButton className={colorCSS} />
      <BiLogOutCircle
        className={`header-container__logout ${colorCSS}`}
        onClick={signOutClickHandler}
      />
    </div>
  );
};

export default Header;
