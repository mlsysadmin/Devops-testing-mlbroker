import React from "react";
import styles from '../styles/HomeHighlights.module.css';

function IncludesCard({ includes }) {
	let featuresPerColumn = 4;
	let columns = Math.ceil(includes.length / 4);
	let firstIndex = 0;

	const GetList = () => {
		let colNum = new Array(columns).fill(null);

		return colNum.map((item, index) => {
			// for (let index = 0; index < columns; index++) {
			const columnItems = includes.slice(firstIndex, firstIndex + featuresPerColumn);
			firstIndex = firstIndex + featuresPerColumn;
			
			return (
				<div key={index} className={styles.includesColumn}>
					<div className={styles.amenitiesGrid}>
						{/* <div key={index} className={styles.amenitiesColumn}> */}
							<ul className={styles.includesList}>
								{
									columnItems.map((feature, featureIndex) => {

										return (
											<li className={styles.includeItem} key={featureIndex}>{feature.FeatureName}</li>
										)
									})

								}
							</ul>
							
						{/* </div> */}
					</div>
				</div>
			)
		})

	}

	return (
		<article className={styles.card}>
			<h2 className={styles.cardHeader}>Includes</h2>
			<div className={styles.includesGrid}>
				{
					GetList()
				}
			</div>
		</article>
	);
}

export default IncludesCard;