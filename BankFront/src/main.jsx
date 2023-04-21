import React from "react";
import ReactDOM from "react-dom/client";

// import {
//   createBrowserRouter,
//   RouterProvider,
//   createRoutesFromElements,
//   Route,
// } from "react-router-dom";
import "./styles/css/main.css";
// import router from "./router/router";
import App from "./App";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/register",
//     element: <Register />,
//   },
//   {
//     path: "/user/:userId",
//     element: <Profil />,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
