import React from "react";
import ErrorPage from "../pages/public/Error/ErrorPage";
import Home from "../pages/public/Home/Home";
import { Route, Routes } from "react-router-dom";
import Profil from "../pages/private/Profil/Profil";

const UserRouter = () => {
  return (
    <Routes>
      <Route path=":userId" element={<Profil />} />
    </Routes>
  );
};

export default UserRouter;
