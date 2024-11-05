import React from "react";

const Menu = ({ activeTab, tabHeadings, showOptions, handleTabChange }) => {
  return (
    <div className="menu">
      <h1>{tabHeadings[activeTab]}</h1>
      {showOptions && (
        <div className="options">
          <select value={activeTab} onChange={handleTabChange}>
            <option value="open">Open Listings</option>
            <option value="pending">Pending Listings</option>
            <option value="disapproved">Disapproved Listings</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default Menu;
