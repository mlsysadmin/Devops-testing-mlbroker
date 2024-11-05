import React from "react";

export const SearchIcon = ({ className }) => {
  return (
    <svg
      className={`search-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle className="circle" cx="11" cy="11" r="7" stroke="white" strokeWidth="2" />
      <path className="path" d="M20 20L17 17" stroke="white" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
};

export default SearchIcon;