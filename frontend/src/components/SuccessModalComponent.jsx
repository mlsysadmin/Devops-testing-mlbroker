import React from "react";
import "../styles/SuccessModalComponent.css";
import { Button } from "antd";

const SuccessModalComponent = ({
	title,
	message,
	showButton,
	setIsSuccessModalOpen,
}) => {
	const handleSuccessClose = () => setIsSuccessModalOpen(false);

	return (
		<div
			className="main-container"
			style={{
				position: "fixed",
				top: "0px",
				left: "50%",
				transform: "translateX(-50%)",
				backgroundColor: "rgba(0, 0, 0, 0.5)",
				width: "100%",
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				zIndex: 1000,
				padding: "0px 0px 0px 0px",
			}}
		>
			<div className="modal-container" onClick={handleSuccessClose} >
				<h4 className="title">{title}</h4>
				<p className="message">{message}</p>
				{showButton && (
					<Button id="noted-btn" type="primary">
						Ok, Noted!
					</Button>
				)}
			</div>
		</div>
	);
};

export default SuccessModalComponent;
