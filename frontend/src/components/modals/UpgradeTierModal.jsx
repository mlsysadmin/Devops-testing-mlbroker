import { CloseOutlined } from "@ant-design/icons";
import { Flex } from "antd";
import React from "react";
import "../../styles/upgradeModal.css";

const UpgradeTierModal = ({ onClose, showLogin }) => {
	return (
		<div
			className="upgrade-tier-modal"
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				backgroundColor: "rgba(0, 0, 0, 0.5)",
				display: "flex",
				justifyContent: "center",
				transition: "opacity 0.3s ease",
				zIndex: 1000,
				width: "auto",
			}}
		>
			<div
				className="upgrade-modal-content"
				style={{
					backgroundColor: "white",
					padding: "40px",
					borderRadius: "30px",
					boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					position: "absolute",
					top: "10%",
				}}
			>
				<div
					className="upgrade-content"
					style={{
						display: "flex",
						flexDirection: "column",
					}}
				>
					<h2
						style={{
							fontWeight: "bold",
							marginBottom: "20px",
							color: "var(--red)",
							textAlign: "center",
							fontSize: "18px",
						}}
					>
						Property Listing Guide
					</h2>
					<CloseOutlined
						onClick={onClose}
						style={{
							position: "absolute",
							right: "30px",
							top: "30px",
							fontSize: "14px",
						}}
					/>
					<div
						className="important-notice-content"
						style={{
							display: "flex",
							justifyContent: "flex-start",
							alignItems: "flex-start",
							flexDirection: "column",
							gap: "10px",
						}}
					>
						<div
							className="how-to-list-prop"
							style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "flex-start",
								alignItems: "flex-start",
								textAlign: "left",
							}}
						>
							<span
								style={{
									fontSize: "14px",
									fontWeight: "bolder",
								}}
							>
								How to list your property?
							</span>
							<p>You have two options to list your property:</p>
							<div
								className="ol-group-upgrade"
								style={{
									lineHeight: "25px",
									paddingLeft: "20px",
								}}
							>
								<ol style={{ fontSize: "14px" }}>
									1. Upload your listing details on our website
								</ol>
								<ol style={{ fontSize: "14px" }}>
									2. Visit nearest ML Branch and FLA will assist you with
									listing your property.
								</ol>
							</div>
						</div>
						<div
							className="how-to-upload-prop "
							style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "flex-start",
								alignItems: "flex-start",
								textAlign: "left",

								flexWrap: "wrap",
							}}
						>
							<span style={{ fontSize: "14px", fontWeight: "bolder" }}>
								How to Upload Your Listing on OurWebsite? 
							</span>
							<p>Follow these steps to upload your property listing online:</p>
							<div
								className="second-ol-group-upgrade"
								style={{
									lineHeight: "25px",
									paddingLeft: "20px",
								}}
							>
								<ol style={{ fontSize: "14px" }}>
									1. Download and Install ML Wallet app.
								</ol>
								<ol style={{ fontSize: "14px" }}>
									2. Register and ensure your account is fully verified. 
									<p style={{ fontStyle: "italic", paddingLeft: "15px" }}>
										Note: if your account isn’t verified, visit the nearest ML
										Branch to upgrade it.
									</p>
								</ol>
								<ol style={{ fontSize: "14px" }}>
									3. Once approved, scan the QR Code on ML Website to login. 
								</ol>
							</div>
						</div>
					</div>
				</div>
				<button
					className="signin-button-upgrade"
					onClick={showLogin}
					style={{
						marginTop: "20px",
						padding: "10px 0px",
						backgroundColor: "#D90000",
						color: "white",
						border: "none",
						borderRadius: "4px",
						cursor: "pointer",
						width: "100px",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					Sign In
				</button>
			</div>
		</div>
	);
};

export default UpgradeTierModal;
