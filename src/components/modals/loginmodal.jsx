import React from "react";
import '../../styles/modals/LoginModal.css';
import { useState } from "react";
import logo from '../../assets/red-ml-logo.png';
import google from '../../assets/icons/logreg/google-icon.png';
import apple from '../../assets/icons/logreg/apple-icon.png';

const LoginModal = ({ visible, onClose }) => {
    const handleLoginModalClose = () => {
      onClose();
    };
  
    return (
      <div>
        {visible && (
          <div className="login-modal">
            <div className="login-modal-content">
              <span className="login-close-button" onClick={handleLoginModalClose}>
                &times;
              </span>
              <div className="login-logo">
                <img src={logo} alt="M Lhuillier Logo" />
              </div>
              <h1 className="login-MLheader">Welcome to M Lhuillier Brokerage</h1>
              <div className="login-input-group">
                <input className="login-input" type="email" placeholder="Enter Email Address" />
              </div>
              <div className="login-input-group">
                <input className="login-input" type="password" placeholder="Enter Password" />
              </div>
              <button className="login-button">LOGIN</button>
              <div className="login-forgot-password">
                <a className="login-forgot-password-link" href="#">
                  Forgot your password?
                </a>
              </div>
              <div className="login-connect-with">or connect with</div>
              <div className="login-social-login">
                <button className="login-social-button">
                  <img src={google} alt="Google" /> Continue with Google
                </button>
                <button className="login-social-button">
                  <img src={apple} alt="Apple" /> Continue with Apple
                </button>
              </div>
              <div className="login-signup">
                Don't have an account? <a className="login-signup-link" href="#">
                  Sign up
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
  export default LoginModal;