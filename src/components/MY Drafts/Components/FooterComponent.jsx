import React from "react";
// import {  FaInstagram } from "react-icons/fa";
import  fb from "../../../assets/icons/footer/fb.png";
import  utube from "../../../assets/icons/footer/utube.png";
import  tiktok from "../../../assets/icons/footer/tiktok.png";
import  x from "../../../assets/icons/footer/x.png";
import  insta from "../../../assets/icons/footer/insta.png";
import logoImage from "../../../assets/icons/footer/red-ml-logo.png";
import appstore from "../../../assets/icons/footer/appstore.png";
import googleplay from "../../../assets/icons/footer/googleplay.png";
import appgallery from "../../../assets/icons/footer/appgallery.png";
import gmail from "../../../assets/icons/footer/gmail.png";
import "../../../styles/FooterComponent.css"; // Import the CSS file

const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <div className="footer-wrapper">
          <div className="footer-section contact-section">
            <img src={logoImage} alt="ML Huillier Logo" />
            <p>
              <img src={gmail} className="gmail" />
              customercare@mlhuillier.com
            </p>
            <div className="social-icons">
              <a href="#">
                <img src={fb} alt="Facebook" />
              </a>
              <a href="#">
                <img src={x} alt="X" />
              </a>
              <a href="#">
                <img src={insta} alt="insta"/>
              </a>
              <a href="#">
                <img src={utube} alt="YouTube" />
              </a>
              <a href="#">
                <img src={tiktok} alt="TikTok" />
              </a>
             
            </div>
          </div>
          <div className="footer-section">
            <h4 className="footer-header">Quick Links</h4>
            <ul className="footer-list">
              <li>
                <a href="#">Online Services</a>
              </li>
              <li>
                <a href="#">Products & Services</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-header">Support</h4>
            <ul className="footer-list">
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Privacy Notice</a>
              </li>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
            </ul>
          </div>
          <div className="footer-section download-links">
            <h4 className="footer-header">Download</h4>
            <a href="#">
              <img src={appstore} alt="Download on the App Store" />
            </a>
            <a href="#">
              <img src={googleplay} alt="Get it on Google Play" />
            </a>
            <a href="#">
              <img src={appgallery} alt="Explore it on AppGallery" />
            </a>
          </div>
        </div>
      </footer>

      <footer className="new-footer-container">
        <p className="copyright-text">
          Copyright © 2024 ML Huillier Financial Services, Inc. All Rights
          Reserved.
        </p>
        <div className="legal-links">
          <a href="#">About Us</a>
          <a href="#">Privacy Notice</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
