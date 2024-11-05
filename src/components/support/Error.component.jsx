import React from "react";
import "../styles/error.css";

const ErrorComponent = () => {
  return (
    <div className="error">
      <div className="error-page">
        <div className="error-body-group">
          <img
            className="floating-diamond"
            alt="Floating diamond"
            src="https://anima-uploads.s3.amazonaws.com/projects/64e41d552340cba66b90f01a/releases/64e492714fd92dc35e55a22f/img/floating-diamond-left-5@2x.png"
          />
          <img
            className="img"
            alt="Floating diamond"
            src="https://anima-uploads.s3.amazonaws.com/projects/64e41d552340cba66b90f01a/releases/64e492714fd92dc35e55a22f/img/floating-diamond-right-5@2x.png"
          />
          <div className="error-content-group">
            <div className="overlap-group">
              <div className="text-wrapper-404">404</div>
              <div className="title-404">Page Not Found.</div>
              <div className="p-content">
                <span className="content-span-404">
                  The page you are looking for does not exist or an error
                  occurred. <br></br>Go back to
                </span>
                <a href="/dashboard">
                <span className="text-wrapper-hp" >Homepage</span>
                </a>
                <span className="dot-span">.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ErrorComponent;
