import React, { useState } from "react";
import "../styles/modals/ModalComponents.css";

const ModalComponents = () => {
  const [showKYCModal, setShowKYCModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showSuccessfulMsgModal, setShowSuccessfulMsgModal] = useState(false);
  const [showConfirmationMsgModal, setShowConfirmationMsgModal] = useState(false);

  const handleModalClose = () => {
    setShowKYCModal(false);
    setShowSuccessModal(false);
    setShowSuccessfulMsgModal(false);
    setShowConfirmationMsgModal(false);
  };

  return (
    <div className="app-container">
      <button className="buttonkyc" onClick={() => setShowKYCModal(true)}>
        Existing Accounts in KYC
      </button>
      <button className="buttonkyc" onClick={() => setShowSuccessModal(true)}>
        Show Success Modal
      </button>
      <button
        className="buttonkyc"
        onClick={() => setShowSuccessfulMsgModal(true)}
      >
        Successful Msg
      </button>
      <button className="buttonkyc" onClick={() => setShowConfirmationMsgModal(true)}>
        Registration Confirmation
      </button>

      
      {showKYCModal && (
        <div className="modal-overlay" onClick={handleModalClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <a href="/Registration-Modal" className="modal-kycheader">
              Select and proceed with Registration
            </a>

            <div className="kyc-details">
              <p>You have an existing account protected by M Lhuillier</p>
              <div className="account-info">
                <p>J***** V***** C.</p>
                <p>
                097*******9</p>
              </div>
              <button className="kycnotbutton" onClick={handleModalClose}>
              This is not me, create new account.
              </button>
            </div>
          </div>
        </div>
      )}

      {showSuccessModal && (
        <div className="modal-overlay" onClick={handleModalClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="checkmark-container">
              <div className="checkmark-circle">
                <svg
                  className="checkmark-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 52 52"
                >
                  <circle
                    cx="26"
                    cy="26"
                    r="25"
                    fill="none"
                    stroke="#2E7D32"
                    strokeWidth="2"
                  />
                  <path
                    fill="none"
                    stroke="#2E7D32"
                    strokeWidth="4"
                    d="M14 27l7 7 16-16"
                  />
                </svg>
              </div>
            </div>
            <h2 className="modalsuccess-header">Success!</h2>
            <div className="success-details">
              <p>Your account has been successfully registered.</p>
              <button className="buttonkyc" onClick={handleModalClose}>
                Login to my Dashboard
              </button>
            </div>
          </div>
        </div>
      )}

      {showSuccessfulMsgModal && (
        <div className="modal-overlay" onClick={handleModalClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="modalsuccess-header">Successfully Submitted!</h2>
            <div className="success-details">
              <p>
                Waiting for Approval. Your listing has been submitted and will
                undergo screening.
              </p>
              <button className="buttonkyc" onClick={handleModalClose}>
                Preview Listing
              </button>
            </div>
          </div>
        </div>
      )}

      {showConfirmationMsgModal && (
        <div className="modal-overlay" onClick={handleModalClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="confirm-modal-header">Confirmation Message</h2>
            <div className="success-details">
              <p>Are you certain you want to proceed with the registration?</p>
              <button className="cancelbutton" onClick={handleModalClose}>
                Cancel
              </button>
              <button className="proceedbutton" onClick={handleModalClose}>
                Proceed
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalComponents;