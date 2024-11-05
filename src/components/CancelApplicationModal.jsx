import React, { useState, useEffect } from 'react';
import '../styles/CancelApplicationModal.css';

const CancelApplicationModal = ({ isOpen, onClose, onReasonSelect }) => {
  const [selectedReason, setSelectedReason] = useState('');

  useEffect(() => {
    if (isOpen) {
      setSelectedReason('');
    }
  }, [isOpen]);

  const handleReasonChange = (event) => {
    setSelectedReason(event.target.value);
  };

  const handleConfirmCancellation = () => {
    onReasonSelect(selectedReason);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-application-overlay">
      <div className="modal-content">
        <h2>Select Cancellation Reason</h2>
        <form>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                value="Found a Better Property"
                checked={selectedReason === 'Found a Better Property'}
                onChange={handleReasonChange}
              />
              <span></span>
              Found a Better Property
            </label>
            <label>
              <input
                type="radio"
                value="Financial Issues"
                checked={selectedReason === 'Financial Issues'}
                onChange={handleReasonChange}
              />
              <span></span>
              Financial Issues
            </label>
            <label>
              <input
                type="radio"
                value="Change of Mind"
                checked={selectedReason === 'Change of Mind'}
                onChange={handleReasonChange}
              />
              <span></span>
              Change of Mind
            </label>
            <label>
              <input
                type="radio"
                value="Concerns in Personal Circumstances"
                checked={selectedReason === 'Concerns in Personal Circumstances'}
                onChange={handleReasonChange}
              />
              <span></span>
              Concerns in Personal Circumstances
            </label>
            <label>
              <input
                type="radio"
                value="Decided to Rent Instead"
                checked={selectedReason === 'Decided to Rent Instead'}
                onChange={handleReasonChange}
              />
              <span></span>
              Decided to Rent Instead
            </label>
            <label>
              <input
                type="radio"
                value="Property No Longer Available"
                checked={selectedReason === 'Property No Longer Available'}
                onChange={handleReasonChange}
              />
              <span></span>
              Property No Longer Available
            </label>
          </div>
        </form>
        <div className="confirm-btn-container">
          <button
            className="confirm-btn"
            onClick={handleConfirmCancellation}
            disabled={!selectedReason}
          >
            Confirm Cancellation
          </button>
        </div>
      </div>
    </div>
  );
};

export default CancelApplicationModal;
