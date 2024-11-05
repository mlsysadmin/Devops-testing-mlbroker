import React from 'react';
import styles from '../styles/HomeHighlights.module.css';

const FeatureItem = ({ text }) => (
  <div className={styles.featureItem}>{text}</div>
);

export default FeatureItem;