import React from "react";
import { useAppSelector } from "../../hooks/hooks";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useEffect } from "react";

const RequireAuth = () => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const location = useLocation();

  // useEffect(() => {
  //   console.log(isAuthenticated);
  // }, [isAuthenticated]);

  return isAuthenticated ? (
    <div>
      <Header />
      <Outlet />
    </div>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
