import React, { useState } from "react";
import FavoriteFill1 from "../../../asset/icons/FavoriteFill";
import "../../../styles/support/SupportDashboard.css";

const SecondNavigationComponent = (props) => {
  const { title, listingId, isShowDetails } = props;
  
  return (
    <div className="SecondNavigationDiv">
      <div className="SecondDiv">
        <div className="SecondDivTitle">{title}</div>
        {
          !isShowDetails ? <></> : <div className="id">
            <p>Listing ID:</p><span className="listingID">{listingId}</span>
          </div>
        }
      </div>
      <center>
        <hr className="support-hr"/>
      </center>
    </div>
  );
};

export default SecondNavigationComponent;
