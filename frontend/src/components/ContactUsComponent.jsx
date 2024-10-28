import React from "react";
import "../styles/contactUs.css";
import map from "../asset/icons/map.png";
import logo from "../asset/icons/logo.png";
import { useState } from "react";
import { Button, notification } from "antd";
import {
  FooterComponent,
  CustomMlFooter,
  ListingSearch,
  MainLayout,
} from "../components";
import { SendEmailInquiry, SendEmailMessage } from "../api/Public/Email.api";
import { ArrowRightOutlined } from "@ant-design/icons";
const ContactUsComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [api, contextHolder] = notification.useNotification();
  const [loading, setLoading] = useState(false);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const accordionData = [
		{
			label:
				"What services does MLhuillier Properties Realty & Brokerage offer?",
			answer:
				"We specialize in selling properties for individuals and corporations, project selling for real estate developers, and offering rental properties.",
		},
		{
			label: "How can I list my property with MLhuillier?",
			answer:
				"You can manually upload your listings through our website or visit any of our branches for assistance in maximizing your property's exposure.",
		},
		{
			label: "What is the project selling?",
			answer:
				"Project selling involves marketing and selling properties within a development project, benefiting developers by showcasing their projects to potential buyers.",
		},
	];

  const openNotificationWithIcon = (type, message, description) => {
    api[type]({
      message: message,
      description: description,
      placement: 'bottomRight',
      duration: type == "error" ?  4 : 3
    });
  };

  const handleContactClick = async () => {
    try {
      const values = Object.values(contact);
      const keys = Object.keys(contact);
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (values.includes("")) {
        openNotificationWithIcon('warning', `Required Field`, 'Please fill in required fields.');
      } else if (keys.filter((key) => key == 'email' && !emailRegex.test(contact[key])).length !== 0) {

        openNotificationWithIcon('warning', `Invalid Value`, 'Please provide a valid email address.');
      } else {

        setLoading(true)

        const sendEmailMessage = await SendEmailMessage(contact);

        console.log("response", sendEmailMessage);

        if (Object.keys(sendEmailMessage).length == 0) {
          throw new Error('error while sending a message');
        }
        
        openNotificationWithIcon('success', `Message Sent`, 'Your message has been sent.');
        setContact({
          name: "",
          email: "",
          message: "",
          phone: ""
        })
        setLoading(false);
      }

    } catch (error) {
      openNotificationWithIcon('error', 'Message Failed', "We're sorry, but your message couldn't be sent. We're already working on resolving the issue. Thank you for your patience!")
	  setLoading(false);
    
	}

    // window.location.href = "https://www.google.com/maps/place/capoocan+Leyte"
  }

  const handleContactChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });

  }

  const handleKeyDownPhone = (e) => {
    // const philippineNumberRegex = /^(09|\+639)\d{9}$/;

    const philippineNumberRegex = /^[0-9]*\.?[0-9]*$/.test(e.key) || e.key == "Backspace";

    if (philippineNumberRegex) {
      return;
    }

    e.preventDefault();

  }
  return (
		<div>
			{contextHolder}
			<div className="contactUsContainer">
				<div className="banner">
					<span className="bannerTitle">Let{"'"}s chat, Reach Out to Us</span>
					<p className="bannerSubTitle">
						Please feel free to send us your inquiry, we will revert you within
						24 hours.
					</p>
				</div>
				<div className="contact-field">
					<div className="field-container">
						<div className="inputFields">
							<div id="inputField">
								<div id="input-header">
									<h1>Get in Touch</h1>
									<p>You can reach us anytime</p>
								</div>
								<input
									type="text"
									className="name"
									placeholder="Name"
									onChange={(e) => handleContactChange(e)}
									value={contact.name}
									name="name"
								/>
								<input
									type="email"
									className="input"
									placeholder="Email Address"
									onChange={(e) => handleContactChange(e)}
									value={contact.email}
									name="email"
								/>
								<input
									type="text"
									className="input"
									placeholder="Phone Number"
									onChange={(e) => handleContactChange(e)}
									onKeyDown={(e) => handleKeyDownPhone(e)}
									value={contact.phone}
									name="phone"
								/>
								<textarea
									name="message"
									id="messageField"
									placeholder="Type your message in here..."
									rows={5}
									onChange={(e) => handleContactChange(e)}
									value={contact.message}
								></textarea>
								<Button
									id="messagebtn"
									type="primary"
									onClick={handleContactClick}
									loading={loading}
								>
									Send Message
								</Button>
							</div>
							<div className="contactInfos">
								<div id="contactInfos">
									<h2>Customer Support</h2>
									<p id="customercare">customercare@mlhuillier.com</p>
									<div className="phone-num">
										<div>
											<p>0947-999-0337 </p>
											<p>0947-999-2472 </p>
											<p>0947-999-2721</p>
										</div>
										<div>
											<p>0947-999-0522</p>
											<p>0917-871-2973</p>
										</div>
									</div>
									<p>properties@mlhuillier.com</p>
									<div className="phone-num">
										<div>
											<p>
												<span style={{ fontWeight: "600" }}>Landline:</span>
												<br />
												380 3000
											</p>
										</div>
										<div>
											<p>
												<span style={{ fontWeight: "600" }}>Local:</span>
												<br />
												11569
											</p>
										</div>
									</div>
									<div id="foreignContact">
										<h4>USA</h4>
										<p>1-877-688-4588</p>
									</div>
								</div>
								<div id="others">
									<p>
										<span style={{ fontWeight: "bold" }}>Opening Hours:</span>{" "}
										<span style={{ fontWeight: "bold", color: "red  " }}>
											8AM - 5PM
										</span>{" "}
										Everyday{" "}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="contactUsContent">
					<div className="location">
						<p className="location-header">Our Location</p>
						<div className="location-container">
							<h3 id="location">Connecting Near and Far</h3>
							<p className="pinned-location">
								M Lhuillier Financial Services Inc. <br /> B. Benedicto St, Cebu
								City,
								<br />
								6000 Cebu
							</p>
						</div>
					</div>
					<div className="map">
						<div className="pinned">
							<p>
								{" "}
								<img src={logo} alt="" /> M Lhuillier Financial <br />
								Services Inc.
							</p>
							<p>Main Office</p>
						</div>
						<img src={map} id="map" alt="" />
					</div>
				</div>
				<div className="FAQs-container">
					<div className="questions">
						{accordionData.map((item, index) => (
							<div key={index}>
								<div
									className="dropdown-label"
									onClick={() => toggleAccordion(index)}
									style={{
										backgroundColor: activeIndex === index ? "white" : "white",
										display: activeIndex === index ? "flex" : "flex",
										flexDirection: activeIndex === index ? "column" : "row",
										padding: "16px",
									}}
								>
									{item.label}
									{activeIndex === index && (
										<div
											className="dropdown-content"
											style={{ height: "auto", fontWeight: "lighter" }}
										>
											{item.answer}
										</div>
									)}
								</div>
							</div>
						))}
					</div>
					<div className="FAQs">
						<div id="FAQs">
							<p>FAQ</p>
						</div>
						<div id="questions">
							<h2>
								Do you have any <br />
								questions for us?
							</h2>
						</div>
						<div id="sub-info">
							<p>
								If there are question you want to ask.
								<br /> We will answer all your question.
							</p>
						</div>
						<div className="FAQs-field">
							<Button id="submitbtn" type="primary">
								<a href="/faqs">
									See All FAQS <ArrowRightOutlined />
								</a>
							</Button>
						</div>
					</div>
				</div>
				<CustomMlFooter />
				<FooterComponent />
			</div>
		</div>
	);
};


export default ContactUsComponent;



