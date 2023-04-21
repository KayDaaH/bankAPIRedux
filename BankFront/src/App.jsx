import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/Error/ErrorPage";
import Home from "./pages/Home/Home";
import Profil from "./pages/Profil/Profil";
import Signin from "./pages/Signin/Signin";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/user/:userId" element={<Profil />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
