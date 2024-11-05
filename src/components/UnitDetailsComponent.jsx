import React, { useEffect, useState } from "react";
import BedsInputSlider from "./Slider/BedSlider";
import ParkingInputSlider from "./Slider/ParkingSlider";
import BathroomInputSlider from "./Slider/BathroomsSlider";
import NoOfFloorsInputSlider from "./Slider/NoOfFloors";
import "../styles/listing-form.css";
import floorlogo from "../assets/images/floorlogo.png";
import property from "../assets/property.png";

const UnitDetailsComponent = ({
	onComplete,
	priceInputError,
	setPriceInputError,
	selectedSellingPrice,
	handleSellingPriceClick,
	floorAreaInputError,
	setFloorAreaInputError,
	pricePerSqmInputError,
	setPricePerSqmInputError,
	discPriceInputError,
	setDiscPriceInputError,
	lotAreaInputError,
	setLotAreaInputError,
	propIdInputError,
	setPropIdInputError,
	setPropertyFields,
	selectedPropertyTab,
}) => {
	const [price, setPrice] = useState("");
	const [discountedPrice, setDiscountedPrice] = useState("");
	const [pricePerSqm, setPricePerSqm] = useState("");
	const [furnishing, setFurnishing] = useState("");
	const [Classification, setClassification] = useState("");
	const [noOfBeds, setNoOfBeds] = useState(0);
	const [noOfBathrooms, setNoOfBathrooms] = useState(0);
	const [noOfFloors, setNoOfFloors] = useState(0);
	const [Parking, setParking] = useState(0);
	const [floorArea, setFloorArea] = useState("");
	const [lotArea, setLotArea] = useState("");
	const [propId, setPropId] = useState(null);

	const validateNumberInput = (value, setError) => {
		if (isNaN(value)) {
			setError("Please enter a valid number.");
		} else {
			setError("");
		}
	};

	const handleClassificationClick = (tab) => {
		setClassification(tab);
	};

	useEffect(() => {
		if (
			["commercial land/lot", "lot", "farm lot", "service office", "office space", "shop/retail","warehouse", "hotel/resort"].includes(selectedPropertyTab)
		) {
			setFurnishing(null);
			setClassification(null);
			setParking(0);
			setNoOfFloors(0);
			setFloorArea(0);
			setNoOfBeds(0);
			setNoOfBathrooms(0);
		}
		const requiresAdditionalFields = ![
			"commercial land/lot",
			"lot",
			"farm lot",
			"service office",
			"office space",
			"shop/retail",
			"warehouse",
			"hotel/resort",
		].includes(selectedPropertyTab);

		const isFormComplete =
			typeof price === "string" &&
			price.trim() !== "" &&
			typeof discountedPrice === "string" &&
			discountedPrice.trim() !== "" &&
			(!requiresAdditionalFields ||
				(typeof selectedSellingPrice === "string" &&
					selectedSellingPrice.trim() !== "" &&
					typeof Classification === "string" &&
					Classification.trim() !== "" &&
					noOfBeds !== null &&
					noOfBathrooms !== null &&
					noOfFloors !== null &&
					Parking !== null &&
					typeof floorArea === "string" &&
					floorArea.trim() !== "")) &&
			typeof lotArea === "string" &&
			lotArea.trim() !== "" &&
			typeof propId === "string" &&
			(isPricePerSqmDisabled || pricePerSqm.trim() !== "") &&
			propId.trim() !== "";

		if (isFormComplete) {
			setPropertyFields({
				Price: price,
				DiscountedPrice: discountedPrice,
				PricePerSqm: pricePerSqm,
				Furnishing: furnishing,
				Classification,
				BedRooms: noOfBeds,
				BathRooms: noOfBathrooms,
				NoOfFloor: noOfFloors,
				Parking,
				FloorArea: floorArea,
				LotArea: lotArea,
				PropertyIdNo: propId,
			});
			onComplete(true);
		} else {
			onComplete(false);
		}
	}, [
		price,
		discountedPrice,
		pricePerSqm,
		selectedSellingPrice,
		Classification,
		noOfBeds,
		noOfBathrooms,
		noOfFloors,
		Parking,
		floorArea,
		lotArea,
		setPropertyFields,
		onComplete,
		propId,
	]);

	const isPricePerSqmDisabled = ![
		"commercial land/lot",
		"lot",
		"farm lot",
		"service office",
		"office space",
		"shop/retail",
		"warehouse",
		"hotel/resort",
	].includes(selectedPropertyTab);

	const disabledPropertyFields = [
		"commercial land/lot",
		"lot",
		"farm lot",
		"service office",
		"office space",
		"shop/retail",
		"warehouse",
		"hotel/resort",
	].includes(selectedPropertyTab);

	const formatPricenumber = () => {
		if (!price) return "";
		return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	};
	const formatdiscountedPricenumber = () => {
		if (!discountedPrice) return "";
		return discountedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	};
	const formatpricePerSqm = () => {
		if (!pricePerSqm) return "";
		return pricePerSqm.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	};
	const formatlotArea = () => {
		if (!lotArea) return "";
		return lotArea.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	};

	const removeCommas = (price) => {
		return price.replace(/,/g, "");
	};
	return (
		<div className="listing-unit-details">
			<div className="listing-unit-details-label">Unit Details</div>
			<div className="listing-unit-details-div">
				<div className="listing-unit-details-left">
					{/* Selling Price */}
					<div className="form-group">
						<div className="text-wrapper-37">Selling Price</div>
						<div className="listing-unit-input-group">
							<label className="text-wrapper-38" htmlFor="selling-price">
								What is the selling price of the unit?
							</label>
							<div className="input-container">
								<div className="currency-prefix">PHP</div>
								<input
									id="price-input"
									className={`price-input ${
										priceInputError ? "error-input" : ""
									}`}
									type="text"
									value={formatPricenumber(price)}
									onChange={(e) => {
										const rawValue = removeCommas(e.target.value);
										if (!isNaN(rawValue)) {
											setPrice(rawValue);
										}
										validateNumberInput(rawValue, setPriceInputError);
									}}
								/>
							</div>
							{priceInputError && (
								<div className="error">{priceInputError}</div>
							)}
						</div>
					</div>

					{/* Furnishing */}
					<div className="form-group">
						<div className="text-wrapper-37">Furnishing</div>
						<div className="listing-unit-input-group">
							<label className="text-wrapper-38" htmlFor="furnish-tabs">
								Is the unit fully furnished?
							</label>
							<div className="tab-category">
								<div className="tab-wrapper">
									<div className="furnish-tabs">
										{["Yes", "No", "Semi"].map((tab) => (
											<div
												key={tab}
												className={`furnish-tab ${
													selectedSellingPrice === tab ? "selected" : ""
												}`}
												onClick={() =>
													!disabledPropertyFields &&
													handleSellingPriceClick(tab)
												}
												style={{
													cursor: disabledPropertyFields
														? "not-allowed"
														: "pointer",
												}}
											>
												{tab}
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Beds */}
					<div className="form-group">
						<div className="text-wrapper-37">Beds</div>
						<div className="listing-unit-input-group">
							<label className="text-wrapper-38" htmlFor="beds">
								How many beds?
							</label>
							<div className="beds-listing-unit-input-group">
								<div className="overlap-10">
									<div className="beds-number">
										<BedsInputSlider
											value={noOfBeds}
											onChange={(value) => setNoOfBeds(Number(value))}
											disabled={disabledPropertyFields}
											style={{
												cursor: disabledPropertyFields ? "not-allowed" : "auto",
											}}
										/>
									</div>
									<img
										className="beds-logo"
										alt="Beds logo"
										src="https://cdn.animaapp.com/projects/64e41d552340cba66b90f01a/releases/665420ac7606a0cc15aa6b94/img/hotel-bed-2--bed-double-bedroom-bedrooms-queen-king-full-hotel-h-5@2x.png"
									/>
								</div>
							</div>
						</div>
					</div>

					{/* Parking */}
					<div className="form-group">
						<div className="text-wrapper-37">Parking</div>
						<div className="listing-unit-input-group">
							<label className="text-wrapper-38" htmlFor="parking">
								How many parking slots?
							</label>
							<div className="parking-listing-unit-input-group">
								<div className="overlap-10">
									<div className="parking-number">
										<ParkingInputSlider
											value={Parking}
											onChange={(value) => setParking(Number(value))}
											disabled={disabledPropertyFields}
											style={{
												cursor: disabledPropertyFields ? "not-allowed" : "auto",
											}}
										/>
									</div>
									<img
										className="parking-logo"
										alt="Parking logo"
										src="https://cdn.animaapp.com/projects/64e41d552340cba66b90f01a/releases/665e706f7ae3ba3a45818d90/img/parking-sign--discount-coupon-parking-price-prices-hotel.svg"
									/>
								</div>
							</div>
						</div>
					</div>

					{/* Floor Area */}
					<div className="form-group">
						<div className="text-wrapper-37">Floor Area</div>
						<div className="listing-unit-input-group">
							<label className="text-wrapper-38" htmlFor="floor-area">
								What is the floor area of the unit?
							</label>
							<div className="floor-input-container">
								<div className="floor-logo">
									<img
										className="floor-logo-img"
										alt="floor-logo"
										src={floorlogo}
									/>
								</div>
								<input
									id="floorarea-input"
									className={`floorarea-input ${
										floorAreaInputError ? "error-input" : ""
									}`}
									type="number"
									onChange={(e) => {
										setFloorArea(e.target.value);
										validateNumberInput(e.target.value, setFloorAreaInputError);
									}}
									disabled={disabledPropertyFields}
									style={{
										cursor: disabledPropertyFields ? "not-allowed" : "auto",
									}}
								/>
								<div className="sqm-prefix">sqm</div>
							</div>
							{floorAreaInputError && (
								<div className="error">{floorAreaInputError}</div>
							)}
						</div>
					</div>

					{/* Price per sqm */}
					<div className="form-group">
						<div className="text-wrapper-37">Price per sqm</div>
						<div className="listing-unit-input-group">
							<label className="text-wrapper-38" htmlFor="pricepersqm">
								What is the selling price per sqm?
							</label>
							<div className="input-container">
								<div className="currency-prefix">PHP</div>
								<input
									id="pricepersqm"
									className={`pricepersqm-input ${
										pricePerSqmInputError ? "error-input" : ""
									}`}
									type="text"
									value={formatpricePerSqm(pricePerSqm)}
									onChange={(e) => {
										const rawValue = removeCommas(e.target.value);
										if (!isNaN(rawValue)) {
											setPricePerSqm(rawValue);
										}
										validateNumberInput(rawValue, setPricePerSqmInputError);
									}}
									disabled={isPricePerSqmDisabled}
									style={{
										cursor: isPricePerSqmDisabled ? "not-allowed" : "auto",
									}}
								/>
							</div>
							{pricePerSqmInputError && (
								<div className="error">{pricePerSqmInputError}</div>
							)}
						</div>
					</div>
				</div>

				<div className="listing-unit-details-right">
					{/* Discounted Selling Price */}
					<div className="form-group">
						<div className="text-wrapper-37">
							<p>Discounted Selling Price</p>
						</div>
						<div className="listing-unit-input-group">
							<label className="text-wrapper-38" htmlFor="disc-selling-price">
								What is the selling unit discounted price?
							</label>
							<div className="input-container">
								<div className="currency-prefix">PHP</div>
								<input
									id="disc-price-input"
									className={`disc-price-input ${
										discPriceInputError ? "error-input" : ""
									}`}
									type="text"
									value={formatdiscountedPricenumber(discountedPrice)}
									onChange={(e) => {
										const rawValue = removeCommas(e.target.value);
										if (!isNaN(rawValue)) {
											setDiscountedPrice(rawValue);
										}
										validateNumberInput(rawValue, setDiscPriceInputError);
									}}
								/>
							</div>
							{discPriceInputError && (
								<div className="error">{discPriceInputError}</div>
							)}
						</div>
					</div>

					{/* Classification */}
					<div className="form-group">
						<div className="text-wrapper-37">Classification</div>
						<div className="listing-unit-input-group">
							<label className="text-wrapper-38" htmlFor="classification">
								What is the unit classification?
							</label>
							<div className="tab-category">
								<div className="tab-wrapper">
									<div className="classification-tabs">
										{["Brand New", "Retail"].map((tab) => (
											<div
												key={tab}
												className={`classification-tab ${
													Classification === tab ? "selected" : ""
												}`}
												onClick={() =>
													!disabledPropertyFields &&
													handleClassificationClick(tab)
												}
												style={{
													cursor: disabledPropertyFields
														? "not-allowed"
														: "pointer",
												}}
											>
												{tab}
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Bathrooms */}
					<div className="form-group">
						<div className="text-wrapper-37">Bathrooms</div>
						<div className="listing-unit-input-group">
							<label className="text-wrapper-38" htmlFor="bathrooms">
								How many bathrooms?
							</label>
							<div className="bathroom-listing-unit-input-group">
								<div className="overlap-10">
									<div className="bathroom-number">
										<BathroomInputSlider
											value={noOfBathrooms}
											onChange={(value) => setNoOfBathrooms(Number(value))}
											disabled={disabledPropertyFields}
											style={{
												cursor: disabledPropertyFields ? "not-allowed" : "auto",
											}}
										/>
									</div>
									<img
										className="bathroom-logo"
										alt="bathroom-logo"
										src="https://cdn.animaapp.com/projects/64e41d552340cba66b90f01a/releases/665e706f7ae3ba3a45818d90/img/hotel-shower-head--bathe-bath-bathroom-shower-water-head-hotel@2x.png"
									/>
								</div>
							</div>
						</div>
					</div>

					{/* No. of Floors */}
					<div className="form-group">
						<div className="text-wrapper-37">No. of Floors</div>
						<div className="listing-unit-input-group">
							<label className="text-wrapper-38" htmlFor="nofloors">
								How many floors?
							</label>
							<div className="nofloors-listing-unit-input-group">
								<div className="overlap-10">
									<div className="nofloors-number">
										<NoOfFloorsInputSlider
											value={noOfFloors}
											onChange={(value) => setNoOfFloors(Number(value))}
											disabled={disabledPropertyFields}
											style={{
												cursor: disabledPropertyFields ? "not-allowed" : "auto",
											}}
										/>
									</div>
									<img
										className="nofloors-logo"
										alt="nofloors-logo"
										src="https://cdn.animaapp.com/projects/64e41d552340cba66b90f01a/releases/665e706f7ae3ba3a45818d90/img/descending-number-order-1@2x.png"
									/>
								</div>
							</div>
						</div>
					</div>

					{/* Lot Area */}
					<div className="form-group">
						<div className="text-wrapper-37">Lot Area</div>
						<div className="listing-unit-input-group">
							<label className="text-wrapper-38" htmlFor="lot-area">
								What is the lot area of the unit?
							</label>
							<div className="lot-area-input-container">
								<div className="lot-area-logo">
									<img
										className="lot-area-logo-img"
										alt="lot-area-logo"
										src={floorlogo}
									/>
								</div>
								<input
									id="lot-area-input"
									className={`lot-area-input ${
										lotAreaInputError ? "error-input" : ""
									}`}
									type="text"
									value={formatlotArea(lotArea)}
									onChange={(e) => {
										const rawValue = removeCommas(e.target.value);
										if (!isNaN(rawValue)) {
											setLotArea(rawValue);
										}
										validateNumberInput(rawValue, setLotAreaInputError);
									}}
								/>
								<div className="sqm-prefix">sqm</div>
							</div>
							{lotAreaInputError && (
								<div className="error">{lotAreaInputError}</div>
							)}
						</div>
					</div>

					{/* Property ID Number */}
					<div className="form-group">
						<div className="text-wrapper-37">House/Lot Number</div>
						<div className="listing-unit-input-group">
							<label className="text-wrapper-38" htmlFor="prop-id">
								What is the house or lot number?
							</label>
							<div className="propid-input-container">
								<div className="propid-logo">
									<img
										className="propid-logo-img"
										alt="prop-id-logo"
										src={property}
									/>
								</div>
								<input
									id="propid-input"
									className={`propid-input ${
										propIdInputError ? "error-input" : ""
									}`}
									type="text"
									onChange={(e) => {
										setPropId(e.target.value);
										if (!e.target.value) {
											setPropIdInputError("Property ID is required.");
										} else {
											setPropIdInputError("");
										}
									}}
								/>
							</div>
							{propIdInputError && (
								<div className="error">{propIdInputError}</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UnitDetailsComponent;
