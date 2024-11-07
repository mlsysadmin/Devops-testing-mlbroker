import React from "react";
import "../../../styles/support/modal.css";

const Modal = ({
  show,
  onClose,
  onConfirm,
  question,
  remarks,
  setRemarks,
  actionType,
  Title,
}) => {
  if (!show) {
    return null;
  }
  let hideTextarea = false; // Variable to control textarea visibility

  let titleClass = "";

  switch (actionType) {
    case "pending":
      titleClass = "title-pending";
      break;
    case "disapprove":
      titleClass = "title-disapprove";
      break;
    case "approve":
      titleClass = "title-approve";
      break;
    case "create-listing":
      titleClass = "confirm-create-listing";
      hideTextarea = true; // Hide textarea for "approve" action

      break;
    default:
      titleClass = "title-default";
      break;
  }

  let confirmButtonClass = "";

  switch (actionType) {
    case "pending":
      confirmButtonClass = "confirm-pending";
      break;
    case "disapprove":
      confirmButtonClass = "confirm-disapprove";
      break;
    case "approve":
      confirmButtonClass = "confirm-approve";
      break;
    default:
      confirmButtonClass = "confirm-default";
      break;
    case "create-listing":
      confirmButtonClass = "confirm-create-listing";
      break;
  }

  let cancelButtonClass = "";

  switch (actionType) {
    case "pending":
      cancelButtonClass = "cancel-pending";
      break;
    case "disapprove":
      cancelButtonClass = "cancel-disapprove";
      break;
    case "approve":
      cancelButtonClass = "cancel-approve";
      break;
    case "create-listing":
      cancelButtonClass = "cancel-create-listing";
      break;
    default:
      cancelButtonClass = "cancel-default";
      break;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="modal-content">
          <h2 className={`modal-title ${titleClass}`}>{Title}</h2>
          <h3>{question}</h3>
          {!hideTextarea && (
            <textarea
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              placeholder="Enter remarks..."
            ></textarea>
          )}
          <div className="modal-actions">
            <button
              className={`modal-confirm ${confirmButtonClass}`}
              onClick={onConfirm}
            >
              Confirm
            </button>
            <button
              className={`modal-cancel ${cancelButtonClass}`}
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
