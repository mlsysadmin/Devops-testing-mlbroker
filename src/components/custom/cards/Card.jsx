import React from "react";
import "../../../styles/Card.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "antd";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import TuneIcon from "@mui/icons-material/Tune";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import ShowerOutlinedIcon from "@mui/icons-material/ShowerOutlined";
import ShortcutOutlinedIcon from "@mui/icons-material/ShortcutOutlined";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

const Card = ({
	id,
	title,
	subtitle,
	price,
	imgSrc,
	beds,
	baths,
	size,
	likes,
	forsale,
	handleClick,
	isFeatured
}) => {
	// const isFeatured = forsale.toLowerCase() === "featured";
	const [isHeartFilled, setIsHeartFilled] = useState(false);
	const [showTooltip, setShowTooltip] = useState(false);

	const handleHeartClick = () => {
		setIsHeartFilled(!isHeartFilled);
		if (!isHeartFilled) {
			setShowTooltip(true);
			setTimeout(() => setShowTooltip(false), 800);
		}
	};
	// const navigate = useNavigate();

	// const handleCardClick = () => {
	//   onClick(id);;
	// };

	return (
		<div className="card" style={{ cursor: "pointer" }}>
			<div className="cardImage">
				<img
					src={imgSrc}
					alt={title}
					className="card-img"
					onClick={handleClick}
				/>
				<p
					className={isFeatured ? "featured" : ""}
					style={{
						color:
							forsale === "New"
								? "#ffffff"
								: forsale === "For Sale"
									? "#000000"
									: forsale === "For Rent"
										? "#000000"
										: "White",
						backgroundColor:
							forsale === "New"
								? "var(--red)"
								: forsale === "For Sale"
									? "#ffffff"
									: forsale === "For Rent"
										? "#ffffff"
										: "var(--red)",
					}}
				>
					{forsale}
				</p>
				{/* {
					isFeatured ? <p className="featured feature-tag">Featured</p> : <></>
				} */}
				<div className="likes">
					<CameraAltIcon />
					<b>{likes}</b>
				</div>
				<div className="bottomicns">
					<div className="icon" onClick={handleHeartClick} style={{ display: "flex", flexDirection: "column" }}>
						<Tooltip
							color="var(--red)"
							title="Added to favorites"
							open={showTooltip}
							placement="top"
						></Tooltip>
						{isHeartFilled ? <HeartFilled /> : <HeartOutlined />}
					</div>
					{/* <div className="icon">
            <TuneIcon />
          </div> */}
				</div>
			</div>
			<div className="card-content" onClick={handleClick}>
				<div className="card-listing-title-public">
					<h3>{title}</h3>
				</div>
				<div className="card-listing-subtitle-public">
					<h4>{subtitle}</h4>
				</div>

				<div className="bot">
					<p>{price}</p>
					<div className="card-icons">
						{beds > 0 && (
							<div className="card-icons--feature">
								<BedOutlinedIcon />
								<label id="bed-icon">{beds}</label>
							</div>
						)}

						{baths > 0 && (
							<div className="card-icons--feature">
								<ShowerOutlinedIcon />
								<label htmlFor="">{baths}</label>
							</div>
						)}
						{size > 0 && (
							<div className="card-icons--feature">
								<ShortcutOutlinedIcon />
								<label htmlFor="">{size} SqM</label>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
