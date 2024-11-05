import React from "react";
import "../../styles/SuccessModal.css"

const SuccessModal = ({ message, onClose }) => {
  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      style={{
        position: "fixed",
        top: "100px",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        width: "100%",
        height: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 100,
      }}
    >
      <div
        className="modal-content"
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          width: "300px",
          height: "100px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>Successfully Submitted</h2>
        <p>{message}</p>
        <button
          onClick={onClose}
          style={{
            backgroundColor: "#276638",
            color: "white",
            border: "none",
            padding: "8px 16px",
            borderRadius: "30px",
            cursor: "pointer",
          }}
        >
          OK, Noted
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
