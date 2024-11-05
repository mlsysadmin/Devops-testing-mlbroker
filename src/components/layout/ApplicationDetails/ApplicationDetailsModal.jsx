import React, { useState, useEffect } from "react";
import "../../../styles/applicationModal.css";
import { message } from "antd";
import axios from "axios";
import {
	GetCountry,
	GetCities,
	GetProvince,
} from "../../../api/Public/Location.api";
import OTPModal from "../../OTPModal";
import { searchKyc } from "../../../api/Public/User.api";
import SemiRoundBtn from "../../custom/buttons/SemiRoundBtn.custom";
import { CloseOutlined } from "@ant-design/icons";

const FileUploadGrid = ({ validateFiles }) => {
	const [files, setFiles] = useState([null, null, null, null]);

	const handleFileChange = (index, event) => {
		const file = event.target.files[0];
		if (file && !file.type.startsWith("image/")) {
			message.error("Only image files are allowed!");
			return;
		}
		const newFiles = [...files];
		newFiles[index] = file;
		setFiles(newFiles);
		validateFiles(newFiles);
	};

	const descriptions = [
		{ label: "Valid ID*" },
		{ label: "Latest (ITR)*", descriptionSpan: "Income Tax Return" },
		{ label: "Latest Payslip*" },
		{ label: "Latest (COE)*", descriptionSpan: "Certificate of Employment" },
	];

	return (
		<div className="grid-container">
			{files.map((file, index) => (
				<div key={index} className="grid-item" style={{cursor:"pointer"}}>
					<div className="add-Button">
						<input
							type="file"
							id={`file-input-${index}`}
							onChange={(event) => handleFileChange(index, event)}
							accept="image/*"
							required
						/>
						{!file && (
							<label htmlFor={`file-input-${index}`} className="file-label">
								<span className="plus-icon">+</span>
							</label>
						)}
						{file && (
							<img
								src={URL.createObjectURL(file)}
								alt={`Selected file ${index}`}
								className="selected-image"
							/>
						)}
					</div>
					<div className="file-description">
						<p>{descriptions[index].label}</p>
						{descriptions[index].descriptionSpan && (
							<p className="description-span">
								{descriptions[index].descriptionSpan}
							</p>
						)}
					</div>
				</div>
			))}
		</div>
	);
};

const ApplicationDetailModal = ({ visible, onClose, setShowApplicationDetailModal }) => {
	const [showOtpModal, setShowOtpModal] = useState(false);
	const [formValues, setFormValues] = useState({
		mobileNumber: "",
		lastName: "",
		firstName: "",
		email: "",
		country: "",
		province: "",
		city: "",
		zipcode: "",
		address: "",
	});
	const [files, setFiles] = useState([null, null, null, null]);
	const [userDetails, setUserDetails] = useState({});
	const [getCountry, setGetCountry] = useState([]);
	const [getProvince, setGetProvince] = useState([]);
	const [getCities, setGetCities] = useState([]);
	const [errors, setErrors] = useState({});

	const allCountries = async () => {
		const datares = await GetCountry();
		setGetCountry(datares);
		console.log("These are countries:", datares);
	};

	const allCities = async () => {
		const datarescities = await GetCities();
		setGetCities(datarescities);
		console.log("These are cities:", datarescities);
	};

	const allProvince = async () => {
		const dataresprovince = await GetProvince();
		setGetProvince(dataresprovince);
		console.log("These are provinces:", dataresprovince);
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				await Promise.all([allCountries(), allCities(), allProvince()]);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

const handleInputChange = async (e) => {
	const { name, value } = e.target;
	setFormValues((prevFormData) => ({
		...prevFormData,
		[name]: value,
	}));

	if (name === "mobileNumber" && value.length === 11) {
		try {
			const response = await searchKyc(value);
			const respData = response.data.data;
			console.log("datas:", respData);

			if (respData) {
				setUserDetails(respData);
				setFormValues((prevFormData) => ({
					...prevFormData,
					firstName: respData.name?.firstName
						? respData.name.firstName.replace(/.(?=.{2})/g, "*")
						: "",
					lastName: respData.name?.lastName
						? respData.name.lastName.replace(/.(?=.{2})/g, "*")
						: "",
					middleName: respData.name?.middleName
						? respData.name.middleName.replace(/.(?=.{2})/g, "*")
						: "",
					suffix: respData.name?.suffix || "",
					email: respData.email
						? respData.email.replace(/(.{2}).*(?=@)/, "$1****")
						: "",
					country: respData.addresses?.current?.addressL0Name || "",
					province: respData.addresses?.current?.addressL1Name || "",
					city: respData.addresses?.current?.addressL2Name || "",
					address: respData.addresses?.current?.otherAddress || "",
					zipcode: respData.addresses?.current?.zipCode || "",
				}));
			} else {
				setUserDetails(null);
				setFormValues((prevFormData) => ({
					...prevFormData,
					firstName: "", 
					lastName: "",
					middleName: "",
					suffix: "",
					email: "",
					country: "",
					province: "",
					city: "",
					address: "",
					zipcode: "",
				}));
			}
		} catch (error) {
			console.error("Error fetching user details:", error);
			setUserDetails(null);
			setFormValues((prevFormData) => ({
				...prevFormData,
				firstName: "",
				lastName: "",
				middleName: "",
				suffix: "",
				email: "",
				country: "",
				province: "",
				city: "",
				address: "",
				zipcode: "",
			}));
		}
	}
};


	const validateFiles = (newFiles) => {
		setFiles(newFiles);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		// const errors = {};
		// Object.keys(formValues).forEach((key) => {
		// 	if (!formValues[key]) {
		// 		errors[key] = "This field is required";
		// 	}
		// });

		// if (Object.keys(errors).length > 0) {
		// 	setErrors(errors);
		// 	message.error("All fields are required!");
		// 	return;
		// }

		if (!files.every((file) => file)) {
			message.error("All files must be uploaded!");
			return;
		}

		console.log("Form values:", formValues);
		console.log("Files selected:", files);

		// Reset the form and files after successful submission
		setFormValues((prevFormData) => ({
			...prevFormData,
			firstName: "",
			lastName: "",
			middleName: "",
			suffix: "",
			email: "",
			country: "",
			province: "",
			city: "",
			address: "",
			zipcode: "",
		}));
		setFiles([null, null, null, null]);
		setErrors({});

		setShowOtpModal(true);
	};

	if (!visible && !showOtpModal) return null;

	return (
		<>
			{visible && !showOtpModal && (
				<div
					className="modal-main-container"
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
						overflowY: "scroll",
						bottom: '50px'
					}}
				>
					<div className="overlay" onClick={onClose}></div>
					<div className="application-modal-container">
						<div className="modal-header">
						<h3 className="application-header">Application Details</h3>
						<button className="close-button" onClick={() => setShowApplicationDetailModal(false)} style={{
							backgroundColor: "transparent", border: 'none', fontSize: '15px', 
							color: 'gray', cursor: 'pointer'
						}}>
							<CloseOutlined/>
						</button>
						</div>
						<form onSubmit={handleSubmit} className="application-modal-content">
							<div className="application-row">
								<div className="application-first-row">
									<div className="application-content--mobile-number">
										<p>Mobile Number</p>
										<input
											type="text"
											name="mobileNumber"
											className="application-input"
											placeholder="09"
											value={formValues.mobileNumber}
											onChange={handleInputChange}
											required
											pattern="\d{10,11}"
											maxLength="11"
											title="Mobile number should be 10-11 digits"
										/>
									</div>
								</div>
								<div className="application-second-row">
									<div className="application-content">
										<p>Lastname </p>
										<input
											type="text"
											name="lastName"
											className="application-input"
											placeholder="Lastname"
											value={formValues.lastName}
											onChange={handleInputChange}
											disabled={!!userDetails?.name?.lastName}
											required
										/>
									</div>
									<div className="application-content">
										<p>First Name</p>
										<input
											type="text"
											name="firstName"
											className="application-input"
											placeholder="First Name"
											value={formValues.firstName}
											onChange={handleInputChange}
											disabled={!!userDetails?.name?.firstName}
											required
										/>
									</div>
									<div className="application-content">
										<p>Email Address</p>
										<input
											type="email"
											name="email"
											className="application-input"
											placeholder="Email Address"
											value={formValues.email}
											onChange={handleInputChange}
											disabled={!!userDetails?.email}
											required
										/>
									</div>
								</div>
								<div className="application-third-row">
									<div className="application-content">
										<p>Country</p>
										<select
											name="country"
											className="application-select"
											value={formValues.country}
											onChange={handleInputChange}
											disabled={
												!!userDetails?.addresses?.current?.addressL0Name
											}
											required
										>
											<option value="">Select Country</option>
											{getCountry?.map((country, index) => (
												<option key={index} value={country.name}>
													{country.name}
												</option>
											))}
										</select>
										{errors.country && (
											<p className="error">{errors.country}</p>
										)}
									</div>
									<div className="application-content">
										<p>Province/State</p>
										<select
											name="province"
											className="application-select"
											value={formValues.province}
											onChange={handleInputChange}
											disabled={
												!!userDetails?.addresses?.current?.addressL1Name
											}
											required
										>
											<option value="">Select Province</option>
											{getProvince?.map((province, index) => (
												<option key={index} value={province.name}>
													{province.name}
												</option>
											))}
										</select>
										{errors.province && (
											<p className="error">{errors.province}</p>
										)}
									</div>
									<div className="application-content">
										<p>City/Town</p>
										<select
											name="city"
											className="application-select"
											value={formValues.city}
											onChange={handleInputChange}
											disabled={
												!!userDetails?.addresses?.current?.addressL2Name
											}
											required
										>
											<option value="">Select City</option>
											{getCities?.map((city, index) => (
												<option key={index} value={city.name}>
													{city.name}
												</option>
											))}
										</select>
										{errors.city && <p className="error">{errors.city}</p>}
									</div>
								</div>
								<div className="application-fourth-row">
									<div className="application-content--zipcode">
										<p>Zipcode</p>
										<input
											type="text"
											name="zipcode"
											className="application-input"
											placeholder="Zipcode"
											value={formValues.zipcode}
											onChange={handleInputChange}
											disabled={!!userDetails?.addresses?.current?.zipCode}
											required
										/>
									</div>
									<div className="address-input">
										<p>House No/Unit/Building Name/Street</p>
										<input
											type="text"
											name="address"
											className="application-input"
											placeholder="Enter House No/Unit/Building Name/Street"
											value={formValues.address}
											onChange={handleInputChange}
											disabled={!!userDetails?.addresses?.current?.otherAddress}
											required
										/>
									</div>
								</div>
							</div>
							<div>
								<h4 style={{ fontSize: "16px", color: "black" }}>
									Upload Documents
								</h4>
								<p style={{ color: "#8C9094" }}>
									All documents are required to be uploaded{" "}
									<span style={{ color: "red" }}>**</span>
								</p>
								<FileUploadGrid validateFiles={validateFiles} />
							</div>
							<div className="application-submitbtn">
								{/* <button type="submit" id="application-submitbtn">
									Submit
								</button> */}
								<SemiRoundBtn
									label={'Submit'}
									id="application-submitbtn"
								/>
							</div>
						</form>
					</div>
				</div>
			)}
			<OTPModal visible={showOtpModal} onClose={() => setShowOtpModal(false)} />
		</>
	);
};

export default ApplicationDetailModal;
