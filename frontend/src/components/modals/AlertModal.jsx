import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/alertModal.css";


const AlertModal = (props) => {
	const { title, text, isError, onClose, subtitle, subLink } = props;
	const navigate = useNavigate();

	const handleButtonClick = () => {
		onClose();
	};

	const handleSubLink = () => {
		navigate(-1);
	};

	return (
		<div className="alert-modal">
			<div className="modalBackground">
				<div className="custom modal-content">
					<div className="modal-body">
						<h3 id="title-alert">{title}</h3>
						<p id="text-alert">{text}</p>
						<p
							style={{
								margin: "0px 15px 20px 15px",
								fontSize: "15px",
								textAlign: "justify",
								lineHeight: "18px",
							}}
						>
							{subtitle ? subtitle : ""}
						</p>
						{subLink && (
							<button onClick={handleSubLink} id="sub-btn">
								Modify previous form
							</button>
						)}
						{isError && subLink ? (
							<button
								style={{
									color: "red",
									textDecorationLine: "underline",
									margin: "13px 0px 0px 0px",
									background: "none",
									border: "none",
									cursor: "pointer",
								}}
								onClick={handleButtonClick}
							>
								No thanks
							</button>
						) : isError ? (
							<button id="Ok-btn" onClick={handleButtonClick}>
								Ok
							</button>
						) : null}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AlertModal;
