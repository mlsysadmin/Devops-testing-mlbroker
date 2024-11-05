import React, { useState } from "react";
import "../styles/loancalculator.css";
import Ellipse1 from "../asset/icons/Ellipse 148.png";
import Ellipse2 from "../asset/icons/Ellipse 149.png";
import Ellipse3 from "../asset/icons/Ellipse 151.png";
import { Slider, Button, Menu, Dropdown, Select } from "antd";
import MultiRangeSlider from "multi-range-slider-react";
import { FooterComponent, CustomMlFooter } from "../components";

const LoanCalculatorComponent = () => {
	const [values, setValues] = useState({ min: 30, max: 60 });
	const [price1, setPrice1] = useState(0);
	const [inputValue, setInputValue] = useState(0);
	const [percentage2, setPercentage2] = useState(0);
	const [price2, setPrice2] = useState(0);
	const [selectedOption, setSelectedOption] = useState(30);

	const minPrice = 0;
	const maxPrice = 100000000;
	const maxPercentage = 100;

	const onPriceChange1 = (value) => {
		setPrice1(value);
	};

	// const totalmonths = selectedOption
	// const monthlyPayment = ;

	const handleInputChange = (e) => {
		const value = e.target.value.replace('%', '');
    	setInputValue(value);
	};

	const onPercentageChange2 = (value) => {
		setPercentage2(value);
		setPrice2(price1 * (value/100));
	};

	const onChangeComplete = (value) => {
		console.log("onChangeComplete: ", value);
	};

	const handleSliderChange = ({ minValue, maxValue }) => {
		setValues({ min: minValue, max: maxValue });
	};

	const handleDropdownChange = (event) => {
		setSelectedOption(event.target.value);
	};

	const calculateThirdValue = (min, max) => 100 - max;

	const thirdValue = calculateThirdValue(values.min, values.max);

	const resetValues = () => {
		// Reset all values to their initial states
		setPrice1(0);
		setPercentage2(0);
		setPrice2(0);
		setValues({ min: 30, max: 60 });
		setSelectedOption("30-year fixed");      
	};



	return (
		<div className="mort-container">
			<div className="mort-content">
				<div className="calculator-header">
					<h1 className="title-header">Mortgage Calculator</h1>
					<p className="sub-title-header">
						Find an estimated monthly payment and explore various payment based
						on your chosen amortization duration, payment frequency or down
						payment. Find the mortgage option best for you.
					</p>
				</div>
				<div className="mort-content-1">
					<div className="first-column">
						<div className="mortgage-content">
							<div className="calc-container">
								<span className="Label">Home price</span>
								<p className="sub-label">
									The amount you plan to offer for a home.
								</p>
								<div className="price-display">
									<p className="price-container-1">
										PHP &nbsp;
										{Array.isArray(price1) && price1.length === 2
											? `${price1[0]?.toLocaleString() || 0} - ${
													price1[1]?.toLocaleString() || 0
											  }`
											: price1?.toLocaleString() || 0}
									</p>
								</div>
								<Slider
									value={price1}
									min={minPrice}
									max={maxPrice}
									step={500000}
									onChange={onPriceChange1}
									onAfterChange={onChangeComplete}
								/>
							</div>
							<div className="percentage-container">
								<span className="Label">Down payment</span>
								<p className="sub-label">Cash you can pay when you close.</p>
								<div className="price-percentage-container">
									<p className="price-container">
										{" "}
										PHP &nbsp;
										{Array.isArray(price2) && price2.length === 2
											? `${price2[0]?.toLocaleString() || 0} - ${
													price2[1]?.toLocaleString() || 0
											  }`
											: price2?.toLocaleString() || 0}
									</p>
									<p className="price-percentage"> {percentage2}%</p>
								</div>
								<Slider
									value={percentage2}
									min={0}
									max={maxPercentage}
									onChange={onPercentageChange2}
									onAfterChange={onChangeComplete}
								/>
							</div>
							<div>
								<h3 className="payment">Where are you buying?</h3>
								<p className="payment-desc">Enter your desired location</p>
								<input
									type="text"
									className="input-infos"
									placeholder="City, neighborhood, or zip code"
								/>
							</div>
							<div>
								<h3 className="payment">Loan type</h3>
								<p className="payment-desc">
									Affects interest rates. 30 or 15 year loans are standard
								</p>

								<Select
									value={selectedOption}
									className="year-loans"
									onChange={(value) => setSelectedOption(value)}
									dropdownMatchSelectWidth={true} // Dropdown matches the select width
								>
									<Select.Option value={5}>5 Years Fixed</Select.Option>
									<Select.Option value={10}>10 Years Fixed</Select.Option>
									<Select.Option value={15}>15 Years Fixed</Select.Option>
								</Select>
							</div>
							<div className="mortgage-interest-group">
								<h3 className="payment">Mortgage interest rate</h3>
								<span className="payment-desc">
									Varies depending on lender and credit score.
								</span>
								<input
									className="input-infos"
									placeholder="0%"
									type="text"
									value={inputValue ? `${inputValue}%` : ""}
									onChange={handleInputChange}
								></input>
							</div>
						</div>
					</div>
					<div className="second-column">
						<div className="calc-range-container">
							<div className="calc-range">
								<div className="resetbtn">
									<Button id="Resetbtn" type="primary" onClick={resetValues}>
										Reset
									</Button>
								</div>
								<div className="mortgage-section">
									<div className="mort-range">
										<div>
											<h2>PHP11,154.89 per month</h2>
											<p className="year-percentage">
												{selectedOption} years fixed, {inputValue} %
											</p>
										</div>
										<MultiRangeSlider
											min={0}
											max={100}
											step={1}
											ruler={false}
											label={false}
											onInput={handleSliderChange}
											style={{
												border: "none",
												boxShadow: "none",
												padding: "15px 10px",
											}}
											barLeftColor="#D90000"
											barInnerColor="#ff6347"
											barRightColor=" rgb(255,160,122)"
											thumbLeftColor="#701c1c"
											thumbRightColor="#701c1c"
										/>
										<div className="interest-values">
											<div className="interest-description">
												<div className="interest">
													<p>
														<img
															src={Ellipse1}
															style={{ width: "15px", height: "15px" }}
															alt=""
														/>{" "}
														Principal and Interest
													</p>
												</div>
												<div className="interest">
													<p>
														<img
															src={Ellipse2}
															style={{ width: "15px", height: "15px" }}
															alt=""
														/>{" "}
														Property Taxes
													</p>
												</div>
												<div className="interest">
													<p>
														<img
															src={Ellipse3}
															style={{ width: "15px", height: "15px" }}
															alt=""
														/>{" "}
														Homeowners Insurance
													</p>
												</div>
											</div>
											<div className="value-percentage">
												<div className="interest">
													<p>
														PHP{((values.min * 8256.1) / 100).toFixed(2)} (
														{values.min}%)
													</p>
												</div>
												<div className="interest">
													<p>
														PHP
														{(
															((values.max - values.min) * 8256.1) /
															100
														).toFixed(2)}{" "}
														({values.max - values.min}%)
													</p>
												</div>
												<div className="interest">
													<p>
														PHP{((thirdValue * 8256.1) / 100).toFixed(2)} (
														{thirdValue}%)
													</p>
												</div>
											</div>
										</div>
									</div>
									<div className="pre-approvedbtn">
										<a href="/mortgage">
											<Button id="pre-approvedbtn" type="primary">
												Get pre-approved
											</Button>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<br />
			<br />
			<br />
			<br />
			<CustomMlFooter />
			<FooterComponent />
		</div>
	);
};

export default LoanCalculatorComponent;
