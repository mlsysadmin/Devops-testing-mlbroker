import React from "react";
import { Steps } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import "../../styles/listing-steps.css";

const { Step } = Steps;

const ListingSteps = ({ current, setCurrent, completedSteps }) => {
  const steps = [
    { title: "Property Details", index: 0 },
    { title: "Unit Details", index: 1 },
    { title: "Location ", index: 2 },
    { title: "Description ", index: 3 },
    { title: "Upload Photos", index: 4 },
    { title: "Feature ", index: 5 },
   
  ];

  const onChange = (value) => {
    setCurrent(value);
  };

  return (
    <div className="listing-steps-container">
      <div className="step-intro">
        <p className="p">Steps to complete your listing</p>
      </div>
      <Steps
        className="steps"
        current={current}
        onChange={onChange}
        direction="vertical"
      >
        {steps.map((step) => (
          <Step
            key={step.index}
            title={step.title}
            icon={completedSteps[step.index] ? <CheckOutlined className="check" /> : null}
            status={completedSteps[step.index] ? "finish" : "wait"}
          />
        ))}
      </Steps>
    </div>
  );
};

export default ListingSteps;
