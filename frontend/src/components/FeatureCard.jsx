import React from "react";
import styles from '../styles/HomeHighlights.module.css';


const FeatureCard = ({ features }) => {

	let featuresPerColumn = 4;
	let columns = Math.ceil(features.length / 4);
	let firstIndex = 0;

	const GetList = () => {
		let colNum = new Array(columns).fill(null);

		return colNum.map((item, index) => {
			// for (let index = 0; index < columns; index++) {
			const columnItems = features.slice(firstIndex, firstIndex + featuresPerColumn);
			firstIndex = firstIndex + featuresPerColumn;

			return (
				<div key={index} className={styles.featuresColumn}>
					<ul className={styles.featuresList}>
						{
							columnItems.map((feature, featureIndex) => {
								return (
									<li className={styles.featureItem} key={featureIndex}>{feature.FeatureName}</li>
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
			<h2 className={styles.cardHeader}>Features</h2>
			<div className={styles.cardContent}>
				{/* <ul>
					{features?.slice(0,4).map((feature, index) => (
						<li key={index} className={styles.featureItem}>
							{feature.FeatureName}
						</li>
					))}
				</ul> */}
				{
					GetList()
				}
			</div>
		</article>
	);
};

export default FeatureCard;