import React from 'react';
import styles from '../styles/VListingHouseDetails.module.css';
import VLFeatureCard from './VLFeatureCard';
import { Link } from "react-router-dom";


const HouseDetails = () => {
    
  const features = [
    { title: 'Bedrooms', iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ffa0b4ae5294fab32f04e2df5bccc9e215b962c4a23b87baa3b3a4f9d11a3bf0?apiKey=e5af2e14d6ff40c0b0f04c88d87330a5&&apiKey=e5af2e14d6ff40c0b0f04c88d87330a5', value: '5' },
    { title: 'Bathrooms', iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/372723378f9151c6cced3d234ccf4d85735cb0c5bd16df4ca6bac2adaf6189fb?apiKey=e5af2e14d6ff40c0b0f04c88d87330a5&&apiKey=e5af2e14d6ff40c0b0f04c88d87330a5', value: '5' },
    { title: 'Garage', iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a17243275d0fedc1a93dbce25cd9571671d11f482871f3219644e3e5fe1afa72?apiKey=e5af2e14d6ff40c0b0f04c88d87330a5&&apiKey=e5af2e14d6ff40c0b0f04c88d87330a5', value: '3' },
    { title: 'Area', iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c279a46ede99c04710deb1142ac34bf9008c0ed800284e2cdc230b0e6a25fc86?apiKey=e5af2e14d6ff40c0b0f04c88d87330a5&&apiKey=e5af2e14d6ff40c0b0f04c88d87330a5', value: '300 SqM' },
    { title: 'Price per SqM', iconSrc: '', value: 'PHP400,000' }
  ];

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>5 Bedroom House for Rent in Maria Luisa Park</h1>
      <p className={styles.location}>Maria Luisa Estate Park, Banilad, Cebu City</p>
      <Link to ="/mortgage">
      <button className={styles.ctaButton}>Get Pre-Approved</button>
      </Link>
      <h2 className={styles.sectionTitle}>About this home</h2>
      <section className={styles.featureGrid}>
        {features.map((feature, index) => (
          <VLFeatureCard key={index} {...feature} />
        ))}
      </section>
      <h2 className={styles.descriptionTitle}>Description</h2>
      <p className={styles.descriptionText}>
        Maria Luisa Estate Park, Cebu's most prestigious and most sought after residential development both by locals and foreigners alike, is set proudly atop the Banilad and Busay Hills of Cebu. It encompasses 200 hectares of prime residential property with the excellent reputation of being the most desirable and exclusive neighborhood to live in Cebu. Homes there catches the cool breeze while enjoying a magnificent view of the city and the Visayan sea. It has been known to provide comfort, security and safety to its residents.
      </p>
    </main>
  );
};

export default HouseDetails;