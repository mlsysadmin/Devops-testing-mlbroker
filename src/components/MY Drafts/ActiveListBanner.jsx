import React from 'react';
import '../../styles/active-list-banner-steps.css'; // Make sure to create and import the corresponding CSS file

const ActiveListBanner = () => {
  return (
    <div className="listing-details-container">
      <div className="listing-details-header">
        Listing Details
        <div className="listing-details-subheader">
          Listing approval has been approved & active.
        </div>
      </div>
   
    </div>
  );
};

export default ActiveListBanner;
