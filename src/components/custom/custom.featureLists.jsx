import React, { useEffect, useState } from "react";
import "../../styles/additionalFeature.css";
import { MinusCircleOutlined } from '@ant-design/icons';

const AddFeature = ({ setPropertyFields }) => {
	const initialFeatures = ["Landscaped Parks with picnic grounds"];
	const initialIncludes = ["Living Room with Dining Area"];

	const [features, setFeatures] = useState([]);
	const [includes, setIncludes] = useState([]);
	const [selectedFeatures, setSelectedFeatures] = useState([]);
	const [selectedIncludes, setSelectedIncludes] = useState([]);
	const [newFeature, setNewFeature] = useState("");
	const [newInclude, setNewInclude] = useState("");
	const [addingFeature, setAddingFeature] = useState(false);
	const [addingInclude, setAddingInclude] = useState(false);

	const addNewItem = (item, setItems, setNewItem, setAdding, category) => {
		if (item.trim()) {
			setItems((prevItems) => [...prevItems, item]);
			setNewItem("");
			setAdding(false);
			setPropertyFields((prevFields) => ({
				AddedFeature: [
					// ...prevFields.Features,
					{ FeatureName: item, Type: category },
				],
			}));
		}
	};

	const removeItem = (index, setItems, category) => {
		setItems((prevItems) => {
			const updatedItems = prevItems.filter((_, i) => i !== index);
			setPropertyFields((prevFields) => {
				const featuresWithType = [...features, ...includes].map((item) => ({
					FeatureName: item,
					Type: includes.includes(item) ? "Includes" : "Amenities",
				}));

				return {
					...prevFields,
					AddedFeature: {
						[category]: updatedItems,
					},
					AddedFeature: featuresWithType,
				};
			});

			return updatedItems;
		});
	};

	// useEffect(() => {
	// 	console.log("Features State Updated:", features);
	// }, [features]);

	// useEffect(() => {
	// 	console.log("Includes State Updated:", includes);
	// }, [includes]);

	useEffect(() => {
		const featuresWithType = [
			...features.map((feature) => ({
				FeatureName: feature,
				Type: "amenities",
			})),
			...includes.map((include) => ({
				FeatureName: include,
				Type: "includes",
			})),
		];

		setPropertyFields({
			AddedFeature: [...featuresWithType],
		});
		// console.log("featurewithtpye:", featuresWithType);

		// setPropertiesFields((prevFields) => {
		// 		Features: [
		// 			...prevFields.Features,
		// 			...featuresWithType,
		// 		],

		// 	console.log("Updated Property Fields:", updatedFields);
		// 	return updatedFields;
		// });
	}, [features, includes, setPropertyFields]);

	return (
		<div className="AddFeature">
			<FeatureList
				title="Features and Amenities"
				items={features}
				selectedItems={selectedFeatures}
				setSelectedItems={setSelectedFeatures}
				newItem={newFeature}
				setNewItem={setNewFeature}
				addingItem={addingFeature}
				setAddingItem={setAddingFeature}
				addNewItem={() =>
					addNewItem(
						newFeature,
						setFeatures,
						setNewFeature,
						setAddingFeature,
						"Amenities"
					)
				}
				removeItem={(index) => removeItem(index, setFeatures, "Amenities")}
			/>
			<FeatureList
				title="Includes"
				items={includes}
				selectedItems={selectedIncludes}
				setSelectedItems={setSelectedIncludes}
				newItem={newInclude}
				setNewItem={setNewInclude}
				addingItem={addingInclude}
				setAddingItem={setAddingInclude}
				addNewItem={() =>
					addNewItem(
						newInclude,
						setIncludes,
						setNewInclude,
						setAddingInclude,
						"Includes"
					)
				}
				removeItem={(index) => removeItem(index, setIncludes, "Includes")}
			/>
		</div>
	);
};

const FeatureList = ({
	title,
	items,
	selectedItems,
	newItem,
	setNewItem,
	addingItem,
	setAddingItem,
	addNewItem,
	removeItem,
}) => (
	<div className="addFeatureList">
		<div className="top">
			<div className="titles">
				<h2>{title}</h2>
				<p>Enter text that is not found in the options above</p>
			</div>
			{!addingItem && (
				<button className="add-button" onClick={() => setAddingItem(true)}>
					Add +
				</button>
			)}
		</div>
		<div className="features">
			{items.map((item, index) => (
				<ul key={index}>
					<li>
						<div className="feature-item-container">
							<span
								className={`feature-item ${
									selectedItems.includes(item) ? "selected" : ""
								}`}
							>
								{item}
							</span>
							<button onClick={() => removeItem(index)}>
								<MinusCircleOutlined
									style={{ fontSize: "24px", color: "#d90000" }}
								/>
							</button>
						</div>
					</li>
				</ul>
			))}
			{addingItem && (
				<div className="add-new-item">
					<input
						type="text"
						value={newItem}
						onChange={(e) => setNewItem(e.target.value)}
						placeholder={`Enter text that is not found in the options above`}
						onBlur={addNewItem}
						autoFocus
					/>
				</div>
			)}
		</div>
	</div>
);

export default AddFeature;
