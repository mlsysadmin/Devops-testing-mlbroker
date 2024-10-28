import React from "react";
import { useState, useEffect, useRef } from "react";
import "../styles/buyahome.css";
import MainLayout from "./layout/layout.component";
import CustomMlFooter from "./custom/Custom.Mlfooter";
import FooterComponent from "./layout/FooterComponent";
import { Button, notification, Steps } from "antd";
import WrapUpDetails from "./custom/application/wrapup.custom";
import SubmitApplicationCustom from "./custom/application/submitapplication.custom";
import SemiRoundBtn from "./custom/buttons/SemiRoundBtn.custom";
import { SendBuyHome } from "../api/Public/Email.api";

const BuyAHomeComponent = (firstname, lastname, email) => {
	const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);
	const [mobileNumber, setMobileNumber] = useState("");
	const [zipCode, setZipCode] = useState("");

	const handleMobileNumberChange = (e) => {
		setMobileNumber(e.target.value);
	};

	const handleZipCodeChange = (e) => {
		setZipCode(e.target.value);
	};
	const [current, setCurrent] = useState(0);
	const TimelineGroupRef = useRef(null);
	const PropertyGroupRef = useRef(null);
	const DetailsGroupRef = useRef(null);
	const WrapUpGroupRef = useRef(null);

	//property handler
	const [selectedButton, setSelectedButton] = useState(null);
	const [selectedHomeButton, setSelectedHomeButton] = useState(null);
	const [selectedNewHomeButton, setSelectedNewHomeButton] = useState(null);
	const [buttonClick, setButtonClick] = useState(null);

	//timeline handler
	const [timelinequest1, setTimelinequest1] = useState(null);
	const [timelinequest2, setTimelinequest2] = useState(null);
	const [timelinequest3, setTimelinequest3] = useState(null);

	//details handler
	const [detailsquest1, setDetailsquest1] = useState(null);
	const [detailsquest2, setDetailsquest2] = useState(null);
	const [detailsquest3, setDetailsquest3] = useState(null);
	const [detailsquest4, setDetailsquest4] = useState(null);
	const [detailsquest5, setDetailsquest5] = useState(null);
	const [detailsquest6, setDetailsquest6] = useState(null);

	// Wrap-up state
	const [isWrapUpComplete, setIsWrapUpComplete] = useState(false);

	const [api, contextHolder] = notification.useNotification();
	const [loading, setLoading] = useState(false);
	const [homeLocation, setHomeLocation] = useState(null);

	const [customerInfo, setCustomerInfo] = useState({
		mobile_number: null,
		email: null,
		last_name: null,
		first_name: null,
		country: 'Philippines',
		province: null,
		city: null,
		zipcode: null,
		others: null,
		source_of_income: null
	});

	//property handler
	const handleSpendButtonClick = (option) => {
		setSelectedButton(option);
	};
	const handleHomeButtonClick = (option) => {
		setSelectedHomeButton(option);
	};
	const handleNewHomeButtonClick = (option) => {
		setSelectedNewHomeButton(option);
	};
	const handleAgentClick = (option) => {
		setButtonClick(option);
	};

	//timelinehandler
	const handleTimelineButtonClick = (option) => {
		setTimelinequest1(option);
	};
	const handleOwnershipButtonClick = (option) => {
		setTimelinequest2(option);
	};
	const handleAgentButtonClick = (option) => {
		setTimelinequest3(option);
	};

	//detailshandler
	const handleDetailsquest1 = (option) => {
		setDetailsquest1(option);
	};
	const handleDetailsquest2 = (option) => {
		setDetailsquest2(option);
	};
	const handleDetailsquest3 = (option) => {
		setDetailsquest3(option);
	};
	const handleDetailsquest4 = (option) => {
		setDetailsquest4(option);
	};
	const handleDetailsquest5 = (option) => {
		setDetailsquest5(option);
	};
	const handleDetailsquest6 = (option) => {
		setDetailsquest6(option);
	};

	const onChange = (value) => {
		console.log("onChange:", value);
		if (value === 0) {
			PropertyGroupRef.current.scrollIntoView({ behavior: "smooth" });
		} else if (value === 1) {
			TimelineGroupRef.current.scrollIntoView({ behavior: "smooth" });
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
			const TimelineGroupRect =
				TimelineGroupRef.current.getBoundingClientRect();
			const detailsGroupRect = DetailsGroupRef.current.getBoundingClientRect();
			const wrapUpGroupRect = WrapUpGroupRef.current.getBoundingClientRect();

			if (
				scrollTop >= propertyGroupRect.top &&
				scrollTop < TimelineGroupRect.top
			) {
				setCurrent(0);
			} else if (
				scrollTop >= TimelineGroupRect.top &&
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
	}, [PropertyGroupRef, TimelineGroupRef, DetailsGroupRef, WrapUpGroupRef]);

	useEffect(() => {
		const spendingButtonClicked = selectedButton !== null;
		const homeTypeButtonClicked = selectedHomeButton !== null;
		const newHomeButtonClicked = selectedNewHomeButton !== null;
		const agentButtonClicked = buttonClick !== null;
		const timeline1Clicked = timelinequest1 !== null;
		const timeline2Clicked = timelinequest2 !== null;
		const timeline3Clicked = timelinequest3 !== null;
		const detailsquestClicked1 = detailsquest1 !== null;
		const detailsquestClicked2 = detailsquest2 !== null;
		const detailsquestClicked4 = detailsquest4 !== null;
		const detailsquestClicked5 = detailsquest5 !== null;
		const detailsquestClicked6 = detailsquest6 !== null;
		const numberChecked = mobileNumber !== "";
		const zipCodeChecked = zipCode !== "";
		const emailChecked = email !== "";
		const lastNameChecked = lastname !== "";
		const firstNameChecked = firstname !== "";

		setIsSubmitButtonDisabled(
			!spendingButtonClicked ||
				!homeTypeButtonClicked ||
				!newHomeButtonClicked ||
				!agentButtonClicked ||
				!timeline1Clicked ||
				!timeline2Clicked ||
				!timeline3Clicked ||
				!detailsquestClicked1 ||
				!detailsquestClicked2 ||
				!detailsquestClicked4 ||
				!detailsquestClicked5 ||
				!detailsquestClicked6 ||
				!numberChecked ||
				!zipCodeChecked ||
				!emailChecked ||
				!lastNameChecked ||
				!firstNameChecked
		);
	}, [
		selectedButton,
		selectedHomeButton,
		selectedNewHomeButton,
		buttonClick,
		timelinequest1,
		timelinequest2,
		timelinequest3,
		detailsquest1,
		detailsquest2,
		detailsquest4,
		detailsquest5,
		detailsquest6,
		mobileNumber,
		zipCode,
		email,
		lastname,
		firstname,
	]);
	const items = [
		{
			title: "Property",
			status: selectedButton ? "finish" : "wait",
		},
		{
			title: "Timeline",
			status: timelinequest1 ? "finish" : "wait",
		},
		{
			title: "Details",
			status: detailsquest1 ? "finish" : "wait",
		},
		{
			title: "Wrap Up",
			status: isSubmitButtonDisabled ? "wait" : "finish",
		},
	];

	const handleSubmitApplication = async () => {
		const property = {
			estimated_price: selectedButton,
			property_type: selectedHomeButton,
			property_usage: selectedNewHomeButton,
			real_estate_agent: buttonClick,
			purchase_plan_date: timelinequest1,
			current_home_ownership: timelinequest2,
			current_home_ownership: detailsquest1,
			estimated_downpayment: detailsquest2,
			annual_income: detailsquest4,
			declared_bankruptcy: detailsquest5,
			current_credit_score: detailsquest6,
			// home_location: homeLocation
		}
		
		const combinedProperty = { ...property, ...customerInfo };
		const keys = Object.keys(combinedProperty);
		const values = Object.values(combinedProperty);
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

		console.log("combined", combinedProperty);

		if (values.includes("") || values.includes(null) || values.includes(undefined)) {
			openNotificationWithIcon('warning', `Required Field`, 'Please fill in required fields.')
		} else if (keys.filter((key) => key == 'email' && !emailRegex.test(combinedProperty[key])).length !== 0) {
			openNotificationWithIcon('warning', `Invalid Value`, 'Please provide a valid email address.');
		} else {
			// Call API to submit application
			setLoading(true);
			await submitApplication(combinedProperty);
		}
	}

	const openNotificationWithIcon = (type, message, description) => {
		api[type]({
			message: message,
			description: description,
			placement: 'bottomRight',
			duration: type == "error" ? 4 : 3
		});
	};

	const submitApplication = async (combinedProperty) => {
		try {

			const preApproved = await SendBuyHome(combinedProperty);

			console.log("preapproved", preApproved);

			openNotificationWithIcon('success', 'Success', 'Great news! Your Pre-Approval Application has been successfully submitted. We’ll review it and get back to you shortly. Thanks for choosing us!')
			setLoading(false);

		} catch (error) {
			console.log("error", error);
			openNotificationWithIcon('error',
				``, `We're sorry, but your application couldn't be sent. 
				We're already working on resolving the issue. Thank you for your patience!`)
		}
	}

	return (
		<div className="buy-a-home-container">
			{contextHolder}
			<div className="buy-a-home-content">
				<div className="radiobtn-group">
					<Steps
						current={current}
						onChange={onChange}
						percent={100}
						labelPlacement="vertical"
						items={items}
						size="20px"
						className="custom-steps"
					/>
				</div>
			</div>
			<div className="property-information-container">
				<div className="prop-content">
					<div className="prop-content1" ref={PropertyGroupRef}>
						<h3>Property</h3>
						<span className="prop-quest">
							How much do you plan to spend on your new home?
						</span>
						<br />
						<span>(An estimate is fine)</span>
						<div className="prop-info-btn-group">
							{[
								"PHP 1,000,000 or more",
								"PHP 900,000 - 800,000",
								"PHP 700,000 - 600,000",
								"PHP 600,000 - 500,000",
								"PHP 500,000 - 400,000",
								"PHP 300,000 - 200,000",
								"PHP 100,000 - 50,000",
								"PHP 50,000 or less",
							].map((option) => (
								<button
									key={option}
									className={`prop-btn ${
										selectedButton === option ? "active" : ""
									}`}
									onClick={() => handleSpendButtonClick(option)}
								>
									{option}
								</button>
							))}
						</div>
						<br />
						<br />
						<br />
						<br />
						<div className="prop-content2">
							<span className="prop-quest">
								What kind of home are you looking for?
							</span>
							<div className="prop-info-btn-group1">
								{[
									"Single family",
									"Multi-family",
									"Town home",
									"Condominium",
									"Mobile/Manufactured",
									"New construction",
								].map((option) => (
									<button
										key={option}
										className={`prop-btn ${
											selectedHomeButton === option ? "active" : ""
										}`}
										onClick={() => handleHomeButtonClick(option)}
									>
										{option}
									</button>
								))}
							</div>
						</div>
						<br />
						<br />
						<br />
						<br />
						<div className="prop-content3">
							<span className="prop-quest">
								How will you use your new home?
							</span>
							<div className="prop-info-btn-group3">
								{[
									"Primary residence",
									"Secondary/Vacation",
									"Investment property",
								].map((option) => (
									<button
										key={option}
										className={`prop-btn ${
											selectedNewHomeButton === option ? "active" : ""
										}`}
										onClick={() => handleNewHomeButtonClick(option)}
									>
										{option}
									</button>
								))}
							</div>
						</div>
						<br />
						<br />
						<br />
						<br />
						<div className="prop-content4">
							<span className="prop-quest">
								Do you have a real estate agent?
							</span>
							<div className="prop-info-btn-group3">
								{["No", "Yes"].map((option) => (
									<button
										key={option}
										className={`prop-btn ${
											buttonClick === option ? "active" : ""
										}`}
										onClick={() => handleAgentClick(option)}
									>
										{option}
									</button>
								))}
							</div>
						</div>
					</div>
					<br />
					<br />
					<br />
					<br />
					{/* timeline */}
					<div className="prop-content1-timeline" ref={TimelineGroupRef}>
						<h3>Timeline</h3>
						<span className="prop-quest-subheader">
							When are you planning to make your home purchase?
						</span>
						<div className="prop-info-btn-group-timeline">
							{[
								"Immediately: I have a signed purchase agreement",
								"ASAP: I have found a house /offer pending",
								"Within 30 days",
								"2 - 3 months",
								"3 - 6 months",
								"6 + months",
								"I dont know",
							].map((option) => (
								<button
									key={option}
									className={`prop-btn ${
										timelinequest1 === option ? "active" : ""
									}`}
									onClick={() => handleTimelineButtonClick(option)}
								>
									{option}
								</button>
							))}
						</div>
						<div className="prop-content32">
							<span className="prop-quest">Do you currently own a home?</span>
							<div className="prop-info-btn-group1">
								{[
									"Yes, I currently owning  a home",
									"No, I am currently renting house",
									"No, I have other living arrangements",
								].map((option) => (
									<button
										key={option}
										className={`prop-btn ${
											timelinequest2 === option ? "active" : ""
										}`}
										onClick={() => handleOwnershipButtonClick(option)}
									>
										{option}
									</button>
								))}
							</div>
						</div>
						{/* <div className="prop-content41">
							<span className="prop-quest">
								Do you have a real estate agent?
							</span>
							<div className="prop-info-btn-group3">
								{["No", "Yes"].map((option) => (
									<button
										key={option}
										className={`prop-btn ${
											timelinequest3 === option ? "active" : ""
										}`}
										onClick={() => handleAgentButtonClick(option)}
									>
										{option}
									</button>
								))}
							</div>
						</div> */}
					</div>
					<br />
					<br />
					<br />
					<br />
					{/* Details */}
					<div className="prop-content5" ref={DetailsGroupRef}>
						<h3>Details</h3>
						<span className="prop-quest">Do you currently own a home?</span>
						<br />
						<div className="prop-info-btn-group-details">
							{[
								"Yes, I currently own a home",
								"No, I am currently renting",
								"No, I have other living arrangements",
							].map((option, index) => (
								<button
									key={index}
									className={`prop-btn ${
										detailsquest1 === option ? "active" : ""
									}`}
									onClick={() => handleDetailsquest1(option)}
								>
									{option}
								</button>
							))}
						</div>
						<br />
						<br />
						<div className="prop-content2">
							<br />
							<span className="prop-quest">
								How much of a down payment would you like to make?
							</span>
							<br />
							<span>(An estimate is fine)</span>
							<div className="prop-info-btn-group1">
								{[
									"3% (50,000)",
									"5% (100,000)",
									"10% (200,000)",
									"15% (300,000 - 500,000)",
									"20% (600,000 - 1,000,000)",
									"More than 20%",
								].map((option, index) => (
									<button
										key={index}
										className={`prop-btn ${
											detailsquest2 === option ? "active" : ""
										}`}
										onClick={() => handleDetailsquest2(option)}
									>
										{option}
									</button>
								))}
							</div>
						</div>
						<br />
						<br />
						<div className="prop-content52">
							<br />
							<span className="prop-quest">
								What is your current employment status?
							</span>
							<br />
							<div className="prop-info-btn-group1">
								{["Employed", "Self-employed", "Retired", "Not employed"].map((option, index) => (
									<button
										key={index}
										className={`prop-btn ${
											detailsquest3 === option ? "active" : ""
										}`}
										onClick={() => handleDetailsquest3(option)}
									>
										{option}
									</button>
								))}
							</div>
						</div>
						<br />
						<br />
						<div className="prop-content52">
							<br />
							<span className="prop-quest">
							What is your household gross (before taxes) annual income?
							</span>
							<br />
							<div className="prop-info-btn-group1">
								{[
									"Greater than 2,000,000",
									"PHP1,000,000-800,000",
									"PHP700,000-600,000",
									"PHP500,000-400,000",
									"PHP300,000-200,000",
									"PHP100,000-50,000",
									"Less than 50,000",
								].map((option, index) => (
									<button
										key={index}
										className={`prop-btn ${
											detailsquest4 === option ? "active" : ""
										}`}
										onClick={() => handleDetailsquest4(option)}
									>
										{option}
									</button>
								))}
							</div>
						</div>
						<br />
						<br />
						<div className="prop-content4">
							<br />
							<span className="prop-quest">
								Have you declared bankruptcy in the last 4 years?
							</span>
							<br />
							<div className="prop-info-btn-group3">
								{["No", "Yes"].map((option, index) => (
									<button
										key={index}
										className={`prop-btn ${
											detailsquest5 === option ? "active" : ""
										}`}
										onClick={() => handleDetailsquest5(option)}
									>
										{option}
									</button>
								))}
							</div>
						</div>
						<br />
						<br />
						<div className="prop-content2">
							<br />
							<span className="prop-quest">
								What is your current credit score?
							</span>
							<br />
							<div className="prop-info-btn-group1">
								{[
									"Excellent (720+)",
									"Good (680-719)",
									"Fair (660-679)",
									"Below average (620-659)",
									"Poor (520-619)",
									"Bad (Below 580)",
								].map((option, index) => (
									<button
										key={index}
										className={`prop-btn ${
											detailsquest6 === option ? "active" : ""
										}`}
										onClick={() => handleDetailsquest6(option)}
									>
										{option}
									</button>
								))}
							</div>
						</div>
						<br />
						<br />
						<div className="prop-content-looking">
							<br />
							<span className="prop-quest">Where are you looking to buy?</span>
							<br />
							<span>
								Enter the city or zip code of the area where you are home
								shopping
							</span>
							<div className="prop-info-btn-group-details-input">
								<input
									type="text"
									placeholder="City or zip code"
									style={{ padding: "0px 0px 0px 10px" }}
								/>
							</div>
						</div>
					</div>
					<br />
					<br />
					<br />
					<br />
					{/* Wrap-up */}
					<div className="prop-content-wrap-up" ref={WrapUpGroupRef}>
					<WrapUpDetails
						setWrapUpComplete={setIsWrapUpComplete}
						setCustomerInfo={setCustomerInfo}
						customerInfo={customerInfo}
					/>
					</div>
					{/* <br />
					<br />
					<br />
					<br />
					<br /> */}
				<br />
				<br />
				<span style={{ fontSize: "18px", color: "#8C9094", width: "79%", margin: 'auto' }}>
					By submitting, I agree my information may be shared and that I may be
					contacted at this number including through emails. I agree to the
					privacy policy and terms.
				</span>
				<SemiRoundBtn
					label={"Submit Pre-approval"}
					className="submit-pre-approval round-btn"
					handleClick={handleSubmitApplication}
					loading={loading}
				/>
				</div>
			</div>
			<CustomMlFooter />
			<FooterComponent />
		</div>
	);
};

export default BuyAHomeComponent;
