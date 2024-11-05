import React, { useState, useEffect, useRef } from "react";
import { Steps, Menu, Dropdown, Slider, notification } from "antd";
import MainLayout from "./layout/layout.component";
import SubmitApplicationCustom from "./custom/application/submitapplication.custom";
import FooterComponent from "./layout/FooterComponent";
import WrapUpDetails from "./custom/application/wrapup.custom";
import CustomMlFooter from "./custom/Custom.Mlfooter";
import "../styles/refinance.css";
import RoundBtn from "./custom/buttons/RoundBtn.custom";
import SemiRoundBtn from "./custom/buttons/SemiRoundBtn.custom";
import { SendRefinance } from "../api/Public/Email.api";

const RefinanceComponent = () => {
  const { Step } = Steps;
  const [current, setCurrent] = useState(0);
  const [completedSteps, setCompletedSteps] = useState({
    property: false,
    loan: false,
    details: false,
    wrapUp: false,
  });

  const loanGroupRef = useRef(null);
  const PropertyGroupRef = useRef(null);
  const DetailsGroupRef = useRef(null);
  const WrapUpGroupRef = useRef(null);

  // Property state
  const [refPropquest1, setRefPropQuest1] = useState("");
  const [refPropquest2, setRefPropQuest2] = useState("");
  const [selectedDropdownOption, setSelectedDropdownOption] = useState("");
  const [selectedbtnprop, setsSelectedbtnprop] = useState("");
  const [refinanceAmount, setRefinanceAmount] = useState("");

  // Loan state
  const [loanAmount, setLoanAmount] = useState("");
  const [additionalLoanAmount, setAdditionalLoanAmount] = useState("");

  // Details state
  const [empStatus, setEmplStatus] = useState("");
  const [annualInc, setAnnualInc] = useState("");
  const [bankcruptcyStat, setBankcruptcyStat] = useState("");
  const [mortpayments, setMortPayments] = useState("");
  const [creditscore, setCreditScore] = useState("");
  const [homeLocation, setHomeLocation] = useState("");

  const [customerInfo, setCustomerInfo] = useState({
    mobile_number: "",
    email: "",
    last_name: "",
    first_name: "",
    country: "Philippines",
    province: "",
    city: "",
    zipcode: "",
    others: "",
    source_of_income: "",
  });
  // Wrap-up state
  const [isWrapUpComplete, setIsWrapUpComplete] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const [loading, setLoading] = useState(false);

  const formatNumberWithCommas = (num) => {
    const cleanedNum = num.replace(/[^0-9.]/g, "");
    const parts = cleanedNum.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  };
  const isValidEmail = (email) => {
    // Regular expression for validating an email address
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(email);
    if (!emailPattern) {
      return false;
    }else{ 
      return true;
    }
  };
  const handleKeyDown = (e) => {
    // Regular expression to allow letters and symbols only
    const validInputPattern = /^[A-Za-z\s!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;

    // Check if the key pressed is valid
    if (!validInputPattern.test(e.key) && e.key !== 'Backspace' && e.key !== 'Tab') {
      e.preventDefault(); // Prevent the default action if the key is invalid
    }
  };
  // Property handlers
  const handleRefPropQuest1 = (option) => {
    setRefPropQuest1(option);
    // if (option) setCompletedSteps((prev) => ({ ...prev, property: true }));
  };

  const handleRefPropQuest2 = (option) => {
    setRefPropQuest2(option);
  };

  const handleRefinanceAmountChange = (value) => {
    const refinanceValue = formatNumberWithCommas(value);
    setRefinanceAmount(refinanceValue);
  };

  const handlefourthquestprop = (option) => {
    setsSelectedbtnprop(option);
  };
  const handleDropdownOptionChange = (e) => {
    const selectedValue = e.target.value;
    console.log("Selected value: ", selectedValue);
    setSelectedDropdownOption(selectedValue);
  };

  // Loan handlers
  const handleLoanAmountChange = (value) => {
    const loanAmountValue = formatNumberWithCommas(value);
    setLoanAmount(loanAmountValue);
  };
  const handleAdditionalLoanAmountChange = (value) => {
    const additionalAmountValue = formatNumberWithCommas(value);
    setAdditionalLoanAmount(additionalAmountValue);
  };

  // Details handlers
  const handleEmploymentStatus = (option) => {
    setEmplStatus(option);
  };

  const handleAnnualIncome = (option) => {
    setAnnualInc(option);
  };

  const handleBankcrutpcyStatus = (option) => {
    setBankcruptcyStat(option);
  };

  const handleMortgagePayments = (option) => {
    setMortPayments(option);
  };

  const handleCreditScore = (option) => {
    setCreditScore(option);
  };

  // Scroll handler
  const onChange = (value) => {
    setCurrent(value);
    if (value === 0) {
      PropertyGroupRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (value === 1) {
      loanGroupRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (value === 2) {
      DetailsGroupRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (value === 3) {
      WrapUpGroupRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const propertyGroupRect =
        PropertyGroupRef.current.getBoundingClientRect();
      const loanGroupRect = loanGroupRef.current.getBoundingClientRect();
      const detailsGroupRect = DetailsGroupRef.current.getBoundingClientRect();
      const wrapUpGroupRect = WrapUpGroupRef.current.getBoundingClientRect();

      if (scrollTop >= propertyGroupRect.top && scrollTop < loanGroupRect.top) {
        setCurrent(0);
      } else if (
        scrollTop >= loanGroupRect.top &&
        scrollTop < detailsGroupRect.top
      ) {
        setCurrent(1);
      } else if (
        scrollTop >= detailsGroupRect.top &&
        scrollTop < wrapUpGroupRect.top
      ) {
        setCurrent(2);
      } else if (scrollTop >= wrapUpGroupRect.top) {
        setCurrent(3);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [PropertyGroupRef, loanGroupRef, DetailsGroupRef, WrapUpGroupRef]);

  useEffect(() => {
    if (isWrapUpComplete) {
      setCompletedSteps((prev) => ({ ...prev, wrapUp: isWrapUpComplete }));
    } else {
      setCompletedSteps((prev) => ({ ...prev, wrapUp: isWrapUpComplete }));
    }
  }, [isWrapUpComplete]);

  const buttonGroup1 = [
    "Single family",
    "Multi-family",
    "Town home",
    "Condominium",
    "Mobile/Manufactured",
    "New construction",
  ];
  const buttonGroup4 = [
    "Less than 50,000",
    "PHP100,000-50,000",
    "PHP300,000-200,000",
    "PHP500,000-400,000",
    "PHP700,000-600,000",
    "PHP1,000,000-800,000",
    "Greater than 2,000,000",
  ];

  const buttonGroup2 = [
    "Primary residence",
    "Secondary/Vacation",
    "Investment property",
  ];
  const buttonGroup3 = [
    "Primary residence",
    "Secondary/Vacation",
    "Investment property",
  ];

  const property = {
    reason: refPropquest1,
    property_type: refPropquest2,
    interest: selectedDropdownOption,
    property_usage: selectedbtnprop,
    estimated_price: refinanceAmount,
    loan_balance: loanAmount,
    cash_take_out: additionalLoanAmount,
    employment_status: empStatus,
    annual_income: annualInc,
    declared_bankruptcy: bankcruptcyStat,
    late_mortgage_payments: mortpayments,
    current_credit_score: creditscore,
    home_location: homeLocation,
  };
  const isFormValid = () => {
    const isPropertyEmpty = Object.values(property).some((value) => !value);
    const isCustomerInfoEmpty = Object.values(customerInfo).some(
      (value) => !value
    );
    return !isPropertyEmpty && !isCustomerInfoEmpty;
  };

  //Trigger Steps for Property
  useEffect(() => {
    const isAnyFieldEmptyForProperty =
      refPropquest1 === "" ||
      refPropquest2 === "" ||
      selectedDropdownOption === "" ||
      selectedbtnprop === "" ||
      refinanceAmount === "";

    if (!isAnyFieldEmptyForProperty) {
      setCompletedSteps((prev) => ({ ...prev, property: true }));
    } else {
      setCompletedSteps((prev) => ({ ...prev, property: false }));
    }
  }, [
    refPropquest1,
    refPropquest2,
    selectedDropdownOption,
    selectedbtnprop,
    refinanceAmount,
  ]);

  //Trigger Steps for Loans
  useEffect(() => {
    const isAnyFieldEmptyForLoans =
      loanAmount === "" || additionalLoanAmount === "";

    if (!isAnyFieldEmptyForLoans) {
      setCompletedSteps((prev) => ({ ...prev, loan: true }));
    } else {
      setCompletedSteps((prev) => ({ ...prev, loan: false }));
    }
  }, [loanAmount, additionalLoanAmount]);

  //Trigger Steps for Details
  useEffect(() => {
    const isAnyFieldEmptyForDetails =
      empStatus === "" ||
      annualInc === "" ||
      bankcruptcyStat === "" ||
      mortpayments === "" ||
      creditscore === "" ||
      homeLocation === "";

    if (!isAnyFieldEmptyForDetails) {
      setCompletedSteps((prev) => ({ ...prev, details: true }));
    } else {
      setCompletedSteps((prev) => ({ ...prev, details: false }));
    }
  }, [
    empStatus,
    annualInc,
    bankcruptcyStat,
    mortpayments,
    creditscore,
    homeLocation,
  ]);

  //Trigger Steps for Wrap Up
  useEffect(() => {
    if (isWrapUpComplete) {
      setCompletedSteps((prev) => ({ ...prev, wrapUp: isWrapUpComplete }));
    } else {
      setCompletedSteps((prev) => ({ ...prev, wrapUp: isWrapUpComplete }));
    }
  }, [isWrapUpComplete]);

  const handleSubmitApplication = async () => {
    const combinedProperty = { ...property, ...customerInfo };
    const keys = Object.keys(combinedProperty);
    const values = Object.values(combinedProperty);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (
      values.includes("") ||
      values.includes(null) ||
      values.includes(undefined)
    ) {
      openNotificationWithIcon(
        "warning",
        `Required Field`,
        "Please fill in required fields."
      );
    } else if (
      keys.filter(
        (key) => key == "email" && !emailRegex.test(combinedProperty[key])
      ).length !== 0
    ) {
      openNotificationWithIcon(
        "warning",
        `Invalid Value`,
        "Please provide a valid email address."
      );
    } else {
      // Call API to submit application
      setLoading(true);
      await submitApplication(combinedProperty);
    }
  };

  const openNotificationWithIcon = (type, message, description) => {
    api[type]({
      message: message,
      description: description,
      placement: "bottomRight",
      duration: type == "error" ? 4 : 3,
    });
  };

  useEffect(() => {
    console.log("selectedDropdownOption: ", selectedDropdownOption);
  }, []);
  const submitApplication = async (combinedProperty) => {
    try {
      const preApproved = await SendRefinance(combinedProperty);

      console.log("preapproved", preApproved);

      openNotificationWithIcon(
        "success",
        "Success",
        "Great news! Your Pre-Approval Application has been successfully submitted. We’ll review it and get back to you shortly. Thanks for choosing us!"
      );
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      openNotificationWithIcon(
        "error",
        ``,
        `We're sorry, but your application couldn't be sent. 
				We're already working on resolving the issue. Thank you for your patience!`
      );
    }
  };

  return (
    <div className="refinance-container">
      {contextHolder}
      <div className="refinance-content">
        <div className="refinance-group-one">
          <Steps
            current={current}
            onChange={onChange}
            percent={100}
            labelPlacement="vertical"
            size="small"
            className="custom-steps"
          >
            <Step
              title="Property"
              status={completedSteps.property ? "finish" : "wait"}
            />
            <Step
              title="Loan"
              status={completedSteps.loan ? "finish" : "wait"}
            />
            <Step
              title="Details"
              status={completedSteps.details ? "finish" : "wait"}
            />
            <Step
              title="WrapUp"
              status={completedSteps.wrapUp ? "finish" : "wait"}
            />
          </Steps>
        </div>
        <br />
        <div className="refinance-property-group" ref={PropertyGroupRef}>
          <div className="refinance-property-group-one">
            <h4>Property</h4>
            <span>Why do you want to refinance?</span>
            <div className="ref-btn-group">
              {[
                "Take cash out of home",
                "Pay off debts",
                "Lower my monthly payment",
              ].map((option, index) => (
                <button
                  key={index}
                  className={`ref-prop-btn ${
                    refPropquest1 === option ? "active" : `${option}`
                  }`}
                  onClick={() => handleRefPropQuest1(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <div className="refinance-property-group-two">
            <span>What is your current mortgage interest rate?</span>
            <div className="ref-btn-group">
              {/* <Dropdown overlay={menu}>
                <button
                  className="ref-dropdown"
                //   onClick={handleDropdownOptionClick}
                  style={{ padding: "0px 0px 0px 20px", color: "black" }}
                >
                  {selectedDropdownOption ||
                    "Select your current interest rate"}
                  <span
                    style={{
                      padding: "0px 15px 0px 0px",
                      fontWeight: "200",
                      color: "#8C9094",
                    }}
                  >
                    v
                  </span>
                </button>
              </Dropdown> */}
              <div className="wrap-up--selection">
                <select
                  className="ref-dropdown"
                  name="select_your_current_interest_rate"
                  value={selectedDropdownOption}
                  onChange={handleDropdownOptionChange}
                >
                  <option value="" disabled hidden>
                    Select your current interest rate
                  </option>
                  <option value="15%">15%</option>
                  <option value="20%">20%</option>
                  <option value="25%">25%</option>
                </select>
              </div>
            </div>
          </div>
          <div className="refinance-property-group-three">
            <span>Why do you want to refinance?</span>
            <div className="ref-btn-group">
              {buttonGroup1.map((button, index) => (
                <button
                  key={index}
                  className={`ref-prop-btn ${
                    refPropquest2 === button ? "active" : ""
                  }`}
                  onClick={() => handleRefPropQuest2(button)}
                >
                  {button}
                </button>
              ))}
            </div>
          </div>
          <div className="refinance-property-group-four">
            <span>How will you use your new home?</span>
            <div className="ref-btn-group">
              {buttonGroup2.map((button, index) => (
                <button
                  key={index}
                  className={`ref-prop-btn ${
                    selectedbtnprop === button ? "active" : ""
                  }`}
                  onClick={() => handlefourthquestprop(button)}
                >
                  {button}
                </button>
              ))}
            </div>
          </div>
          <div className="refinance-property-group-five">
            <span>What is the value of your home?</span>
            <span className="estimate">(an estimate is fine)</span>
            <div className="ref-btn-group">
              <input
                className="amount-input-field-refinance"
                placeholder="Amount"
                value={refinanceAmount}
                onChange={(e) => handleRefinanceAmountChange(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Backspace" || e.key === "Delete") {
                    return; // Allow backspace and delete keys to work as expected
                  }
                  if (!/\d/.test(e.key)) {
                    e.preventDefault(); // Prevent non-numeric characters from being entered
                  }
                }}
              />
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="refinance-loan-group" ref={loanGroupRef}>
          <div className="refinance-loan-group-one">
            <h4>Loans</h4>
            <span>What's your remaining balance of your current loan?</span>
            <span className="estimate">(an estimate is fine)</span>
            <div className="ref-btn-group">
              <input
                placeholder="PHP"
                value={loanAmount}
                onChange={(e) => handleLoanAmountChange(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Backspace" || e.key === "Delete") {
                    return; // Allow backspace and delete keys to work as expected
                  }
                  if (!/\d/.test(e.key)) {
                    e.preventDefault(); // Prevent non-numeric characters from being entered
                  }
                }}
              />
            </div>
          </div>
          <div className="refinance-loan-group-two">
            <span>How much additional cash would you like to take out?</span>
            <span className="estimate">
              You may be able to take out as much as PHP50,000
            </span>
            <div className="ref-btn-group">
              <input
                placeholder="PHP"
                value={additionalLoanAmount}
                onChange={(e) =>
                  handleAdditionalLoanAmountChange(e.target.value)
                }
                onKeyDown={(e) => {
                  if (e.key === "Backspace" || e.key === "Delete") {
                    return; // Allow backspace and delete keys to work as expected
                  }
                  if (!/\d/.test(e.key)) {
                    e.preventDefault(); // Prevent non-numeric characters from being entered
                  }
                }}
              />
            </div>
            {/* Remove the button */}
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="refinance-details-group" ref={DetailsGroupRef}>
          <div className="refinance-details-group-one">
            <h4>Details</h4>
            <span>What is your current employment status?</span>
            <div className="ref-btn-group">
              {["Employed", "Self-employed", "Retired", "Not employed"].map(
                (status, index) => (
                  <button
                    key={index}
                    className={`ref-prop-btn ${
                      empStatus === status ? "active" : `${status}`
                    }`}
                    onClick={() => handleEmploymentStatus(status)}
                  >
                    {status}
                  </button>
                )
              )}
            </div>
          </div>
          <div className="refinance-details-group-two">
            <span>
              What is your household gross (before taxes) annual income?
            </span>
            <div className="ref-btn-group-two">
              {buttonGroup4.map((button, index) => (
                <button
                  key={index}
                  className={`ref-prop-btn ${
                    annualInc === button ? "active" : ""
                  }`}
                  onClick={() => handleAnnualIncome(button)}
                >
                  {button}
                </button>
              ))}
            </div>
          </div>
          <div className="refinance-details-group-three">
            <span>Have you declared bankruptcy in the last 4 years?</span>
            <div className="ref-btn-group">
              {["No", "Yes"].map((answer, i) => (
                <button
                  key={i}
                  className={`ref-prop-btn ${
                    bankcruptcyStat === answer ? "active" : ""
                  }`}
                  onClick={() => handleBankcrutpcyStatus(answer)}
                >
                  {answer}
                </button>
              ))}
            </div>
          </div>
          <div className="refinance-details-group-four">
            <span>
              Have you made any late mortgage payments in the last 12 months?
            </span>
            <div className="ref-btn-group">
              {["No", "Yes"].map((answer, i) => (
                <button
                  key={i}
                  className={`ref-prop-btn ${
                    mortpayments === answer ? "active" : ""
                  }`}
                  onClick={() => handleMortgagePayments(answer)}
                >
                  {answer}
                </button>
              ))}
            </div>
          </div>
          <div className="refinance-details-group-five">
            <span>What is your credit score range?</span>
            <div className="ref-btn-group-five">
              {[
                "Excellent (720+)",
                "Good (680-719)",
                "Fair (660-679)",
                "Below average (620-659)",
                "Poor (520-619)",
                "Bad (Below 580)",
              ].map((score, index) => (
                <button
                  key={index}
                  className={`ref-prop-btn ${
                    creditscore === score ? "active" : ""
                  }`}
                  onClick={() => handleCreditScore(score)}
                >
                  {score}
                </button>
              ))}
            </div>
          </div>
          <div className="refinance-details-group-six">
            <span>Where are you looking to buy?</span>
            <p>
              Enter the city or zip code of the area where you are home shopping
            </p>
            <div className="ref-btn-group-input">
              <div className="ref-btn-group">
                <input
                  type="text"
                  placeholder="City or zip code"
                  value={homeLocation}
                  onChange={(e) => setHomeLocation(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="refinance-wrap-up-group" ref={WrapUpGroupRef}>
          <WrapUpDetails
            setWrapUpComplete={setIsWrapUpComplete}
            setCustomerInfo={setCustomerInfo}
            customerInfo={customerInfo}
          />
        </div>
        <br />
        <br />
        <br />
        <span
          style={{
            fontSize: "18px",
            color: "#8C9094",
            width: "79%",
            margin: "auto",
            textAlign: "center",
          }}
        >
          By submitting, I agree my information may be shared and that I may be
          contacted at this number including through emails. I agree to the
          privacy policy and terms.
        </span>
        <SemiRoundBtn
          label={"Submit Pre-approval"}
          className="submit-pre-approval round-btn"
          handleClick={handleSubmitApplication}
          loading={loading}
          disabled={!isFormValid()}
        />
        {/* <SubmitApplicationCustom /> */}
      </div>
      <div>
        <CustomMlFooter />
        <FooterComponent />
      </div>
    </div>
  );
};

export default RefinanceComponent;
