import React from "react";

const Menu = ({ activeTab, tabHeadings, showOptions, handleTabChange }) => {
  return (
    <div className="menu">
      <h2>{tabHeadings[activeTab]}</h2>
      {showOptions && (
        <div className="tab-options">
          {Object.keys(tabHeadings).map((key) => (
            <button
              key={key}
              value={key}
              onClick={handleTabChange}
              className={activeTab === key ? "active" : ""}
            >
              {tabHeadings[key]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
