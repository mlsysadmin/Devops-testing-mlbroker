import React from "react";

const CustomSupportOverviewCard = (props) => {
    const {imgSrc, totalHead, valueTitle} =props;
    const formattedPrice = new Intl.NumberFormat('en-US').format(totalHead);
  return (
    <div className="overview-card">
      <div className="top-card">
        <div className="icon-background">
          <img className="overview-icon" alt="Iconic" src={imgSrc} />
        </div>
        <div className="total-head">{formattedPrice}</div>
      </div>
      <div className="title">{valueTitle}</div>
    </div>
  );
};
export default CustomSupportOverviewCard;
