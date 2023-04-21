import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState("test");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
  };

  return (
    <div>
      <nav className="main-nav">
        {/* <a className="main-nav-logo" href="./index.html"> */}
        <Link to="/">
          <img
            className="main-nav-logo-image"
            src="../src/styles/img/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
        </Link>

        <h1 className="sr-only">Argent Bank</h1>

        <div>
          <Link to="/login">Sign In</Link>
          {/* <a className="main-nav-item" href="./sign-in.html">
            <i className="fa fa-user-circle"></i>
            Sign In
          </a> */}
        </div>
      </nav>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>

          <form onSubmit={onSubmit}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" value={login} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className="input-remember">
              <label htmlFor="remember-me">Remember me</label>
              <input type="checkbox" id="remember-me" />
            </div>
            {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
            {/* <a href="./user.html" className="sign-in-button">
              Sign In
            </a> */}

            <Link to="/user/2">Sign In</Link>
            <button className="sign-in-button">Sign In</button>

            {/* <!-- SHOULD BE THE BUTTON BELOW -->
        <!-- <button className="sign-in-button">Sign In</button> -->
        <!--  --> */}
          </form>
        </section>
      </main>
      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </div>
  );
};

export default Login;
