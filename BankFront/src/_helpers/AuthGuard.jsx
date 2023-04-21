import React from "react";
import { Navigate } from "react-router-dom";

const AuthGuard = ({ children }) => {
  let logged = false;

  if (!logged) {
    return <Navigate to="/signin" />;
  }
  return children;
};

export default AuthGuard;
