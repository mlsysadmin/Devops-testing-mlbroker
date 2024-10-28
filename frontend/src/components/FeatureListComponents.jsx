import React, { useEffect, useState, useCallback } from "react";
import FeatureList from "./custom/custom.featureLists"; // Adjust the import path accordingly
import AddFeature from "./custom/custom.featureLists";
import {
	GetAllIndoorAmenities,
	GetAllOutdoorAmenities,
} from "../api/GetAllAmenities";
import "../styles/listing-form.css";
import axios from "axios";

const FeaturedComponents = ({
	onComplete,
	setPropertyFields,
	selectedPropertyTab,
}) => {
	const [indoorSelectedFeatures, setIndoorSelectedFeatures] = useState([]);
	const [outdoorSelectedFeatures, setOutdoorSelectedFeatures] = useState([]);
	const [indooramenities, setIndoorAmenities] = useState([]);
	const [outdooramenities, setOutdoorAmenities] = useState([]);

	const toggleFeature = useCallback((feature, type) => {
		if (type === "Indoor Features") {
			setIndoorSelectedFeatures((prevSelectedFeatures) =>
				prevSelectedFeatures.includes(feature)
					? prevSelectedFeatures.filter((item) => item !== feature)
					: [...prevSelectedFeatures, feature]
			);
		} else if (type === "Outdoor Features") {
			setOutdoorSelectedFeatures((prevSelectedFeatures) =>
				prevSelectedFeatures.includes(feature)
					? prevSelectedFeatures.filter((item) => item !== feature)
					: [...prevSelectedFeatures, feature]
			);
		}
	}, []);

	const indoorAmenities = async () => {
		const response = await GetAllIndoorAmenities();
		setIndoorAmenities(response);
		// console.log("response", response);
	};
	useEffect(() => {
		indoorAmenities();
		outdoorAmenities();
	}, []);

	const outdoorAmenities = async () => {
		const response = await GetAllOutdoorAmenities();
		setOutdoorAmenities(response);
		// console.log("response", response);
	};

	useEffect(() => {
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
		if (!requiresAdditionalFields) {
			onComplete(true);
			// setPropertyFields({ Features: [] });
			return; 
		}

		const featuresComplete =
			indoorSelectedFeatures.length > 0 || outdoorSelectedFeatures.length > 0;
		if (featuresComplete) {
			const indoorFeaturesWithType = indoorSelectedFeatures.map((feature) => ({
				FeatureName: feature,
				Type: "features",
			}));

			const outdoorFeaturesWithType = outdoorSelectedFeatures.map(
				(feature) => ({
					FeatureName: feature,
					Type: "features",
				})
			);
			setPropertyFields({
				Features: [...indoorFeaturesWithType, ...outdoorFeaturesWithType],
			});
			onComplete(true);
		} else {
			setPropertyFields({ Features: [] });
			onComplete(false);
		}
	}, [indoorSelectedFeatures, outdoorSelectedFeatures, onComplete, selectedPropertyTab]);

	return (
		<div className="featureList">
			<h2>Features</h2>
			<p>
				Why is your property so great? Tell us more about your property so that
				property seekers can learn even more about your offer.
			</p>
			<div className="features">
				<FeaturesList
					title="Indoor Features"
					features={indooramenities}
					selectedFeatures={indoorSelectedFeatures}
					toggleFeature={toggleFeature}
				/>
				<FeaturesList
					title="Outdoor Features"
					features={outdooramenities}
					selectedFeatures={outdoorSelectedFeatures}
					toggleFeature={toggleFeature}
				/>
			</div>
			<AddFeature setPropertyFields={setPropertyFields} />
		</div>
	);
};

const FeaturesList = ({ title, features, selectedFeatures, toggleFeature }) => (
	<div className="featureCards">
		<h3>{title}</h3>
		<div className="features">
			{features?.map((feature, index) => (
				<div key={index}>
					<span
						className={`feature-item ${
							selectedFeatures.includes(feature.feature_name) ? "selected" : ""
						}`}
						onClick={() => toggleFeature(feature.feature_name, title)}
						style={{
							backgroundColor: selectedFeatures.includes(feature.feature_name)
								? "#d90000"
								: "transparent",
							color: selectedFeatures.includes(feature.feature_name)
								? "white"
								: "inherit",
						}}
					>
						{feature.feature_name}
					</span>
				</div>
			))}
		</div>
	</div>
);

export default FeaturedComponents;
