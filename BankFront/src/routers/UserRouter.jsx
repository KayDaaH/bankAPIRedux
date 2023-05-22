import React from "react";
import ErrorPage from "../pages/public/ErrorPage";
import Home from "../pages/public/Home";
import { Route, Routes } from "react-router-dom";
import Profil from "../pages/private/Profil";

const UserRouter = () => {
  return (
    <Routes>
      <Route path=":userId" element={<Profil />} />
    </Routes>
  );
};

export default UserRouter;
