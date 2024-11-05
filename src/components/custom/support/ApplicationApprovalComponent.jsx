import React, { useState, useEffect } from "react";
import "../../styles/ApprovalComponent.css";
import Modal from "react-modal";
Modal.setAppElement("#root");

const ApprovalComponent = ({
  initialLayer = 1,
  buttonLabels = {},
  loggedInUser = "loigen",
  activeTab = "pending",
}) => {
  const [currentLayer, setCurrentLayer] = useState(initialLayer);
  const [remarks, setRemarks] = useState({
    layer1: "",
    layer2: "",
    layer3: "",
  });
  const [approverNames, setApproverNames] = useState({
    layer1: loggedInUser,
    layer2: loggedInUser,
    layer3: loggedInUser,
  });
  const [details, setDetails] = useState({
    layer1: null,
    layer2: null,
    layer3: null,
  });
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [isApprovalConfirmationModalOpen, setIsApprovalConfirmationModalOpen] =
    useState(false);
  const [modalRemarks, setModalRemarks] = useState("");
  const [modalLayer, setModalLayer] = useState("");

  useEffect(() => {
    if (activeTab === "disapproved") {
      setRemarks({
        layer1: "Disapproved due to incomplete documentation.",
        layer2: "Disapproved due to incomplete documentation.",
        layer3: "Disapproved due to incomplete documentation.",
      });
      setCurrentLayer(4);
    } else if (activeTab === "approved") {
      setRemarks({
        layer1: "Approved by Licensed Broker.",
        layer2: "Approved by Licensed Broker.",
        layer3: "Approved by Licensed Broker.",
      });
      setDetails({
        layer1: {
          approverName: loggedInUser,
          time: new Date().toLocaleString(),
        },
        layer2: {
          approverName: loggedInUser,
          time: new Date().toLocaleString(),
        },
        layer3: {
          approverName: loggedInUser,
          time: new Date().toLocaleString(),
        },
      });
      setCurrentLayer(4);
    }
  }, [activeTab, loggedInUser]);

  const openFirstModal = (layer) => {
    setModalLayer(layer);
    setModalRemarks("");
    setIsFirstModalOpen(true);
  };

  const closeFirstModal = () => setIsFirstModalOpen(false);

  const openSecondModal = () => setIsSecondModalOpen(true);

  const closeSecondModal = () => setIsSecondModalOpen(false);

  const openApprovalConfirmationModal = () =>
    setIsApprovalConfirmationModalOpen(true);

  const closeApprovalConfirmationModal = () =>
    setIsApprovalConfirmationModalOpen(false);

  const handleApprove = async (layer) => {
    if (layer === "layer3") {
      openApprovalConfirmationModal();
      return;
    }

    try {
      const response = await fetch("https://worldtimeapi.org/api/ip");
      const data = await response.json();
      const currentTime = new Date(data.utc_datetime).toLocaleString();

      const approverName = approverNames[layer];
      let approverRemarks = remarks[layer];

      if (!approverRemarks) {
        approverRemarks = "Acknowledged.";
        setRemarks((prevRemarks) => ({
          ...prevRemarks,
          [layer]: approverRemarks,
        }));
      }

      const newDetails = {
        ...details,
        [layer]: { approverName, time: currentTime },
      };
      setDetails(newDetails);

      if (layer === "layer1") {
        setCurrentLayer(2);
      } else if (layer === "layer2") {
        setCurrentLayer(3);
      } else if (layer === "layer3") {
        setCurrentLayer(4);
      }
    } catch (error) {
      console.error("Error fetching current time:", error);
    }
  };

  const confirmApproveLayer3 = async () => {
    closeApprovalConfirmationModal();
    try {
      const response = await fetch("https://worldtimeapi.org/api/ip");
      const data = await response.json();
      const currentTime = new Date(data.utc_datetime).toLocaleString();

      const approverName = approverNames.layer3;
      let approverRemarks = remarks.layer3;

      if (!approverRemarks) {
        approverRemarks = "Acknowledged.";
        setRemarks((prevRemarks) => ({
          ...prevRemarks,
          layer3: approverRemarks,
        }));
      }

      const newDetails = {
        ...details,
        layer3: { approverName, time: currentTime },
      };
      setDetails(newDetails);

      setCurrentLayer(4);
      openSecondModal(); // Show success modal after confirming approval
    } catch (error) {
      console.error("Error fetching current time:", error);
    }
  };

  const handleCancel = (layer) => {
    openFirstModal(layer);
  };

  const handleDisapprove = () => {
    const disapproveRemarks =
      modalRemarks || "Disapproved by the Authorized Personel.";
    setRemarks((prevRemarks) => ({
      ...prevRemarks,
      [modalLayer]: disapproveRemarks,
    }));
    if (modalLayer === "layer1") {
      setCurrentLayer(2);
    } else if (modalLayer === "layer2") {
      setCurrentLayer(3);
    } else if (modalLayer === "layer3") {
      setCurrentLayer(4);
    }
    closeFirstModal();
    openSecondModal();
  };

  const renderButtons = (layer) => {
    if (activeTab === "pending" && currentLayer === parseInt(layer.slice(-1))) {
      return (
        <div className="Buttons">
          <button className="approve" onClick={() => handleApprove(layer)}>
            {buttonLabels.approve || "Approve"}
          </button>
          <button className="disapproved" onClick={() => handleCancel(layer)}>
            {buttonLabels.disapprove || "Deny Listing"}
          </button>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="approvalContainer">
      <h2>Level of Approvals</h2>

      {/* Layer 1 */}
      <div className="layers">
        <h3>Level 1 Approval</h3>
        <div>
          <label>Noted by: {loggedInUser}</label>
          <p>Date Approved: {details.layer1?.time}</p>
        </div>
        <textarea
          value={remarks.layer1}
          onChange={(e) => setRemarks({ ...remarks, layer1: e.target.value })}
          placeholder="Enter Remarks"
          disabled={currentLayer !== 1 || activeTab !== "pending"}
        />
        {renderButtons("layer1")}
      </div>

      {/* Layer 2 */}
      <div className="layers">
        <h3>Level 2 Approval</h3>
        <div>
          <label>Noted by: {loggedInUser}</label>
          <p>Date Approved: {details.layer2?.time}</p>
        </div>
        <textarea
          value={remarks.layer2}
          onChange={(e) => setRemarks({ ...remarks, layer2: e.target.value })}
          placeholder="Enter Remarks"
          disabled={currentLayer !== 2 || activeTab !== "pending"}
        />
        {renderButtons("layer2")}
      </div>

      {/* Layer 3 */}
      <div className="layers">
        <h3>Level 3 Approval</h3>
        <div>
          <label>Noted by: {loggedInUser}</label>
          <p>Date Approved: {details.layer3?.time}</p>
        </div>
        <textarea
          value={remarks.layer3}
          onChange={(e) => setRemarks({ ...remarks, layer3: e.target.value })}
          placeholder="Enter Remarks"
          disabled={currentLayer !== 3 || activeTab !== "pending"}
        />
        {renderButtons("layer3")}
      </div>

      {/* Confirmation Modal */}
      <Modal
        isOpen={isFirstModalOpen}
        onRequestClose={closeFirstModal}
        className="fmodal"
        overlayClassName="overlay"
        contentLabel="Confirmation Modal"
      >
        <h2>Confirmation Message</h2>
        <p>Are you sure you want to deny this listing?</p>
        <textarea
          style={{ width: "90%", padding: "5%" }}
          value={modalRemarks}
          onChange={(e) => setModalRemarks(e.target.value)}
          name="remarks"
          id="remarks"
          placeholder="Please Provide remarks"
          required
        />
        <div>
          <button
            className="button button-secondary"
            onClick={handleDisapprove}
          >
            Disapproved
          </button>
          <button className="button button-primary" onClick={closeFirstModal}>
            Cancel
          </button>
        </div>
      </Modal>

      {/* Success Modal */}
      <Modal
        isOpen={isSecondModalOpen}
        onRequestClose={closeSecondModal}
        className="smodal"
        overlayClassName="overlay"
        contentLabel="Success Modal"
      >
        <h2>Success</h2>
        <p>The application has been successfully approved.</p>
        <button className="button button-primary" onClick={closeSecondModal}>
          Close
        </button>
      </Modal>

      {/* Approval Confirmation Modal */}
      <Modal
        isOpen={isApprovalConfirmationModalOpen}
        onRequestClose={closeApprovalConfirmationModal}
        className="amodal"
        overlayClassName="overlay"
        contentLabel="Approval Confirmation Modal"
      >
        <div className="overlayBox"></div>
        <div className="modalCont">
          <h2>Confirm Approval</h2>
          <p>Are you sure you want to approve this listing?</p>
          <div>
            <button
              className="button button-secondary"
              onClick={confirmApproveLayer3}
            >
              Confirm
            </button>
            <button
              className="button button-primary"
              onClick={closeApprovalConfirmationModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ApprovalComponent;
