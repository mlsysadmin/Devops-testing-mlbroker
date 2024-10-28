import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BannerDenied from "../components/BannerDenied";
import ListingDenied from "./layout/ListingDenied";
import ListingSteps from "./layout/ListingSteps";
import Footer from "./MY Drafts/Components/FooterComponent";
import PropertyDetailsComponent from "./PropertyDetailsComponent";
import UnitDetailsComponent from "./UnitDetailsComponent";
import LocationDetailsComponent from "./LocationDetailsComponent";
import DescriptionDetailsComponent from "./DecriptionDetailsComponent";
import UploadPhotosComponent from "./UploadPhotosComponent";
import FeaturedComponents from "./FeatureListComponents";
import "../styles/listing-form.css";

export const ShowDetailsDenied = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState({});
  const stepRefs = useRef([]);
  const navigate = useNavigate();
  const [selectedSellingPrice, setSelectedSellingPrice] = useState("");
  const [priceInputError, setPriceInputError] = useState("");
  const [floorAreaInputError, setFloorAreaInputError] = useState("");
  const [pricePerSqmInputError, setPricePerSqmInputError] = useState("");
  const [discPriceInputError, setDiscPriceInputError] = useState("");
  const [lotAreaInputError, setLotAreaInputError] = useState("");
  const [propIdInputError, setPropIdInputError] = useState("");

  const [showSuccessfulMsgModal, setShowSuccessfulMsgModal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleStepComplete = (stepIndex, isComplete) => {
    setCompletedSteps((prev) => ({
      ...prev,
      [stepIndex]: isComplete,
    }));

    if (isComplete && stepIndex === currentStep) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);

      if (stepIndex === 5) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (stepRefs.current[nextStep]) {
        stepRefs.current[nextStep].scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleSellingPriceClick = (price) => {
    setSelectedSellingPrice(price);
  };

  const handleModalClose = () => {
    setShowSuccessfulMsgModal(false);
  };

 

  return (
    <>
      <div className="ContentContainer">
        <div>
        <BannerDenied />
        </div>
        <div className="listing-application">
          <div className="listing-steps">
          <ListingDenied />
          </div>
          <div className="listing-form">
            <div className="listing-form-application">
              <div ref={(el) => (stepRefs.current[0] = el)}>
                <PropertyDetailsComponent
                  onComplete={(completed) => handleStepComplete(0, completed)}
                />
              </div>
              <div ref={(el) => (stepRefs.current[1] = el)}>
                <UnitDetailsComponent
                  onComplete={(completed) => handleStepComplete(1, completed)}
                  priceInputError={priceInputError}
                  setPriceInputError={setPriceInputError}
                  selectedSellingPrice={selectedSellingPrice}
                  handleSellingPriceClick={handleSellingPriceClick}
                  floorAreaInputError={floorAreaInputError}
                  setFloorAreaInputError={setFloorAreaInputError}
                  pricePerSqmInputError={pricePerSqmInputError}
                  setPricePerSqmInputError={setPricePerSqmInputError}
                  discPriceInputError={discPriceInputError}
                  setDiscPriceInputError={setDiscPriceInputError}
                  lotAreaInputError={lotAreaInputError}
                  setLotAreaInputError={setLotAreaInputError}
                  propIdInputError={propIdInputError}
                  setPropIdInputError={setPropIdInputError}
                />
              </div>
              <div ref={(el) => (stepRefs.current[2] = el)}>
                <LocationDetailsComponent
                  onComplete={(completed) => handleStepComplete(2, completed)}
                />
              </div>
              <div ref={(el) => (stepRefs.current[3] = el)}>
                <DescriptionDetailsComponent
                  onComplete={(completed) => handleStepComplete(3, completed)}
                />
              </div>
              <div ref={(el) => (stepRefs.current[4] = el)}>
                <UploadPhotosComponent
                  onComplete={(completed) => handleStepComplete(4, completed)}
                />
              </div>
              <div ref={(el) => (stepRefs.current[5] = el)}>
                <FeaturedComponents
                  onComplete={(completed) => handleStepComplete(5, completed)}
                />
              </div>
              {/* <p style={{ fontWeight: "500" }}>
                By proceeding, I agree and review that all information are
                correct.
              </p> */}
              {/* <div className="buttonSubmit">
                <button
                  type="submit"
                  onClick={() => setShowSuccessfulMsgModal(true)}
                >
                  Submit Application
                </button>
                {showSuccessfulMsgModal && (
                  <div className="modal-overlay" onClick={handleModalClose}>
                    <div
                      className="modal-content"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <h2 className="modalsuccess-header">
                        Successfully Submitted!
                      </h2>
                      <div className="success-details">
                        <p>
                          Waiting for Approval. Your listing has been submitted
                          and will undergo screening.
                        </p>
                        <button
                          className="buttonkyc"
                          onClick={handlePreviewListing}
                        >
                          Preview Listing
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShowDetailsDenied;
