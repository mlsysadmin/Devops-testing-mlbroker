import React, { useState } from 'react';
import "../../styles/SoldPropertiesBannerSteps.css";

const SoldSteps = () => {
  const [reviewApproved, setReviewApproved] = useState(false);
  const [propertySold, setPropertySold] = useState(false);

  const markReviewApproved = () => setReviewApproved(true);
  const markPropertySold = () => setPropertySold(true);

    
  const handlePreviewClick = () => {
    window.location.href = '/previewlisting'; // Redirect to the preview listing page
};

  return (
      <div>
          <div className="sold-steps-listing-status-container">
              <div className="sold-steps-listing-id">
                  <strong>Listing ID:</strong> BRSABCDEFGH
              </div>
              <div className="sold-steps-status">
                  <strong>Status:</strong> <span>SOLD</span>
              </div>
              <div>
                  <div className="sold-steps-step" onClick={markReviewApproved}>
                      <div className="sold-steps-circle">
                          {reviewApproved && <div className="active-steps-checked">✓</div>}
                      </div>
                      Review & Approval
                  </div>
                  <div className="sold-steps-step" onClick={markPropertySold}>
                      <div className="sold-steps-circle">
                          {propertySold && <div className="active-steps-checked">✓</div>}
                      </div>
                      Property Sold
                  </div>
              </div>
          </div>
          <div className="sold-steps-preview-button-container">
              <button className="sold-steps-preview-button" onClick={handlePreviewClick}>
                  Preview Listing
              </button>
          </div>
      </div>
    );
};

export default SoldSteps;
