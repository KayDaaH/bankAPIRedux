import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthGuard = ({ children }) => {
  const isLogged = useSelector((state) => state.user.token);
  if (!isLogged) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default AuthGuard;
