import React, { useState, useRef } from "react";
import { Row, Col } from "antd";
import ListingSteps from "./seller-broker/ListingSteps";
import UnitDetails from "./seller-broker/UnitDetails";
import PropertyDetails from "./seller-broker/PropertyDetails";
import LocationDetails from "./seller-broker/LocationDetails";
import DescriptionDetails from "./seller-broker/DescriptionDetails";
import PhotoUpload from "./seller-broker/PhotoUpload";
import FeatureDetails from "./seller-broker/FeaturesDetails";
import ListingBanner from "./layout/ListingBanner";

const SellerListingForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState({});
  const formRefs = useRef([]);

  const steps = [
    { title: `Property Details`, component: PropertyDetails },
    { title: `Unit Details`, component: UnitDetails },
    { title: `Location`, component: LocationDetails },
    { title: `Description`, component: DescriptionDetails },
    { title: `Photos`, component: PhotoUpload },
    { title: `Features`, component: FeatureDetails },
  ];

  const handleStepComplete = (stepIndex, isComplete) => {
    setCompletedSteps((prev) => ({
      ...prev,
      [stepIndex]: isComplete,
    }));

    if (isComplete && stepIndex === currentStep) {
      setCurrentStep(currentStep + 1);
      if (formRefs.current[stepIndex + 1]) {
        formRefs.current[stepIndex + 1].scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  //dont know
//   const CurrentStepComponent = steps[currentStep].component;

  return (
    <Row style={{ margin: "8px 200px" }}>
      <ListingBanner />
      <Col span={6}>
        <ListingSteps
          steps={steps}
          currentStep={currentStep}
          completedSteps={completedSteps}
        />
      </Col>

      <Col span={18}>
        {steps.map((step, index) => {
          const StepComponent = step.component;
          return (
            <div key={index} ref={el => formRefs.current[index] = el}>
              <StepComponent 
                onComplete={(isComplete) => handleStepComplete(index, isComplete)}
              />
            </div>
          );
        })}
      </Col>
    </Row>
  );
};

export default SellerListingForm;
