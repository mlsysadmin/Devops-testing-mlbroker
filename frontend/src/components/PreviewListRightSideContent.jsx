import React, { useState, useEffect } from "react";
import { Flex, Progress, Slider, message, Button, Menu, Dropdown } from "antd";
import ApplicationDetailModal from "./layout/ApplicationDetails/ApplicationDetailsModal";
import iconcalcu from "../assets/icons/previewlisting/calculatorsign.png";
import icondollar from "../assets/icons/previewlisting/dollarcoin.png";
import mail from "../assets/icons/previewlisting/mailenvelope.png";
import user from "../assets/icons/previewlisting/usercircle.png";
import chat from "../assets/icons/previewlisting/chatmessages.png";
import call from "../assets/icons/previewlisting/callphone.png";
import WorkingOnItModal from "./ComingSoonComponent";
import "../styles/previewListing.css";
import { GetPropertiesBySaleStatus } from "../api/GetAllPublicListings";
import { GetPhotoWithUrl } from "../utils/GetPhoto";
import SemiRoundBtn from "./custom/buttons/SemiRoundBtn.custom";
import { useNavigate } from "react-router-dom";
import { SendEmailInquiry } from "../api/Public/Email.api";
import { notification } from "antd";

const PreviewListRightSideContent = ({ oneListing }) => {
  const [homePrice, setHomePrice] = useState(500000); // Set default value
  const [downPayment, setDownPayment] = useState(100000); // Set default value
  const [term, setTerm] = useState(30); // State for term
  const [stepsGap, setStepsGap] = useState(3); // Assume 3% as default interest rate

  const termInMonths = term * 12; // Convert term to months

  // Calculate total home price with interest
  const totalHomePrice = homePrice + homePrice * (stepsGap / 100);

  // Calculate monthly payment
  // const monthlyPayment = (totalHomePrice - downPayment) / termInMonths;

  const monthlyInterest = stepsGap / 100 / 12;
  const totalMonths = term * 12;

  const loanValue = homePrice - downPayment;
  const monthlyPayment =
    loanValue *
    ((monthlyInterest * Math.pow(1 + monthlyInterest, totalMonths)) /
      (Math.pow(1 + monthlyInterest, totalMonths) - 1));

  const [showApplicationDetailModal, setShowApplicationDetailModal] =
    useState(false);

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/comingsoon");
  };

  const handleCloseModal = () => {
    console.log("Closing modal");
    setShowApplicationDetailModal(false);
  };
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  //   const [publiclisting, setPublicListing] = useState([]);

  //   const allPublicListing = async () => {
  //     const res = await GetPropertiesBySaleStatus();
  //     const dataresp = res.data;
  //     setPublicListing(dataresp);
  //     console.log("public listing:", dataresp);
  //   };

  //   useEffect(() => {
  //     allPublicListing();
  //   }, []);

  //   const all = publiclisting.map((data) =>
  //     GetPhotoWithUrl(data.listings.photos.photo)
  //   );

  //   console.log("this is all", all);
  //   const [index, setIndex] = useState(0);

  //   const secImage = () => {
  //     setIndex((prevIndex) => (prevIndex + 1) % publiclisting.length);
  //   };

  //   const firstImage = () => {
  //     setIndex((prevIndex) =>
  //       prevIndex - 1 < 0 ? publiclisting.length - 1 : prevIndex - 1
  //     );
  //   };

  // Dropdown menu items for term selection
  const menu = (
    <Menu onClick={(e) => setTerm(parseInt(e.key))}>
      <Menu.Item key="30">30 Years Fixed</Menu.Item>
      <Menu.Item key="25">25 Years Fixed</Menu.Item>
      <Menu.Item key="20">20 Years Fixed</Menu.Item>
      <Menu.Item key="15">15 Years Fixed</Menu.Item>
      <Menu.Item key="10">10 Years Fixed</Menu.Item>
      <Menu.Item key="5">5 Years Fixed</Menu.Item>
    </Menu>
  );
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    listingTitle: oneListing.UnitName,
    propertyNo: oneListing.PropertyNo,
  });
  const [loading, setLoading] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    console.log("oneListing: ", oneListing);
    setContact((prev) => {
      return { ...prev, listingTitle: oneListing.UnitName, propertyNo: oneListing.PropertyNo }
    })
  }, [oneListing]);

  const openNotificationWithIcon = (type, message, description) => {
    api[type]({
      message: message,
      description: description,
      placement: "bottomRight",
      duration: type == "error" ? 10 : 10,
    });
  };
  const handleContactChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const handleKeyDownPhone = (e) => {
    // const philippineNumberRegex = /^(09|\+639)\d{9}$/;
    const philippineNumberRegex =
      /^[0-9]*\.?[0-9]*$/.test(e.key) || e.key == "Backspace";
    if (philippineNumberRegex) {
      return;
    }
    e.preventDefault();
  };
  const handleLoanClick = () => {
    navigate("/discover-home#calculatorRef");
  };
  const handleContactClick = async () => {
    try {
      const values = Object.values(contact);
      const keys = Object.keys(contact);
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (values.includes("")) {
        openNotificationWithIcon(
          "warning",
          `Required Field`,
          "Please fill in required fields."
        );
      } else if (
        keys.filter((key) => key == "email" && !emailRegex.test(contact[key]))
          .length !== 0
      ) {
        openNotificationWithIcon(
          "warning",
          `Invalid Value`,
          "Please provide a valid email address."
        );
      } else {

        setLoading(true);
        const sendEmailMessage = await SendEmailInquiry(contact);
        if (Object.keys(sendEmailMessage).length == 0) {
          throw new Error("error while sending a message");
        }
        openNotificationWithIcon(
          "success",
          `Message Sent`,
          "Your message has been sent."
        );
        setContact({
          name: "",
          email: "",
          message: "",
          phone: "",
          propertyNo: oneListing.PropertyNo,
          listingTitle: oneListing.UnitName
        });
        setLoading(false);
      }
    } catch (error) {
      openNotificationWithIcon(
        "error",
        "Message Failed",
        `We're sorry, but your message couldn't be sent. We're already working on resolving the issue. 
        Please try again later, or for immediate assistance, contact us at properties@mlhuillier.com or 380 300, local 11569.
        Thank you for your patience!`
      );
    }

    // window.location.href = "https://www.google.com/maps/place/capoocan+Leyte"
  };
  return (
    <div className="right-side-container">
      {contextHolder}
      {/* <div className="calculator">
        <h2>Calculator</h2>
        <div className="calc">
          <div className="calculatorLeft">
            <div className="calculator-input">
              <label>Term</label>
              <div className="calculator-field-term">
                <img
                  src={iconcalcu}
                  alt="Iconcalcu"
                  style={{
                    height: "15px",
                    width: "15px",
                    margin: "10px",
                    color: "black",
                  }}
                />
                <Dropdown overlay={menu} trigger={["click", "hover"]}>
                  <select
                    style={{ cursor: "pointer" }}
                    className="year-term-options"
                  >
                    <option className="year-term-options">
                      {term} Years Fixed
                    </option>
                  </select>
                </Dropdown>
              </div>
            </div>
            <div className="calculator-input">
              <label>Interest</label>
              <div className="calculator-field">
                <img
                  src={icondollar}
                  alt="Icondollar"
                  style={{
                    height: "15px",
                    width: "15px",
                    margin: "10px",
                    marginBottom: "30px",
                  }}
                />
                <div className="slider-container">
                  <div className="slider-value">{stepsGap}%</div>
                  <Slider
                    step={1}
                    min={1}
                    max={100}
                    value={stepsGap}
                    onChange={setStepsGap}
                    trackStyle={{ backgroundColor: "black" }}
                    handleStyle={{
                      borderColor: "black",
                      backgroundColor: "black",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="calculator-input">
              <label>Home Price</label>
              <div className="calculator-field">
                <img
                  src={icondollar}
                  alt="Icondollar"
                  style={{
                    height: "15px",
                    width: "15px",
                    margin: "10px",
                    marginBottom: "30px",
                  }}
                />
                <div className="slider-container">
                  <div className="slider-value">
                    PHP {homePrice.toLocaleString()}
                  </div>
                  <Slider
                    step={10000}
                    min={500000}
                    max={10000000}
                    value={homePrice}
                    onChange={setHomePrice}
                    trackStyle={{ backgroundColor: "black" }}
                    handleStyle={{
                      borderColor: "red",
                      backgroundColor: "red",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="calculator-input">
              <label>Down Payment</label>
              <div className="calculator-field">
                <img
                  src={icondollar}
                  alt="Icondollar"
                  style={{
                    height: "15px",
                    width: "15px",
                    margin: "10px",
                    marginBottom: "30px",
                  }}
                />
                <div className="slider-container">
                  <div className="slider-value">
                    PHP {downPayment.toLocaleString()}
                  </div>
                  <Slider
                    step={5000}
                    min={100000}
                    max={homePrice}
                    value={downPayment}
                    onChange={setDownPayment}
                    trackStyle={{ backgroundColor: "black" }}
                    handleStyle={{
                      borderColor: "black",
                      backgroundColor: "black",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="calculatorRight">
            <div className="int">
              <b>{term}</b>
              <p>Years Fixed</p>
            </div>
            <div className="exp">
              <b>{stepsGap}%</b>
              <p>Interest</p>
            </div>
            <Progress
              type="circle"
              percent={100}
              format={() => (
                <div>
                  <div className="pesos">PHP {monthlyPayment.toFixed(2)}</div>
                  <div className="per-month">per month</div>
                </div>
              )}
              strokeColor="#D90000"
            />
            <div className="calculator-result">
              <p className="pi">Principal and Interest</p>
              <div className="result-amount">
                <span className="red-bar"></span>
                PHP {monthlyPayment.toFixed(2)}
              </div>
            </div>
          </div>
        </div>
        <button className="apply-button" onClick={handleButtonClick}>
          APPLY NOW
        </button>
      </div> */}

      <div className="contact-us">
        <h2>Contact Us</h2>
        <div className="contact-input">
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => handleContactChange(e)}
            value={contact.name}
            name="name"
          />
        </div>
        <div className="contact-input">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => handleContactChange(e)}
            value={contact.email}
            name="email"
          />
        </div>
        <div className="contact-input">
          <input
            type="text"
            placeholder="Phone Number"
            onChange={(e) => handleContactChange(e)}
            onKeyDown={(e) => handleKeyDownPhone(e)}
            value={contact.phone}
            name="phone"
          />
        </div>
        <div className="contact-textarea">
          <textarea
            name="message"
            onChange={(e) => handleContactChange(e)}
            value={contact.message}
            placeholder={`I am interested in ${oneListing.UnitName}`}
            rows={2}
          />
        </div>
        <SemiRoundBtn
          label={"Send Message"}
          size={"large"}
          handleClick={handleContactClick}
          className={"send-message-button"}
        />
        <SemiRoundBtn
          label={"Loan Calculator"}
          size={"large"}
          handleClick={handleLoanClick}
          className={"loan-calculator-button"}
        />
        {/* <button className="send-message-button">Send Message</button> */}
      </div>
      {/* {showApplicationDetailModal && (
				<ApplicationDetailModal
					visible={showApplicationDetailModal}
					onClose={handleCloseModal}
					setShowApplicationDetailModal={setShowApplicationDetailModal}
				/>
			)} */}
      {/* {showModal && (
				<WorkingOnItModal isOpen={showModal} onClose={toggleModal} />
			)} */}
    </div>
  );
};

export default PreviewListRightSideContent;
