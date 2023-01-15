import React from "react";
import { useAppSelector } from "../../hooks/hooks";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import useWindowSize from "../../hooks/useWindowSize";

const RequireAuth = () => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const location = useLocation();
  const [height, width] = useWindowSize();

  return isAuthenticated ? (
    <div>
      {width > 700 && <Header />}
      <Outlet />
    </div>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
