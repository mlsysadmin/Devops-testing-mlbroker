import React, { useState } from 'react';
import '../../styles/active-list-banner-steps.css'; 

const ActiveListSteps = () => {
  const [reviewApproved, setReviewApproved] = useState(false);
  const [propertySold, setPropertySold] = useState(false);

  const markReviewApproved = () => setReviewApproved(true);
  const markPropertySold = () => setPropertySold(true);


  const handlePreviewClick = () => {
    window.location.href = '/previewlisting'; // Redirect to the preview listing page
}
  return (
      <div>
          <div className="active-steps-listing-status-container">
              <div className="active-steps-listing-id">
                  <strong>Listing ID:</strong> BRSABCDEFGH
              </div>
              <div className="active-steps-status">
                  <strong>Status:</strong> <span>APPROVED</span>
              </div>
              <div>
                  <div className="active-steps-step" onClick={markReviewApproved}>
                      <div className="active-steps-circle">
                          {reviewApproved && <div className="active-steps-checked">✓</div>}
                      </div>
                      Review & Approval
                  </div>
                  <div className="active-steps-step" onClick={markPropertySold}>
                      <div className="active-steps-circle">
                          {propertySold && <div className="active-steps-checked">✓</div>}
                      </div>
                      Property Sold
                  </div>
              </div>
          </div>
          <div className="active-steps-preview-button-container">
              <button className="active-steps-preview-button" onClick={handlePreviewClick}>
                  Preview Listing
              </button>
          </div>
      </div>
    );
};

export default ActiveListSteps;
