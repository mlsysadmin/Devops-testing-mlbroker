import React from "react";
import "../styles/comingsoon.css";
import BrokerageLogo from "../assets/BrokerageLogo.png";

const WorkingOnItModal = () => {


	// return (
	// 	<div
	// 		className="working-modal-overlay"
	// 		style={{
	// 			position: "fixed",
	// 			top: 0,
	// 			left: 0,
	// 			right: 0,
	// 			bottom: 0,
	// 			background: "rgba(0, 0, 0, 0.5)",
	// 			display: "flex",
	// 			justifyContent: "center",
	// 			alignItems: "center",
	// 			zIndex: 999,
	// 		}}
	// 		onClick={onClose}
	// 	>
	// 		<div
	// 			className="working-modal-content"
	// 			style={{
	// 				backgroundImage: "",
	// 				padding: "15px",
	// 				borderRadius: "8px",
	// 				textAlign: "center",
	// 				width: "500px",
	// 				display: "flex",
	// 				flexWrap: "nowrap",
	// 				flexDirection: "column",
	// 			}}
	// 			onClick={(e) => e.stopPropagation()}
	// 		>
	// 			<div
	// 				className="working-on-it-info"
	// 				style={{
	// 					textAlign: "center",
	// 					display: "left",
	// 					flexDirection: "column",
	// 				}}
	// 			>
	// 				<h1 style={{ fontSize: "24px", marginLeft: "10px" }}>
	// 					Feature Coming Soon!
	// 				</h1>
	// 				<span style={{ fontSize: "14px" }}>
	// 					We’re diligently working to bring this feature to you. It will be
	// 					available shortly, so please check back later.
	// 				</span>
	// 			</div>
	// 			<div
	// 				className="working-on-it-info"
	// 				style={{
	// 					textAlign: "center",
	// 					display: "left",
	// 					flexDirection: "column",
	//                     marginTop:"20px"
	// 				}}
	// 			>
	// 				<h1 style={{ fontSize: "20px", marginLeft: "10px" }}>Need Help?</h1>
	// 				<span style={{ fontSize: "14px" }}>
	// 					If you have any questions, feel free to contact our support team at
	// 					<a href="mailto:properties@mlhuillier.com">
	// 						{" "}
	// 						properties@mlhuillier.com
	// 					</a>{" "}
	// 					or call us at 380 3000, local 11569.
	// 				</span>
	// 			</div>

	// 			<div className="working-on-it-closeButton">
	// 				<button
	// 					onClick={onClose}
	// 					style={{
	// 						cursor: "pointer",
	// 						backgroundColor: "var(--red)",
	// 						border: "none",
	// 						borderRadius: "5px",
	// 						padding: "5px",
	// 						width: "80px",
	// 						color: "white",
	// 						fontSize: "16px",
	// 					}}
	// 				>
	// 					Close
	// 				</button>
	// 			</div>
	// 		</div>
	// 	</div>
	// );
	return (
		<div className="coming-soon">
			<div className="content">
				<div className="img-logo-coming-soon">
					<img
						src={BrokerageLogo}
						style={{ width: "150px", height: "60px" }}
					></img>
					<div className="feature-coming-soon-title">
						<h1>Feature Coming Soon!</h1>
					</div>
				</div>

				{/* <span>
					We’re diligently working to bring this feature to you. It will be
					available shortly, so please check back later.
				</span> */}

				<div className="working-on-it-info">
					{/* <h2>Need Help?</h2> */}
					<span>
						If you have any questions, feel free to contact our support team at
						<a href="mailto:properties@mlhuillier.com">
							{" "}
							properties@mlhuillier.com
						</a>{" "}
						<br />
						or call us at
						<span style={{ fontWeight: "bold" }}> 380 3000, local 11569.</span>
					</span>
				</div>
			</div>
		</div>
	);
};
export default WorkingOnItModal;
