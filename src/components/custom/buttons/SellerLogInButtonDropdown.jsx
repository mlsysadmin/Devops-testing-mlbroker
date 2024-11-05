import React from "react";
import { useState, useEffect } from "react";
import userProfileLogIn from "../../../assets/userProfileLogIn.png";
import profileDropdown from "../../../assets/profileDropdown.png";
import { getCookieData } from "../../../utils/CookieChecker";
import { searchKyc } from "../../../api/Public/User.api";
import { Alert } from "antd";
import JoinTeam from "../../modals/JoinTeamModal";
import "../../../styles/sellerdropdown.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { isCookiePresent } from "../../../utils/CookieChecker";

const SellerLogInButtonDropdown = () => {
	const [showDropdown, setShowDropdown] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [userDetails, setUserDetails] = useState(null);
	const [areCookiesPresent, setAreCookiesPresent] = useState(false);
	const [activeItem, setActiveItem] = useState(null);
	const [sessionExpired, setSessionExpired] = useState(false);

	const navigate = useNavigate();

	const accountDetails = getCookieData();
	console.log("details:", accountDetails);
	console.log("mobile number", accountDetails.mobileNumber);

	const fetchUserDetails = async () => {
		try {
			const response = await searchKyc(accountDetails.mobileNumber);
			const respData = response.data.data;
			console.log("API Response:", respData);
			setUserDetails(respData);
		} catch (error) {
			console.error("Error fetching user details:", error);
		}
	};
	const handleButtonClick = () => {
		setShowDropdown(!showDropdown);
	};
	const toggleModal = () => {
		setShowModal(!showModal);
	};
	const handleJoinTeamClick = () => {
		setShowModal(true);
	};

	// const handleLogout = () => {
	// 	document.cookie.split(";").forEach((cookie) => {
	// 		const [name] = cookie.split("=");
	// 		document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
	// 	});

	// 	window.location.href = "/";
	// };

	const location = useLocation();
	const isActive = (path) => location.pathname === path;
	useEffect(() => {
		fetchUserDetails();
		console.log("user", userDetails);
	}, []);
	// const SessionExpiredInitialization = () => {
	// 	setTimeout(() => {
	// 		setSessionExpired(true);
	// 		handleLogout();
	// 	}, 60000);
	// };

	// useEffect(() => {
	// 	SessionExpiredInitialization();
	// 	return () => {
	// 		clearTimeout();
	// 	};
	// }, []);

const handleLogout = async() =>{
const logoutURL = process.env.REACT_APP_LOGOUT_URL;
const redirectUrl = process.env.REACT_APP_REDIRECT_URL;

window.location.href  = `${logoutURL}?redirect_url=${encodeURIComponent(redirectUrl)}`;

}



	const firstName = accountDetails ? accountDetails.firstName : "User";
	const lastNameInitial =
		accountDetails && accountDetails.lastName
			? accountDetails.lastName.charAt(0).toUpperCase() + "."
			: "";

	return (
		<div className="user-dropdown-group">
			<button
				style={{
					margin: "0px 0px 0px 10px",
					cursor: "pointer",
					backgroundColor: "#D90000",
					color: "white",
					border: "none",
					padding: "6px 10px",
					borderRadius: "5px",
					display: "flex",
					alignItems: "center",
					justifyContent:"space-between"
				}}
				onClick={handleButtonClick}
				className="seller-button-dropdown"
			>
				<img
					src={userProfileLogIn}
					alt="User Profile"
					style={{ marginRight: "5px", height: "20px" }}
				/>
				{firstName} {lastNameInitial}
				<img
					src={profileDropdown}
					alt=""
					profileDropdown
					style={{ width: "10px", marginLeft: "5px" }}
				></img>
			</button>
			{showDropdown && (
				<div
					style={{
						position: "absolute",
						top: "80px",
						right: "25px",
						backgroundColor: "rgba(0, 0, 0, .72)",
						// color: "white",
						padding: "10px 0px",
						borderRadius: "5px",
						width: "150px",
						zIndex: "999",
						display: "flex",
						flexDirection: "column",
						gap: "10px",
						justifyContent: "center",
					}}
					className="seller-drop-items"
				>
					<ul
						style={{
							listStyle: "none",
							padding: "10px",
							margin: "0",
							display: "flex",
							flexDirection: "column",
							gap: "2px",
							cursor: "pointer",
						}}
					>
						{/* <li>
							{firstName} {lastNameInitial}
						</li> */}
						<li>
							<a
								style={{
									textDecoration: "none",
									color: isActive("/listing") ? "#d90000" : "white",
									fontWeight: isActive("/listing") ? "bold" : "",
									cursor: "pointer",
								}}
								href="/listing"
							>
								List Your Property
							</a>
						</li>
						<li>
							<a
								style={{
									textDecoration: "none",
									color: showModal ? "#d90000" : "white",
									cursor: "pointer",
								}}
								onClick={handleJoinTeamClick}
							>
								Join Our Team
							</a>
						</li>
						{showModal && <JoinTeam toggleModal={toggleModal} />}
						{/* <li>{accountDetails.email}</li> */}
						{/* <li>{userDetails.tier.label} TIER</li> */}
						{/* <li>───────────────────</li> */}
						{/* <l1>
							<button
								style={{
									minWidth: "200px",
									height: "40px",
									borderRadius: "20px",
									backgroundColor: "rgb(217,217,217,42%)",
									color: "white",
								}}
							>
								<a
									style={{
										textDecoration: "none",
										color: "white",
									}}
									href="/listing"
								>
									LIST YOUR PROPERTY
								</a>
							</button>
						</l1> */}
						{/* <a
							style={{
								color: "white",
							}}
						>
							<li>Profile Settings</li>
						</a>
						<a
							href="/listing-summary-lists"
							style={{
								color: "white",
							}}
						>
							<li>Listings</li>
						</a>
						<a
							href="/clientmanagement"
							style={{
								color: "white",
							}}
						>
							<li>Client Management</li>
						</a> */}
					
							<a
								style={{
									color: "white",
									cursor: "pointer",
								}}
							>
								<li onClick={handleLogout}>Logout</li>
							</a>

						{/* <li
							style={{
								color: "white",
							}}
						></li> */}
					</ul>
				</div>
			)}
		</div>
	);
};
export default SellerLogInButtonDropdown;
