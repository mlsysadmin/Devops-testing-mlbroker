import React from "react";
import "../../styles/footer.css";

const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="left-side">
          Copyright &copy; 2024 Financial Services, Inc. All Rights Reserved
        </div>
        <div className="right-side">
          <a href="https://mlhuillier.com/about-m-lhuillier-financial-services">About Us</a> &nbsp;&nbsp; <a href="https://mlhuillier.com/privacy-notice/">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
