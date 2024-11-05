import React from "react";
import "../../styles/upgradeModal.css";

const TierUpgradeModal = () => {
	return (
		<div
			className="tier-upgrade-modal"
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
				className="tier-upgrade-content"
				style={{
					backgroundColor: "white",
					padding: "40px 20px",
					borderRadius: "30px",
					boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					position: "absolute",
					top: "10%",
					width: "500px",
				}}
			>
				<div
					className="tier-context"
					style={{
						justifyContent: "center",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						lineHeight: "30px",
						gap: "20px",
					}}
				>
					<h2 style={{ color: "var(--red)", fontSize:"18px" }}>Important Notice</h2>
					<p style={{textAlign:"center", fontSize:"14px"}}>
						Please upgrade your MCash Wallet account to unlock new features and
						improve your overall experience.
					</p>
				</div>
			</div>
		</div>
	);
};
export default TierUpgradeModal;
