import React from 'react';
import "../styles/SuccessModalComponent.css";

const ConfirmationSuccess = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="main-container" onClick={onClose}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        <h4 className="title">Successful Message</h4>
        <p className="message">Your application has been successfully canceled.</p>
      </div>
    </div>
  );
};

export default ConfirmationSuccess;

