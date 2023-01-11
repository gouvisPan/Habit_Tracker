import SpinningButton from "./SpinningButton/SpinningButton";
import "./Header.scss";
import { BiLogOutCircle } from "react-icons/bi";
import { useAppDispatch } from "../../hooks/hooks";
import { logoutUser } from "../../store/actions/user-actions";

const Header = () => {
  const dispatch = useAppDispatch();

  const signOutClickHandler = () => {
    dispatch(logoutUser());
  };

  return (
    <div className="header-container">
      <SpinningButton />
      <BiLogOutCircle
        className="header-container__logout"
        onClick={signOutClickHandler}
      />
    </div>
  );
};

export default Header;
