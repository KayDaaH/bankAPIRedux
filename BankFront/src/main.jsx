import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import Profil from "./pages/Profil/Profil";
import Register from "./pages/Register/Register";
import ErrorPage from "./pages/Error/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/css/main.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/user/:userId",
    element: <Profil />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
