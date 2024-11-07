import React, { useState, useEffect, useRef } from "react";
import "../styles/listing-form.css";

const DescriptionDetailsComponent = ({
	onComplete,
	setPropertyFields,
	setIsFocused,
}) => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [titleError, setTitleError] = useState("");
	const [descriptionError, setDescriptionError] = useState("");

	const validateTitle = (value) => {
		if (!value) {
			setTitleError("Title is required.");
		} else {
			setTitleError("");
		}
	};

	const validateDescription = (value) => {
		if (!value) {
			setDescriptionError("Description is required.");
		} else {
			setDescriptionError("");
		}
	};

	useEffect(() => {
		const isFormComplete =
			!titleError && !descriptionError && title !== "" && description !== "";
		if (isFormComplete) {
			setPropertyFields({
				UnitName: title,
				Details: description,
			});
			onComplete(true);
		} else {
			onComplete(false);
		}
	}, [
		titleError,
		descriptionError,
		title,
		description,
		onComplete,
		setPropertyFields,
	]);

	return (
		<div className="descriptionDetails">
			<h1>Description</h1>
			<div className="descriptionText">
				<div className="titleText">
					<h2 className="title">Title</h2>
					<input
						type="text"
						placeholder="Enter title"
						value={title}
						onChange={(e) => {
							setTitle(e.target.value);
							validateTitle(e.target.value);
						}}
						className={titleError ? "error-input" : ""}
					/>
					{titleError && <div className="error">{titleError}</div>}
					<p className="example">
						If there are important details that we weren't able to ask, you can
						specify it here. Please note: links and contact info entered will be removed.
					</p>
				</div>
				<div className="descriptionContent">
					<textarea
						placeholder="Enter Description"
						value={description}
						onFocus={() => setIsFocused(true)} 
						onBlur={() => setIsFocused(false)} 
						onChange={(e) => {
							setDescription(e.target.value);
							validateDescription(e.target.value);
						}}
						className={descriptionError ? "error-input" : ""}
					></textarea>
					{descriptionError && <div className="error">{descriptionError}</div>}
					<p className="example">Here's a nice, simple and concise example:</p>
					<p className="example">
						This semi-furnished unit for sale in Quezon City is an ideal space
						for young professionals or starting families. The Project is near
						Araneta Center, Ali Mall Shopping Complex, MRT, LRT, and EDSA.
						Residents will also have access to condominium amenities like a
						swimming pool, a gym, a playground, a basketball court, and a
						function room.
					</p>
				</div>
			</div>
		</div>
	);
};

export default DescriptionDetailsComponent;
