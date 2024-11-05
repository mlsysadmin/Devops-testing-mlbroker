import React from "react";
import { useState, useEffect } from "react";
import userProfileLogIn from "../../../assets/userProfileLogIn.png";
import profileDropdown from "../../../assets/profileDropdown.png";
import { getCookieData } from "../../../utils/CookieChecker";
import { searchKyc } from "../../../api/Public/User.api";
import "../../../styles/custom.css";
import { Alert } from "antd";

const BuyerLogInProfileDropdownBtn = () => {
	const [showDropdown, setShowDropdown] = useState(false);
	const [userDetails, setUserDetails] = useState(null);

	const [sessionExpired, setSessionExpired] = useState(false);
	const [timeoutId, setTimeoutId] = useState(null);

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

	useEffect(() => {
		// if (!sessionExpired && accountDetails && accountDetails?.mobileNumber) {
			fetchUserDetails();
		// }
	}, []);

	const handleButtonClick = () => {
		setShowDropdown(!showDropdown);
	};

	const handleLogout = () => {
		document.cookie.split(";").forEach((cookie) => {
			const [name] = cookie.split("=");
			document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
		});

		window.location.href = "/";
	};

	// const SessionExpiredInitialization = () => {
	// 	setSessionExpired(true);
	// 	handleLogout();
	// };

	// const inactivityTimer = () => {
	// 	if (timeoutId) {
	// 		clearTimeout(timeoutId);
	// 	}
	// 	const newTimeOutId = setTimeout(() => {
	// 		SessionExpiredInitialization();
	// 	}, 60000); //timer 5 minutes
	// 	setTimeoutId(newTimeOutId);
	// };

	// useEffect(() => {
	// 	const activityEvents = [
	// 		"click",
	// 		"keypress",
	// 		"mousemove",
	// 		"scroll",
	// 		"keydown",
	// 	];

	// 	activityEvents.forEach((event) => {
	// 		window.addEventListener(event, inactivityTimer);
	// 	});

	// 	inactivityTimer();

	// 	return () => {
	// 		activityEvents.forEach((event) => {
	// 			window.removeEventListener(event, inactivityTimer);
	// 		});
	// 		clearTimeout(timeoutId);
	// 	};
	// 	// SessionExpiredInitialization();
	// 	// return () => {
	// 	// 	clearTimeout();
	// 	// };
	// }, [timeoutId]);

	const firstName = accountDetails ? accountDetails.firstName : "User";
	const lastNameInitial =
		accountDetails && accountDetails.lastName
			? accountDetails.lastName.charAt(0).toUpperCase() + "."
			: "";

	return (
		<div style={{ position: "relative" }}>
			{/* {sessionExpired && (
				<Alert
					message="Session Expired"
					description="Your session has expired. You will be logged out."
					type="error"
					showIcon
					style={{
						marginBottom: "10px",
						position: "absolute",
						marginTop: "50px",
						width: "300px",
						padding: "10px",
						justifyContent: "left",
						alignItems: "left",
						right: "700px",
					}}
				/>
			)} */}
			<button
				style={{
					margin: "0px 0px 0px 20px",
					cursor: "pointer",
					backgroundColor: "#D90000",
					color: "white",
					border: "none",
					padding: "6px 10px",
					borderRadius: "5px",
					display: "flex",
					width: "auto",
					alignItems: "center",
					boxShadow: " 0px 4px 6px var(--bg-shadow)",
				}}
				onClick={handleButtonClick}
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
						top: "40px",
						right: "0",
						backgroundColor: "rgba(0, 0, 0, 0.8)",
						color: "white",
						padding: "6px 10px",
						borderRadius: "5px",
						minWidth: "200px",
						zIndex: "10",
						display: "flex",
						flexDirection: "column",
						gap: "10px",
						justifyContent: "center",
					}}
				>
					<ul
						style={{
							listStyle: "none",
							padding: "10px",
							margin: "0",
							display: "flex",
							flexDirection: "column",
							gap: "5px",
						}}
					>
						<li>
							{accountDetails.firstName} &nbsp;
							{accountDetails.lastName}
						</li>
						<li> {accountDetails.email}</li>
						<li> {userDetails.tier.label} TIER</li>
						<li>───────────────────</li>
						<li>
							<a href="/buyer-application-history" style={{ color: "#ffffff" }}>
								Application History
							</a>
						</li>
						<li>
							<a href="/buyer-application-history" style={{ color: "#ffffff" }}>
								Saved Property
							</a>
						</li>
						<li onClick={handleLogout} style={{ cursor: "pointer" }}>
							Logout
						</li>
						<li></li>
					</ul>
				</div>
			)}
		</div>
	);
};
export default BuyerLogInProfileDropdownBtn;
