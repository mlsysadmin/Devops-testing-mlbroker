import React, { forwardRef, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Dummydata from "../../utils/supportDummyData/openListingDummy.json";
import Menu from "../custom/support/Menu";
import "../../styles/support/ApplicationDetails.css";
import { ArrowLeftOutlined, GlobalOutlined } from "@ant-design/icons";
import SupportNavigation from "../custom/support/custom.NavigationComponent";
import FooterComponent from "../layout/support/FooterComponent";
import first from "../../asset/first.jpg";
import PropertyMapButton from "../custom/support/PropertyMapModal";
import ApprovalComponent from "../custom/support/ApprovalComponent";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"; // Import Reactstrap components
import CloseApplicationModal from "../custom/support/CloseApplicationModal";

const ApplicationDetails = forwardRef((props, ref) => {
  const [isConfirmationOpen, setConfirmationOpen] = useState(false);
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { listing, activeTab } = location.state || {};
  const [detailedListing, setDetailedListing] = useState(null);
  const toggleConfirmationModal = () =>
    setConfirmationOpen(!isConfirmationOpen);
  const handleCloseApplication = ({ buyerName, mobileNumber, remarks }) => {
    console.log("Closing application with:", buyerName, mobileNumber, remarks);
    setSuccessModalOpen(true);
  };

  const toggleSuccessModal = () => setSuccessModalOpen(!isSuccessModalOpen);
  useEffect(() => {
    if (listing) {
      const listings = Dummydata[`${activeTab}_listings`] || [];
      const detailed = listings.find(
        (item) => item.listing_id === listing.listing_id
      );
      if (detailed) {
        setDetailedListing(detailed);
      } else {
        console.error(
          `Detailed listing not found for listing ID ${listing.listing_id}`
        );
      }
    }
  }, [listing, activeTab]);

  const tabHeadings = {
    pending: "Pending Applications Details",
    disapproved: "Denied Applications Details",
    open: " Active Application Details",
    active: "  Active Applications Details",
    cancelled: " Canceled Applications Details",
    closed: " Closed Applications Details",
  };

  if (!detailedListing) {
    return <div>Loading...</div>;
  }

  const navLinks = [
    {
      text: "Create listing",
      to: "/ML-Brokerage/Support/SupportCreateListingPage",
    },
    {
      text: "Listing Masterlist",
      dropdown: true,
      options: [
        { text: "Pending Listings", to: "/ML-Brokerage/Support/pending" },
        { text: "Active Listings", to: "/ML-Brokerage/Support/active" },
        {
          text: "Denied Listings",
          to: "/ML-Brokerage/Support/disapproved",
        },
      ],
    },
    {
      text: "Application Review",
      dropdown: true,
      options: [
        {
          text: "Pending Applications",
          to: "/ML-Brokerage/Support/pendingApplication",
        },
        {
          text: "Approved Applications",
          to: "/ML-Brokerage/Support/openApplication",
        },
        {
          text: "Denied Applications",
          to: "/ML-Brokerage/Support/disapprovedApplication",
        },
        {
          text: "Canceled Applications",
          to: "/ML-Brokerage/Support/CanceledApplications",
        },
        {
          text: "Closed Applications ",
          to: "/ML-Brokerage/Support/ClosedApplications",
        },
      ],
    },
    {
      text: "Pre-Approved Request",
      to: "/ML-Brokerage/Support/pre-approved",
    },
    { text: "Client Management", to: "/ML-Brokerage/Support/SupportDashboard" },
  ];
  const tabColors = {
    disapproved: "red",
    open: "green",
    cancelled: "red",
    closed: "green",
  };
  return (
    <div className="application-details-container">
      <SupportNavigation navLinkProps={navLinks} />
      <div className="bodySection">
        <div className="secondTab">
          <Menu activeTab={activeTab} tabHeadings={tabHeadings} />
          <p>
            <strong>Property ID:</strong> {detailedListing.listing_id}
          </p>
        </div>
        <hr style={{ border: "#D90000 solid 1px", width: "100%" }} />
        <div className="contentContainer">
          <div className="mainContent">
            {activeTab !== "pending" && (
              <div className="details-header">
                {activeTab === "cancelled" && (
                  <div className="detailsCancelled">
                    <p>Buyer: Juan Dela Cruz</p>
                    <p>Date: 07-04-2024</p>
                    <p>Status: Canceled</p>
                    <p>Remarks: Found a Better Property</p>
                  </div>
                )}
                {activeTab === "closed" && (
                  <div className="detailsClosed">
                    <p>Buyer Mobile Number: 09479992152</p>
                    <p>Buyer: Juan Dela Cruz</p>
                    <p>Date: 07-04-2024</p>
                    <p>Status: Closed</p>
                    <p>Remarks: Found a Better Property</p>
                  </div>
                )}
                {activeTab === "disapproved" && (
                  <div className="detailsClosed"></div>
                )}
                {activeTab === "open" && <div className="detailsClosed"></div>}
                <center>
                  <h1 style={{ color: tabColors[activeTab], width: "100%" }}>
                    {tabHeadings[activeTab]}
                  </h1>
                </center>
              </div>
            )}
            <h1 className="mainTitle">Property Details</h1>
            <div className="right">
              <div className="topCard">
                <div className="leftPart">
                  <h1 id="title">{listing.title}</h1>
                  <h2 id="loc">{listing.location}</h2>
                  <p>Property ID: {listing.listing_id}</p>
                  <strong>PHP {listing.price}</strong>
                  <div className="cards">
                    <div className="card">
                      <p>Bedrooms</p>
                      <p>{listing.bedroom}</p>
                    </div>
                    <div className="card">
                      <p>Bathrooms</p>
                      <p>{listing.bathroom}</p>
                    </div>
                    <div className="card">
                      <p>Garage</p>
                      <p>1</p>
                    </div>
                    <div className="card">
                      <p>Area</p>
                      <p>
                        300 <span>SqM</span>
                      </p>
                    </div>
                    <div className="card">
                      <p>Price per SqM</p>
                      <p>
                        <span>PHP</span> 400, 000
                      </p>
                    </div>
                  </div>
                  <div className="bottomCard">
                    <div className="btns">
                      <PropertyMapButton address={listing.location} />

                      <a href="#" className="sbutton">
                        <GlobalOutlined />
                        <p>View Listing as Public </p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="rightCard">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="centerContent">
            <h1 className="CenterContentTitle">Applicant Details</h1>
            <div className="firstField">
              <label htmlFor="ApplicationID">Application ID</label>
              <p className="ID">BRADMFASDFE</p>
            </div>
            <div className="secondField">
              <div className="field">
                <label htmlFor="mobNum">Mobile Number</label>
                <p>09123457890</p>
              </div>
              <div className="field">
                <label htmlFor="EmailAddress">Email Address</label>
                <p>juan@gmail.com</p>
              </div>
              <div className="field">
                <label htmlFor="lname">Last Name</label>
                <p>Marvie Cauyan</p>
              </div>
              <div className="field">
                <label htmlFor="fname">First Name</label>
                <p>Marvie</p>
              </div>
              <div className="field">
                <label htmlFor="Country">Country</label>
                <p>Philippines</p>
              </div>
              <div className="field">
                <label htmlFor="City">City</label>
                <p>Cebu</p>
              </div>
              <div className="field">
                <label htmlFor="Province">Province</label>
                <p>Mandaue</p>
              </div>
              <div className="field">
                <label htmlFor="Zipcode">Zipcode</label>
                <p>6000</p>
              </div>
            </div>
            <div className="lastField">
              <div className="topAddress">
                {" "}
                <div style={{ display: "flex", justifyContent: "flex-start" }}>
                  <label htmlFor="Address">
                    House No/Unit/Building Name/Street
                  </label>
                </div>
                <p className="address">1A Banilad Street Cebu City</p>
              </div>
              <div>
                <label htmlFor="Address">
                  House No/Unit/Building Name/Street
                </label>
                <p className="address">1A Banilad Street Cebu City</p>
              </div>
            </div>
          </div>
          <div className="centerContent">
            <h1 className="CenterContentTitle">Seller/Broker Details</h1>

            <div className="secondField">
              <div className="field">
                <label htmlFor="mobNum">Mobile Number</label>
                <p>09123457890</p>
              </div>
              <div className="field">
                <label htmlFor="EmailAddress">Email Address</label>
                <p>juan@gmail.com</p>
              </div>
              <div className="field">
                <label htmlFor="lname">Last Name</label>
                <p>Marvie Cauyan</p>
              </div>
              <div className="field">
                <label htmlFor="fname">First Name</label>
                <p>Marvie</p>
              </div>
              <div className="field">
                <label htmlFor="Country">Country</label>
                <p>Philippines</p>
              </div>
              <div className="field">
                <label htmlFor="City">City</label>
                <p>Cebu</p>
              </div>
              <div className="field">
                <label htmlFor="Province">Province</label>
                <p>Mandaue</p>
              </div>
              <div className="field">
                <label htmlFor="Zipcode">Zipcode</label>
                <p>6000</p>
              </div>
            </div>
            <div className="lastField">
              <div className="topAddress">
                {" "}
                <div>
                  <label htmlFor="Address" style={{ width: "100%" }}>
                    House No/Unit/Building Name/Street
                  </label>
                </div>
                <p className="address">1A Banilad Street Cebu City</p>
              </div>
            </div>
          </div>
          <div className="requirementsDocuments">
            <h1>Upload Documents</h1>
            <p>
              Please upload or attach the document requirements for the
              application.
            </p>
            <div className="requirements">
              <div className="requirementsCard">
                <div className="card">
                  <div className="imgContainer">
                    <img src={first} alt="" />
                  </div>
                  <p>
                    Valid ID <span>*</span>
                  </p>
                </div>
                <div className="card">
                  <div className="imgContainer">
                    <img src={first} alt="" />
                  </div>
                  <p>
                    Latest {"(ITR)"}
                    <span>*</span>
                  </p>
                  <p className="avrivate">Income Tax Return</p>
                </div>
                <div className="card">
                  <div className="imgContainer">
                    <img src={first} alt="" />
                  </div>
                  <p>
                    Latest Payslip<span>*</span>
                  </p>
                </div>
                <div className="card">
                  <div className="imgContainer">
                    <img src={first} alt="" />
                  </div>
                  <p>
                    Latest{"(COE)"}
                    <span>*</span>
                  </p>
                  <p className="avrivate">Certificate of Employment</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: "100%" }}>
            <div className="approval">
              <ApprovalComponent activeTab={activeTab} />
            </div>
          </div>
          <div className="closeApplication">
            {activeTab === "open" && (
              <Button
                className="closeApplicationBtn"
                color="danger"
                onClick={toggleConfirmationModal}
              >
                Close Application
              </Button>
            )}

            <CloseApplicationModal
              isOpen={isConfirmationOpen}
              toggleModal={toggleConfirmationModal}
              onCloseApplication={handleCloseApplication}
            />

            <Modal
              className="success"
              isOpen={isSuccessModalOpen}
              toggle={toggleSuccessModal}
            >
              <ModalHeader
                className="successHeader"
                toggle={toggleSuccessModal}
              >
                Successful Message
              </ModalHeader>
              <ModalBody className="successBody">
                The application has been successfully closed.{" "}
              </ModalBody>
              <br />
              <ModalFooter className="okay">
                <Button color="primary" onClick={toggleSuccessModal}>
                  Close
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>

        <FooterComponent />
      </div>
    </div>
  );
});

export default ApplicationDetails;
