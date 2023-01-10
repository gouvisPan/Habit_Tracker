import { Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import Spinner from "./Spinner";
import Notification from "../../components/UI/Notification/Notification";
import { useState } from "react";
import { useEffect } from "react";
import { userActions } from "../../store/reducers/userSlice";

const Layout = () => {
  const isLoading = useAppSelector((state) => state.user.isLoading);
  const error = useAppSelector((state) => state.user.error);
  const [isErrorDisplaying, setIsErrorDisplaying] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (error) {
      setIsErrorDisplaying(true);
      const timer = setTimeout(() => {
        setIsErrorDisplaying(false);
        dispatch(userActions.clearErrorState());
      }, 4000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [error, dispatch]);

  console.log(error);
  console.log(isErrorDisplaying);

  return (
    <div>
      {isLoading && <Spinner />}
      {error && isErrorDisplaying && (
        <Notification message={error} type="error" />
      )}
      {/* <Notification message={error} type="error" /> */}
      <Outlet />
    </div>
  );
};

export default Layout;
