import React from "react";
import { useAppSelector } from "../../hooks/hooks";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";

const RequireAuth = () => {
  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);
  const location = useLocation();

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
