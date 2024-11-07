/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const UserCicrle = ({ className }) => {
  return (
    <svg
      className={`user-cicrle ${className}`}
      fill="none"
      height="23"
      viewBox="0 0 23 23"
      width="23"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        className="ellipse-141"
        cx="11.5"
        cy="9.58337"
        rx="2.875"
        ry="2.875"
        stroke="white"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <circle className="circle" cx="11.5" cy="11.5" r="8.625" stroke="white" strokeWidth="2" />
      <path
        className="path"
        d="M17.0397 18.042C17.1615 17.9751 17.2191 17.8303 17.1676 17.7012C16.7981 16.7751 16.0862 15.9596 15.1239 15.3652C14.0842 14.7231 12.8104 14.375 11.5 14.375C10.1896 14.375 8.91577 14.7231 7.87614 15.3652C6.91384 15.9596 6.20195 16.7751 5.8324 17.7012C5.78089 17.8303 5.83851 17.9751 5.96034 18.042C9.41055 19.9362 13.5894 19.9362 17.0397 18.042Z"
        fill="white"
      />
    </svg>
  );
};
