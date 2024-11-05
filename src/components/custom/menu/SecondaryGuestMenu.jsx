import React from "react";
import "../../../styles/SecondaryGuestMenu.css";
import addRing from "../../../images/Guest/Add_ring.png";
import advanceSearch from "../../../images/Guest/advanceSearch.png";
import Search from "../../../images/Guest/Search.png";

const SecondaryGuestMenu = () => {
  return (
    <div className="menuContainer">
      <div className="top">
        <input type="text" placeholder="Enter Keyword" />
        <select name="location" id="location">
          <option value="">Location</option>
          <option value="cebu">Cebu</option>
        </select>
        <select name="PropertyListing" id="PropertyListing">
          <option value="">Property Listing</option>
        </select>
        <select name="ListingType" id="ListingType">
          <option value="">Listing Type</option>
        </select>
      </div>
      <div className="bottom">
        <div className="left">
          <img src={addRing} alt="" />
          <b>Looking for certain features</b>
        </div>
        <div className="right">
          <div className="rightdiv advanceSearch">
            <img src={advanceSearch} alt="" />
            <p>Advance Search</p>
          </div>
          <div className="rightdiv search">
            <img src={Search} alt="" />
            <p>Search</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryGuestMenu;
