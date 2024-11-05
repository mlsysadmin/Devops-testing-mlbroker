import React, { useEffect, useState } from "react";
import styles from "../styles/VListingHouseDetails.module.css";

const VLFeatureCard = ({ title, iconSrc, value }) => {


  const pesoSign = "PHP";
  // Function to format the value
  const formatValue = (value) => {
    const cleanedValue = value.replace(/[^0-9.]/g, "");
    const numberValue = parseFloat(cleanedValue);
    if (title === "Price per SqM") {
      return `PHP ${new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(numberValue)}`;
    }
    return value;
  };
  return (
		<div className={styles.featureCard}>
			<div className={styles.featureTitle}>{title}</div>
			<div className={styles.featureContent}>
				{/* <img loading="lazy" src={iconSrc} alt="" className={styles.featureIcon} /> */}
				{iconSrc}
				<div className={styles.featureValue}>
					{formatValue(value)}
				</div>
			</div>
		</div>
	);
};

export default VLFeatureCard;
