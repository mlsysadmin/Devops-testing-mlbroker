import React, { useState } from "react";
import "../styles/modals/RegistrationModal.css";
import logo from "../assets/red-ml-logo.png";
import google from "../assets/icons/logreg/google-icon.png";
import apple from "../assets/icons/logreg/apple-icon.png";
import upload from "../assets/icons/upload/document-upload.png";
import flag from "../assets/icons/Pflag.png";
import vector from "../assets/Vector.png";

const RegistrationModal = () => {
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);

  const handleRegistrationModalClose = () => {
    setShowRegistrationModal(false);
  };

  return (
    <div className="App">
      <button onClick={() => setShowRegistrationModal(true)}>
        Registration
      </button>
      {showRegistrationModal && (
        <div className="register-modal">
          <div className="register-modal-content">
            <span
              className="register-close-button"
              onClick={handleRegistrationModalClose}
            >
              &times;
            </span>

            <div className="register-logo">
              <img className="victor" src={logo} alt="M Lhuillier Logo" />
            </div>
            <h1 className="register-header-reg">
              Welcome to M Lhuillier Brokerage
            </h1>
            <div className="register-input-group">
              <div className="mobilenum">
                <img className="flag-icon" src={flag} alt="flag" />
               
                <input className="mobile-input" type="number" placeholder="Mobile Number" />
              </div>
            </div>
            <div className="register-input-group-name">
              <input className="inputs" type="text" placeholder="First Name" />
              <input className="inputs" type="text" placeholder="Middle Name" />
            </div>
            <div className="register-input-group-name1">
              <input className="inputs" type="text" placeholder="Last Name" />
              <input className="inputs" type="text" placeholder="Suffix Name" />
            </div>
            <div className="register-input-group">
              <input className="register-input" type="date" placeholder="Birthdate" />
            </div>
            <div className="register-input-group">
              <input
                className="register-input"
                type="email"
                placeholder="Email Address"
              />
            </div>
            <div className="register-input-group">
              <input className="register-input" type="password" placeholder="Password" />
            </div>
            <div className="register-input-group">
              <select className="select">
                <option value="broker">I am a real estate broker</option>
                <option value="agent">I’m a real estate sales agent</option>
                <option value="home-seeker">
                  I’m looking for my next home Buy/Rent
                </option>
                <option value="homeowner">
                  I’m a homeowner looking to Sell/Rent
                </option>
              </select>
            </div>
            <div className="register-input-FILE-group">
              <div className="file-input">
                <input
                  type="file"
                  id="file-input"
                  style={{ display: "none" }}
                />
                <label htmlFor="file-input" id="file-input">
                  <img className="icOn" src={upload} alt="Upload" />
                  <span>Upload Real Estate License</span>
                </label>
              </div>
            </div>
            <p className="terms-text">
              By signing up, I agree to M Lhuillier's{" "}
              <a href="#">Terms of Use</a>
            </p>
            <button className="button" onClick={handleRegistrationModalClose}>
              REGISTER
            </button>
            <div className="register-social-login">
              <button className="social-button">
                <img src={google} alt="Google" /> Continue with Google
              </button>
              <button className="social-button">
                <img src={apple} alt="Apple" /> Continue with Apple
              </button>
            </div>
            <div className="register-signin-text">
              Already have an account?{" "}
              <a href="#" onClick={handleRegistrationModalClose}>
                Sign in
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegistrationModal;
