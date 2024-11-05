import React from "react";
import styles from "../styles/HomeHighlights.module.css";
import FeatureCard from "./FeatureCard";
import AmenitiesCard from "./AmenitiesCard";
import IncludesCard from "./IncludesCard";

// const features = [
// 	"Air Conditioning",
// 	"Balcony",
// 	"CCTV",
// 	"Driver Room",
// 	"Laundry Room",
// 	"Maid Room",
// 	"Powder Room",
// 	"Landscape Garden",
// 	"Open Car Spaces",
// 	"Sports Facilities",
// 	"Swimming Pool",
// 	"24/7 Security",
// ];

// const amenities = [
// 	[
// 		"Landscaped Parks with picnic grounds",
// 		"Jogging trails",
// 		"The Highland Park and Clubhouse",
// 		"The Emerald Lake valley",
// 	],
// 	[
// 		"Basketball and Tennis court",
// 		"Children Playground",
// 		"Water and Electric facilities",
// 		"State of the art communications facilities",
// 	],
// 	["5 Bedroom House for Rent in Maria Luisa Park"],
// ];

// const includes = [
// 	[
// 		"Living Room with Dining Area",
// 		"Kitchen Area",
// 		"Four Bedrooms each with toilet and bath",
// 		"Master Bedroom with walk-in closet, toilet and bath",
// 	],
// 	["Lanai", "Landscaped Garden", "Maid's Room", "Service Kitchen"],
// ];

const HomeHighlights = ({ features, amenities, includes }) => {

	// const indoorFeatures = oneListing.listings.amenities.indoor_features;
	// const outdoorFeatures = oneListing.listings.amenities.outdoor_features;

	// const allFeatures = [...indoorFeatures, ...outdoorFeatures.flat()];

	// const amenities = oneListing.listings.amenities.custom_amenities.feature_name.map((amenity) => amenity);
	// const includes = oneListing.listings.amenities.custom_inclusion.inclusion_name.map((inclusions)=> inclusions);

	return (
		<section className={styles.container}>
			<h1 className={styles.title}>Home Highlights</h1>
			{
				features.length !== 0 && (
					<FeatureCard features={features} />
				)
			} 
			{
				amenities.length !== 0 && (
					<AmenitiesCard amenities={amenities} />
				)
			}
			{
				includes.length !== 0 && (
					<IncludesCard includes={includes} />
				)
			}
			
		</section>
	);
};

export default HomeHighlights;
