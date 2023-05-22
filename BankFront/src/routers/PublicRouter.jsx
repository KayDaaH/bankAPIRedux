import React from "react";
import ErrorPage from "../pages/public/ErrorPage";
import Home from "../pages/public/Home";
import Login from "../pages/public/Login";
import { Route, Routes } from "react-router-dom";
import Profil from "../pages/private/Profil";

const PublicRouter = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default PublicRouter;
