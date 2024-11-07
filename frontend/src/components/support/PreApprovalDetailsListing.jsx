import React, { forwardRef, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Dummydata from "../../utils/supportDummyData/openListingDummy.json";
import Menu from "../custom/support/Menu";
import SupportNavigation from "../custom/support/custom.NavigationComponent";
import FooterComponent from "../layout/support/FooterComponent";
import ApprovalComponent from "../custom/support/ApprovalComponent";
import "../../styles/support/PreApprovalRequestsListing.css";
const PreApprovalDetails = forwardRef((props, ref) => {
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
    pending: "Pre-Approval (Buy a Home)",
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
            <strong>Refinance ID:</strong> {detailedListing.listing_id}
          </p>
        </div>
        <hr style={{ border: "#D90000 solid 1px", width: "100%" }} />
        <div className="contentContainer">
          <div className="MainContent">
            <div className="propertyPart">
              <b>Property</b>
              <div className="fieldInput">
                <label htmlFor="">
                  How much do you plan to spend on your new home?{" (Estimate)"}
                </label>
                <p>1,000,000 or more</p>
              </div>
              <div className="fieldInput">
                <label htmlFor="">
                  What kind of home are you looking for?{" "}
                </label>
                <p>Single family</p>
              </div>
              <div className="fieldInput">
                <label htmlFor="">How will you use your new home? </label>
                <p>Investment property</p>
              </div>
              <div className="fieldInput">
                <label htmlFor="">Do you have a real estate agent? </label>
                <p>No</p>
              </div>
            </div>
            <div className="TimelinePart">
              <b>Timeline</b>
              <div className="fieldInput">
                <label htmlFor="">
                  When are you planning to make your home purchase?{" "}
                </label>
                <p>Immediately: I have a signed purchase agreement</p>
              </div>
              <div className="fieldInput">
                <label htmlFor="">Do you currently own a home? </label>
                <p>Yes, I currently own a home</p>
              </div>
              <div className="fieldInput">
                <label htmlFor="">
                  Do you plan to sell your current home before purchasing a new
                  one?{" "}
                </label>
                <p>No</p>
              </div>
            </div>
          </div>
          <div className="CenterContent">
            <div className="title">
              <b>Details</b>
            </div>
            <div className="fieldsSet">
              <div className="rightField">
                <div className="fieldInput">
                  <label htmlFor="">Do you currently own a home?</label>
                  <p>Yes, I currently own a home</p>
                </div>
                <div className="fieldInput">
                  <label htmlFor="">
                    How much of a down payment would you like to make?{" "}
                    {" (Estimate)"}
                  </label>
                  <p>15% {"(300,000 - 500,000)"}</p>
                </div>
                <div className="fieldInput">
                  <label htmlFor="">
                    What is your current employment status?
                  </label>
                  <p>Employed</p>
                </div>
                <div className="fieldInput">
                  <label htmlFor="">
                    What is your household gross {"(before taxes)"} annual
                    income?
                  </label>
                  <p>PHP1,000,000-800,000</p>
                </div>
              </div>
              <div className="leftField">
                <div className="fieldInput">
                  <label htmlFor="">
                    Have you declared bankruptcy in the last 4 years?
                  </label>
                  <p>No</p>
                </div>
                <div className="fieldInput">
                  <label htmlFor="">What is your current credit score?</label>
                  <p>Good {"(680-719)"}</p>
                </div>
                <div className="fieldInput">
                  <label htmlFor="">Where are you looking to buy?</label>
                  <p>Mandaue City, Cebu Philippines</p>
                </div>
              </div>
            </div>
          </div>
          <div className="BottomContent">
            <div className="title">
              <b>Wrap-Up</b>
            </div>
            <div className="fieldsWrapUp">
              <div className="fieldInput">
                <label htmlFor="">Email Address</label>
                <p>juandelacruz@gmail.com</p>
              </div>
              <div className="fieldInput">
                <label htmlFor="">Mobile Number</label>
                <p>09479992152</p>
              </div>
              <div className="fieldInput">
                <label htmlFor="">Name</label>
                <p>Juan Dela Cruz</p>
              </div>
              <div className="fieldInput">
                <label htmlFor="">ZIP Code</label>
                <p>6000</p>
              </div>
            </div>
          </div>
          <div style={{ width: "100%" }}>
            <div className="approval">
              <ApprovalComponent activeTab={activeTab} />
            </div>
          </div>
        </div>

        <FooterComponent />
      </div>
    </div>
  );
});

export default PreApprovalDetails;
