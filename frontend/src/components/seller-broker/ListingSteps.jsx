import React, { useState } from "react";
import { Steps } from 'antd';
import { CheckCircleFilled } from "@ant-design/icons";


const { Step } = Steps;

const ListingSteps = ({ steps, currentStep, completedSteps }) => {
  return (
    <Steps direction="vertical" current={currentStep}>
      {steps.map((step, index) => (
        <Step 
          key={index} 
          title={step.title}
          icon={completedSteps[index] ? <CheckCircleFilled />: null}
          />
      ))}
    </Steps>
  )
}

export default ListingSteps;