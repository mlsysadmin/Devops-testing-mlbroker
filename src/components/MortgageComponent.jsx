import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HomeFilled, DollarOutlined } from "@ant-design/icons";
import { FooterComponent, CustomMlFooter } from "../components";
import "../styles/mortgage.css";
import WorkingOnItModal from "./ComingSoonComponent";

const MortgageComponent = () => {
	const [showModal, setShowModal] = useState(false);

	const navigate = useNavigate();
	const handleButtonClick = (route) => {
		// console.log("Button clicked, showing modal");
		// setShowModal(true);
		navigate(route);
	};
	const toggleModal = () => {
		setShowModal(!showModal);
	};
	return (
		<div className="mortgageContent">
			<div className="mortgage-title">
				<span className="mortgage-h1">Get pre-approved </span>
				<p className="mortgage-subheader">
					Home financing to make your goals a reality.
				</p>
			</div>
			<div className="mortBtn">
				<div
					className="purchasebtn"
					onClick={() => handleButtonClick('/buy-a-home')}
					style={{ cursor: "pointer" }}
				>
					<HomeFilled id="home-icon" />
					<a style={{ textDecoration: "none" }}>
						<p style={{ color: "white" }}>
							I want to{" "}
							<span style={{ fontWeight: "bold", color: "white" }}>
								purchase
							</span>{" "}
							a home
						</p>
					</a>
				</div>
				<div
					className="refinancebtn"
					onClick={() => handleButtonClick('/refinance')}
					style={{ cursor: "pointer" }}
				>
					<DollarOutlined id="dollar-icon" />
					<a style={{ textDecoration: "none" }}>
						<p style={{ color: "white" }}>
							I want to{" "}
							<span style={{ fontWeight: "bold", color: "white" }}>
								refinance
							</span>{" "}
							my home
						</p>
					</a>
				</div>
				{showModal && (
					<WorkingOnItModal isOpen={showModal} onClose={toggleModal} />
				)}
			</div>
			<br />
			<br />
			<br />
			<br />
			<br />
			<div>
				<CustomMlFooter />
				<FooterComponent />
			</div>
		</div>
	);
};

export default MortgageComponent;
