import { Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import Spinner from "./Spinner";
import Notification from "../../components/UI/Notification/Notification";
import { useState } from "react";
import { useEffect } from "react";
import { userActions } from "../../store/reducers/userSlice";

const Layout = () => {
  const isAuthLoading = useAppSelector((state) => state.auth.isLoading);
  const isUserLoading = useAppSelector((state) => state.user.isLoading);
  const isHabitLoading = useAppSelector((state) => state.habits.isLoading);

  const error = useAppSelector((state) => state.auth.error);
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

  return (
    <div>
      {(isAuthLoading || isUserLoading || isHabitLoading) && <Spinner />}
      {error && isErrorDisplaying && (
        <Notification message={error} type="error" />
      )}
      <Outlet />
    </div>
  );
};

export default Layout;
