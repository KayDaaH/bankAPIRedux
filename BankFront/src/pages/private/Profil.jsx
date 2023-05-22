import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import EditName from "../../components/EditName/EditName";
import { editUserData, setUserData } from "../../features/userSlice";
import { resetUserData, userEditDb } from "../../services/user.service";

const Profil = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.user);
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [editionIsOpen, setEditionIsOpen] = useState(false);

  useEffect(() => {
    setUserFirstName(selector.firstName);
    setUserLastName(selector.lastName);
    console.log("useEffect");
  }, [editionIsOpen]);

  const logout = () => {
    const resetData = resetUserData();
    dispatch(setUserData(resetData));
    navigate("/");
  };

  const editUserName = () => {
    setEditionIsOpen(true);
  };

  const handleFormSubmit = (credentials) => {
    setEditionIsOpen(false);
    dispatch(editUserData(credentials));
    userEditDb(credentials, selector.token);
  };

  const handleFormCancel = () => {
    setEditionIsOpen(false);
  };

  return (
    <div className="test">
      <nav className="main-nav">
        <Link to="/">
          <img
            className="main-nav-logo-image"
            src="../src/styles/img/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
        </Link>

        <h1 className="sr-only">Argent Bank</h1>
        <div>
          <button className="main-nav-username">{userFirstName}</button>
          <button onClick={logout} className="main-nav-item" to="/">
            Sign Out
          </button>
        </div>
      </nav>
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {`${userFirstName} ${userLastName} `}!
          </h1>
          {editionIsOpen ? (
            <EditName
              firstName={userFirstName}
              lastName={userLastName}
              onSubmit={handleFormSubmit}
              onCancel={handleFormCancel}
            />
          ) : (
            <button onClick={editUserName} className="edit-button">
              Edit Name
            </button>
          )}
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </div>
  );
};

export default Profil;
