import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicRouter from "./routers/PublicRouter";
import UserRouter from "./routers/UserRouter";
import AuthGuard from "./helpers/AuthGuard";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<PublicRouter />} />
          <Route
            path="/profile/*"
            element={
              <AuthGuard>
                <UserRouter />
              </AuthGuard>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
