import React from "react";
import ErrorPage from "../pages/public/Error/ErrorPage";
import Home from "../pages/public/Home/Home";
import Signin from "../pages/public/Signin/Signin";
import { Route, Routes } from "react-router-dom";
import Profil from "../pages/private/Profil/Profil";

const PublicRouter = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default PublicRouter;
