import React from "react";
import logo from "../../asset/nobackgrounlogo.png";

const PreviewLoadingModal = () => {
	return (
		<div
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				backgroundColor: "rgba(0, 0, 0, 0.5)",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				zIndex: 9999,
			}}
		>
			<div
				style={{
					position: "relative",
					// backgroundColor: "white",
					// width: "100px",
					// height: "10px",
					// borderRadius: "20px",
					// boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<div
					style={{
						position: "absolute",
						width: "80px",
						height: "80px",
						borderRadius: "50%",
						border: "6px solid rgba(0, 0, 0, 0.1)",
						borderTop: "6px solid var(--red)",
						animation: "spin 2s linear infinite",
						zIndex: -999,
						backgroundColor: "white",
					}}
				></div>

				<img
					src={logo}
					alt="Loading"
					style={{
						width: "120px",
						height: "120px",
						animation: "pulse 1.5s infinite",
						position: "relative",
						zIndex: 0,
					}}
				/>
			</div>
		</div>
	);
};


const customStyles = document.createElement("style");
customStyles.innerHTML = `
  @keyframes pulse {
    0% { transform: scale(1); opacity: 0.7; }
    50% { transform: scale(1.1); opacity: 1; }
    100% { transform: scale(1); opacity: 0.7; }
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
document.head.appendChild(customStyles);

export default PreviewLoadingModal;