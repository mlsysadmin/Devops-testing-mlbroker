import React, { useEffect, useState } from "react";
import { Button, Input, Select, Slider, Dropdown, Tooltip } from "antd";

import { CaretDownOutlined, SettingOutlined } from "@ant-design/icons";
import "../../../styles/custom.css";
import CertainFeatureMenu from "./certainfeature";
import { GetProvince } from "../../../api/Public/Location.api";
import RoundSelect from "../selects/RoundSelect.custom";
import {
	ListingTypes,
	PropertyTypes,
} from "../../../utils/PropertyStaticData.utils";
import { CapitalizeString } from "../../../utils/StringFunctions.utils";
import { useNavigate } from "react-router-dom";

const ListingSearch = ({ location, searchParams, setSearchFilters }) => {
	const navigate = useNavigate();
 const originalPriceRange = [0, 100000000];
	const { Option } = Select;
	const [isAdvancedSearchOpen, setIsAdvancedSearchOpen] = useState(false);
	const [iscertainFeatureOpen, setcertainFeatureOpen] = useState(false);
	const [getProvince, setGetProvince] = useState([]);
	 const [sliderValue, setSliderValue] = useState(originalPriceRange[0]);
	const [isCustomRange, setIsCustomRange] = useState(false);
	const [checkFeatures, setCheckFeatures] = useState([]);
	const [bedValue, setBedValue] = useState(0);
	const [priceRange, setPriceRange] = useState(originalPriceRange);
	 const [isPriceRangeReset, setIsPriceRangeReset] = useState(false);
	const [newSearchParams, setNewSearchParams] = useState({});

	useEffect(() => {
		SetParamsAllField("features", checkFeatures);
	}, []);

	useEffect(() => {
		console.log("newSearchParams", newSearchParams);
		let params = {};
		const keys = Object.keys(searchParams);

		keys.forEach((key, i) => {
			params[key] = searchParams[key];
		});
		setNewSearchParams(params);
	}, [searchParams]);

	const handleAdvancedSearchClick = () => {
		setIsAdvancedSearchOpen(!isAdvancedSearchOpen);
	};

	const handleCertainFeatureClick = () => {
		setcertainFeatureOpen(!iscertainFeatureOpen);
	};
	 const handleCustomRangeClick = () => {
			if (isCustomRange) {
				setPriceRange(originalPriceRange);
				setSliderValue(originalPriceRange[0]);
			} else {
				setPriceRange([0, 0]); 
				setSliderValue(0);
			}
			setIsCustomRange(!isCustomRange); 
		};

		const handleMinChange = (e) => {
			const value = e.target.value.replace(/,/g, ""); 
			const parsedValue = parseInt(value, 10) || 0;
			setPriceRange([parsedValue, priceRange[1]]);
			SetParamsAllField("price_min", parsedValue);
				
		};

		const handleMaxChange = (e) => {
			const value = e.target.value.replace(/,/g, ""); 
				const parsedValue = parseInt(value, 10) || 0;
				setPriceRange([priceRange[0], parsedValue]);
				SetParamsAllField("price_max", value);	
		};

	const handleSliderChange = (value) => {
		console.log("value", value);

		setPriceRange(value);
		SetParamsAllField("price_min", value[0]);
		SetParamsAllField("price_max", value[1]);
	};

	const handlebedchange = (event) => {
		setBedValue(Number(event.target.value));
	};

	const handleSearch = () => {
		setSearchFilters();
	};
	const SelectNum = () => {
		const arr = new Array(6).fill("");

		const newArr = arr.map((_, i) => {
			return {
				// label: i + 1,
				// value: i + 1
				label: i,
				value: i,
			};
		});

		return newArr;
	};

	// const ValueGreaterThanZeroOrNull = (val, type, name, isNum) => {

	// 	const falsy = ["", undefined, null, 0];

	// 	if (isNum) {
	// 		if (type == "input") {
	// 			return !falsy.includes(val) ? val : null;
	// 		} else if (type == "select") {
	// 			return !falsy.includes(val) ? val : null;
	// 		}
	// 	} else {
	// 		if (type == "input") {
	// 			return !falsy.includes(val) ? CapitalizeString(val) : null;
	// 		} else if (type == "select") {
	// 			return !falsy.includes(val) ? CapitalizeString(val) : null;
	// 		}
	// 	}
	// }

	const HandleFieldChange = (e, name) => {
		SetParamsAllField(name, e.target.value);
	};

	const onInputBlur = (name, value) => {
		SetParamsAllField(name, value);
	};

	const onSelectionChange = (value, name) => {
		SetParamsAllField(name, value);
	};

	const SetParamsAllField = (name, value) => {
		if (name !== "features") {
			setNewSearchParams((prevParams) => ({ ...prevParams, [name]: value }));
		} else {
			setNewSearchParams((prevSearchParams) => {
				console.log("prev", prevSearchParams);

				const existingParamIndex = prevSearchParams["features"];

				console.log("exist", existingParamIndex);

				// if (existingParamIndex !== -1) {
				// 	if ((name === "features" && checkFeatures.length === 0)) {
				// 		prevSearchParams.splice(existingParamIndex, 1);
				// 	} else {
				// 		prevSearchParams[existingParamIndex].value = value;
				// 	}
				// } else {
				// 	if (
				// 		(name === "keyword" && value === "") ||
				// 		(name === "features" && checkFeatures.length === 0)
				// 	) {
				// 		prevSearchParams.splice(existingParamIndex, 1);
				// 	} else {
				// 		prevSearchParams.push({ name, value });
				// 	}
				// }
				// console.log("prevSearchParams: ", prevSearchParams);
				// return [...prevSearchParams];
			});
		}
	};

	const handleSearchClick = () => {
		let params = "";
		setPriceRange([priceRange[0],priceRange[1]]);

		Object.keys(newSearchParams).forEach((key, index, arr) => {
			if (
				[
					"keyword",
					"location",
					"property_type",
					"sale_type",
					"price_max",
					// 'price_min',
					"lot_area",
					"bedrooms",
					"bathrooms",
					"parking",
					"outdoor",
					"indoor",
				].includes(key)
			) {
				if (["", null, undefined, 0, "null"].includes(newSearchParams[key])) {
					delete newSearchParams[key];
				}
			} else if (
				["price_min"].includes(key) &&
				["", null, undefined, 0, "null"].includes(newSearchParams[key])
			) {
				if (
					["", null, undefined, 0, "null"].includes(
						newSearchParams["price_max"]
					)
				) {
					delete newSearchParams[key];
				} else {
					newSearchParams[key] = 0;
				}
			}
		});

		Object.keys(newSearchParams).forEach((key, i) => {
			if (i == 0) {
				params += `${key}=${newSearchParams[key]}`;
			} else {
				params += `&${key}=${newSearchParams[key]}`;
			}
		});

		// newSearchParams.forEach((item, key) => {

		// 	if (key == 0) {
		// 		if (item.name === "features") {
		// 			const indoorFeatures = item.value.filter(
		// 				(feature) => feature.name === "indoor"
		// 			);
		// 			const outdoorFeatures = item.value.filter(
		// 				(feature) => feature.name === "outdoor"
		// 			);

		// 			if (indoorFeatures.length > 0) {
		// 				const indoorValues = indoorFeatures
		// 					.map((feature) => feature.value)
		// 					.join(",");
		// 				params += `&indoor=${indoorValues}`;
		// 			}

		// 			if (outdoorFeatures.length > 0) {
		// 				const outdoorValues = outdoorFeatures
		// 					.map((feature) => feature.value)
		// 					.join(",");
		// 				if (params.length > 0) {
		// 					params += `&outdoor=${outdoorValues}`;
		// 				} else {
		// 					params += `&outdoor=${outdoorValues}`;
		// 				}
		// 			}
		// 		} else {
		// 			params += `${item.name}=${item.value}`;
		// 		}
		// 	} else {
		// 		if (item.name === "features") {
		// 			const indoorFeatures = item.value.filter(
		// 				(feature) => feature.name === "indoor"
		// 			);
		// 			const outdoorFeatures = item.value.filter(
		// 				(feature) => feature.name === "outdoor"
		// 			);

		// 			if (indoorFeatures.length > 0) {
		// 				const indoorValues = indoorFeatures
		// 					.map((feature) => feature.value)
		// 					.join(",");
		// 				params += `&indoor=${indoorValues}`;
		// 			}

		// 			if (outdoorFeatures.length > 0) {
		// 				const outdoorValues = outdoorFeatures
		// 					.map((feature) => feature.value)
		// 					.join(",");
		// 				if (params.length > 0) {
		// 					params += `&outdoor=${outdoorValues}`;
		// 				} else {
		// 					params += `&outdoor=${outdoorValues}`;
		// 				}
		// 			}
		// 		} else {
		// 			params += `&${item.name}=${item.value}`;
		// 		}
		// 	}
		// });
		console.log("params: ", params);
		console.log("new: ", newSearchParams);

		navigate(`/search/?${params}`);
		// navigate('/all')
	};

	return (
		<div className="first-content">
			<div className="sub-content1">
				<div className="subcontent-inputs-1">
					<input
						className="input-field"
						placeholder="Enter keyword"
						value={newSearchParams["keyword"]}
						onChange={(e) => HandleFieldChange(e, "keyword")}
						// onBlur={(e) => onInputBlur(e,"keyword")}
					/>
					<RoundSelect
						options={location}
						classname={"select-field"}
						placeholder={"Location"}
						// suffixIcon={<CaretDownOutlined />}
						value={newSearchParams["location"]}
						// value={newSearchParams['location']}
						onSelectionChange={(e) => onSelectionChange(e, "location")}
					/>
					<RoundSelect
						options={PropertyTypes}
						classname={"select-field"}
						placeholder={"Property Type"}
						// suffixIcon={<CaretDownOutlined  />}
						value={newSearchParams["property_type"]}
						// value={ValueGreaterThanZeroOrNull(newSearchParams["property_type"], "select", "Property Type", false)}
						onSelectionChange={(e) => onSelectionChange(e, "property_type")}
					/>
					<RoundSelect
						options={ListingTypes}
						classname={"select-field"}
						placeholder={"Listing Type"}
						// suffixIcon={<CaretDownOutlined />}
						value={newSearchParams["sale_type"]}
						onSelectionChange={(e) => onSelectionChange(e, "sale_type")}
					/>
					<Button className="right-button" onClick={() => handleSearchClick()}>
						Search
					</Button>
				</div>
				<div className="advance-searchdropdown">
					<div className="slider-container">
						<div className="advance-search-group1">
							<span>Price Range</span>
							<Slider
								className="searh-custom-slider"
								range
								min={0}
								max={100000000}
								// min={priceRange[0]}
								// max={priceRange[1]}
								step={10000}
								value={priceRange}
								onChange={handleSliderChange}
								defaultValue={[0, 100000000]}
							/>
						</div>
						<div className="range-container">
							<div className="range-border">
								<p>
									MIN &nbsp;
									{isCustomRange ? (
										<span className="range-prefix">
											<span style={{ marginRight: "2px" }}>PHP</span>
											<input
												type="text"
												value={
													priceRange[0] ? priceRange[0].toLocaleString() : "0"
												}
												// value={newSearchParams['price_min']}
												onChange={handleMinChange}
												className="range-input"
												// onBlur={() => onInputBlur('price_min', priceRange[0])}
											/>
										</span>
									) : (
										<b style={{ color: "#f60000" }}>
											PHP {priceRange[0].toLocaleString()}
										</b>
									)}
								</p>
							</div>
							<div className="range-border">
								<p>
									MAX &nbsp;
									{isCustomRange ? (
										<span className="range-prefix">
											<span style={{ marginRight: "2px" }}>PHP</span>
											<input
												type="text"
												value={
													priceRange[1] ? priceRange[1].toLocaleString() : "0"
												}
												// value={newSearchParams['price_max']}
												onChange={handleMaxChange}
												className="range-input"
												// onBlur={() => onInputBlur('price_min', priceRange[1])}
											/>
										</span>
									) : (
										<b style={{ color: "#f60000" }}>
											PHP {priceRange[1].toLocaleString()}
										</b>
									)}
								</p>
							</div>
							<Tooltip title="Custom Price Range" placement="topLeft">
								<SettingOutlined
									className="custom-range-button"
									onClick={handleCustomRangeClick}
								/>
							</Tooltip>
						</div>
					</div>
					<div className="subcontent-inputs-2">
						<input
							className="input-field"
							placeholder="Enter Lot Area"
							value={newSearchParams["lot_area"]}
							onChange={(e) => HandleFieldChange(e, "lot_area")}
							// onBlur={(e) => onInputBlur(e,"lot_area")}
						/>
						<RoundSelect
							options={SelectNum()}
							classname={"select-field"}
							placeholder={"Bedrooms"}
							// suffixIcon={<CaretDownOutlined />}
							value={newSearchParams["bedrooms"]}
							onSelectionChange={(e) => onSelectionChange(e, "bedrooms")}
						/>
						<RoundSelect
							options={SelectNum()}
							classname={"select-field"}
							placeholder={"Bathrooms"}
							// suffixIcon={<CaretDownOutlined />}
							value={newSearchParams["bathrooms"]}
							onSelectionChange={(e) => onSelectionChange(e, "bathrooms")}
						/>
						<RoundSelect
							options={SelectNum()}
							classname={"select-field"}
							placeholder={"Garage/Parking"}
							// suffixIcon={<CaretDownOutlined />}
							value={newSearchParams["parking"]}
							onSelectionChange={(e) => onSelectionChange(e, "parking")}
						/>
						<Dropdown
							menu={<CertainFeatureMenu setCheckFeatures={setCheckFeatures} />} // The content of the dropdown
							trigger={["click"]}
							open={iscertainFeatureOpen}
							onOpenChange={handleCertainFeatureClick}
						>
							<div className="select-field-features">
								<span>Features</span>
							</div>
						</Dropdown>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ListingSearch;
