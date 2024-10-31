import React, { useState } from "react";
import { Button, message } from "antd";
import CancelApplicationModal from "./CancelApplicationModal";
import ConfirmCancelApplication from "./ConfirmCancelApplication";
import PropertyCard from "../components/PropertyCard";
import "../styles/propertyCard.css";
import "../styles/applicationDetails.css";
import propertyImg from "../asset/icons/image 155.png";
import ConfirmationSuccess from "./ConfirmationSuccess";


// Define the validateFiles function
const validateFiles = (files) => {
  // Example validation logic
  const allRequiredFiles = files.slice(0, 2).every((file) => file); // Assuming first 2 files are required
  if (!allRequiredFiles) {
    message.error("Please upload all required files.");
  }
};

const ApplicationDetails = ({ application, onGoBack }) => {
  const [isCancelModalOpen, setCancelModalOpen] = useState(false);
  const [isCancelConfirmationOpen, setCancelConfirmationOpen] = useState(false);
  const [isConfirmCancelModalOpen, setConfirmCancelModalOpen] = useState(false);
  const [selectedReason, setSelectedReason] = useState("");
  const [files, setFiles] = useState([null, null, null, null]);
  const [errors, setErrors] = useState([false, false, false, false]);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  if (!application) {
    return null;
  }

  const handleFileChange = (index, event) => {
    const file = event.target.files[0];
    if (file && !file.type.startsWith("image/")) {
      message.error("Only image files are allowed!");
      return;
    }
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);

    // Update error state
    const newErrors = [...errors];
    newErrors[index] = !file;
    setErrors(newErrors);

    validateFiles(newFiles);
  };

  const handleCancelApplication = (reason) => {
    setSelectedReason(reason);
    setCancelModalOpen(false);
    setConfirmCancelModalOpen(true);
  };

  const handleConfirmCancellation = () => {
    // Handle the actual cancellation logic here
    console.log("Application cancelled for reason:", selectedReason);
    setConfirmCancelModalOpen(false);
    setCancelConfirmationOpen(true);
    // Optionally, redirect or show a success message
  };

  const handleCloseAllModal = () => {
    setCancelConfirmationOpen(false);
  };

  const descriptions = [
    {
      label: "Valid ID",
      span: "(for self/employed)",
    },
    {
      label: "Latest (ITR)",
      descriptionSpan: "Income Tax Return",
      span: "(for self/employed)",
    },
    {
      label: "Latest Payslip",
      span: "(for employed)",
    },
    {
      label: "Latest (COE)",
      descriptionSpan: "Certificate of Employment",
      span: "(for employed)",
    },
  ];

  const property = {
    title: "5 Bedroom House for Rent in Maria Luisa Park",
    location: "Maria Luisa Estate Park, Banilad, Cebu City",
    id: "123456789",
    price: "120,000,000",
    bedrooms: 5,
    bathrooms: 5,
    garage: 3,
    area: 300,
    pricePerSqM: 400000,
    image: { propertyImg },
  };

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "cancelled":
        return "cancelled";
      case "closed":
      case "approved":
        return "approved";
      case "processing":
        return "processing";
      default:
        return "";
    }
  };

  return (
    <div className="application-details-main-container">
      <div className="application-details">
        <div className="status">
          <span>
            Status:{" "}
            <span className={getStatusClass(application.status)}>
              {application.status} Application
            </span>
          </span>
          <span>
            Application ID:{" "}
            <span className="app-id">{application.applicationId}</span>
          </span>
        </div>
        <hr />
        <h3>Property Details</h3>
        <div>
          <PropertyCard property={property} />
        </div>

        <div className="applicant-details-section">
          <h3>Applicant Details</h3>
          <div className="form">
            <div className="fries">
              <div className="form-group">
                <label>Application ID</label>
                <input type="text" value={application.applicationId} readOnly />
              </div>
            </div>
            <div className="pizza">
              <div className="form-group">
                <label>Mobile Number</label>
                <input type="text" value="091234567890" readOnly />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="text" value="test@mhlullier.com" readOnly />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" value="Dela Cruz" readOnly />
              </div>
              <div className="form-group">
                <label>First Name</label>
                <input type="text" value="Juan" readOnly />
              </div>
            </div>
            <div className="sundae">
              <div className="form-group">
                <label>Country</label>
                <input type="text" value="Philippines" readOnly />
              </div>
              <div className="form-group">
                <label>Province/State</label>
                <input type="text" value="Cebu" readOnly />
              </div>
              <div className="form-group">
                <label>City/Town</label>
                <input type="text" value="Cebu City" readOnly />
              </div>
              <div className="form-group">
                <label>Zipcode</label>
                <input type="text" value="6000" readOnly />
              </div>
            </div>
            <div className="burger">
              <div className="form-group">
                <label>House No/Unit/Building Name/Street</label>
                <input
                  type="text"
                  value="1A Banilad Street Cebu City"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>Source of Income</label>
                <input
                  id="label"
                  type="text"
                  value="Business Income/Self Employment"
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>

        <div className="files-container">
          <div className="grid-container">
            {files.map((file, index) => (
              <div key={index} className="grid-item">
                <div className="addButton">
                  <input
                    type="file"
                    id={`file-input-${index}`}
                    onChange={(event) => handleFileChange(index, event)}
                    accept="image/*"
                    required={true} // All inputs are required
                  />
                  {!file && (
                    <label htmlFor={`file-input-${index}`} className="file-label">
                      <span className="plus-icon">+</span>
                    </label>
                  )}
                  {file && (
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`Selected file ${index}`}
                      className="selected-image"
                    />
                  )}
                  {errors[index] && (
                    <p className="error-message">This field is required.</p>
                  )}
                </div>
                <div className="file-description">
                  <p>{descriptions[index].label}</p>
                  {descriptions[index].descriptionSpan && (
                    <p className="description-span">
                      {descriptions[index].descriptionSpan}
                    </p>
                  )}
                  <p className="files-span">{descriptions[index].span}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="actions">
          <Button id="cancel-btn" onClick={() => setCancelModalOpen(true)}>
            Cancel Application
          </Button>
          <Button id="go-back-btn" onClick={onGoBack}>
            Go back
          </Button>
        </div>

        <CancelApplicationModal
          isOpen={isCancelModalOpen}
          onClose={() => setCancelModalOpen(false)}
          onReasonSelect={handleCancelApplication}
        />

        <ConfirmCancelApplication
          isOpen={isConfirmCancelModalOpen}
          onConfirm={handleConfirmCancellation}
          onCancel={() => setConfirmCancelModalOpen(false)}
        />
        <ConfirmationSuccess
          isOpen={isCancelConfirmationOpen}
          onClose={handleCloseAllModal}
        />
      </div>
      <br />
      <br />
      <br />
    </div>
    
  );
};

export default ApplicationDetails;
