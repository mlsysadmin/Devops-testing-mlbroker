import React, { useState } from "react";
import "../../../styles/support/CloseApplicationModal.css";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const CloseApplicationModal = ({ isOpen, toggleModal, onCloseApplication }) => {
  const [buyerName, setBuyerName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [remarks, setRemarks] = useState("");

  const handleConfirm = () => {
    // Validate form fields (you can add more validation logic as needed)
    if (buyerName && mobileNumber) {
      onCloseApplication({ buyerName, mobileNumber, remarks });
      toggleModal(); // Close the confirmation modal
    } else {
      // Handle validation errors or show a message
      alert("Please fill out all required fields.");
    }
  };

  return (
    <Modal
      className="modalCloseApplicationBody"
      isOpen={isOpen}
      toggle={toggleModal}
    >
      <ModalHeader
        id="modalHeader"
        style={{ color: "red" }}
        toggle={toggleModal}
      >
        Confirmation Message
      </ModalHeader>
      <ModalBody className="body">
        <p>Please provide the buyer's details to close application.</p>
        <Form className="Formgroup">
          <FormGroup className="group">
            <Label for="mobileNumber">Mobile Number</Label>
            <Input
              type="text"
              id="mobileNumber"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
              placeholder="Enter Mobile Number"
            />
          </FormGroup>
          <FormGroup className="group">
            <Label for="buyerName">Buyer Name</Label>
            <Input
              type="text"
              id="buyerName"
              value={buyerName}
              onChange={(e) => setBuyerName(e.target.value)}
              required
              placeholder="Enter Buyer Name"
            />
          </FormGroup>
          <FormGroup className="group">
            <Label for="remarks">Remarks</Label>
            <Input
              type="textarea"
              id="remarks"
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              placeholder="Please provide remarks"
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <br />
      <ModalFooter className="modalFooter">
        <Button
          style={{ color: "white", background: "#d90000" }}
          color="danger"
          onClick={handleConfirm}
        >
          Close Application
        </Button>
        <Button color="secondary" onClick={toggleModal}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CloseApplicationModal;
