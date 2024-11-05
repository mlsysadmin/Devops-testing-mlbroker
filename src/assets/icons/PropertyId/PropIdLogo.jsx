import React from "react";

export const PropIdLogo = ({ className }) => {
  return (
    <svg
      className={`prop-id-logo ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect className="rect" height="14" rx="3" stroke="#D90000" width="14" x="5" y="5" />
      <path className="path" d="M5 10L19 10" stroke="#D90000" strokeLinecap="round" />
    </svg>
  );
};



export default PropIdLogo;
