import React from "react";
import styles from '../styles/HomeHighlights.module.css';

function AmenitiesCard({ amenities }) {
	let featuresPerColumn = 4;
	let columns = Math.ceil(amenities.length / 4);
	let firstIndex = 0;

	const GetList = () => {
		let colNum = new Array(columns).fill(null);

		return colNum.map((item, index) => {
			// for (let index = 0; index < columns; index++) {
			const columnItems = amenities.slice(firstIndex, firstIndex + featuresPerColumn);
			firstIndex = firstIndex + featuresPerColumn;

			return (
				<div key={index} className={styles.amenitiesColumn}>
					<ul className={styles.amenitiesList}>
						{
							columnItems.map((feature, featureIndex) => {

								return (
									<li className={styles.includeItem} key={featureIndex}>{feature.FeatureName}</li>
								)
							})

						}
					</ul>
				</div>
			)
		})

	}
	return (
		<article className={styles.card}>
			<h2 className={styles.cardHeader}>Amenities</h2>
			<div className={styles.amenitiesContainer}>
				<div className={styles.amenitiesGrid}>
					{/* {amenities.map((columnItems, columnIndex) => (
						<div key={columnIndex} className={styles.amenitiesColumn}>
							<ul className={styles.amenitiesList}>
								<li className={styles.amenityItem}>{columnItems.FeatureName}</li>
							</ul>
						</div>
					))} */}
					{
						GetList()
					}
				</div>
			</div>
		</article>
	);
}

export default AmenitiesCard;