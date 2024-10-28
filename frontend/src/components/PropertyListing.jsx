import React, { useState, useEffect } from "react";
import styles from "../styles/ViewListing.module.css";
import redcamera from "../assets/icons/previewlisting/redcamera.png";
import { Tooltip } from "antd";
import viewlist from "../assets/images/viewlist.png";
import CustomTag from "./custom/tags/Tags.custom";
import { GetPropertiesBySaleStatus, GetUnitPhotos } from "../api/GetAllPublicListings";

import { GetPhotoLength, GetPhotoWithUrl } from "../utils/GetPhoto";
import {
  LeftOutlined,
  RightOutlined,
  HeartFilled,
  HeartOutlined,
} from "@ant-design/icons";
import DeafultFallbackImage from '../asset/Fallback2.png';
import { CapitalizeString } from "../utils/StringFunctions.utils";
import { AmountFormatterGroup } from "../utils/AmountFormatter";

const PropertyListing = ({ oneListing, unitPhotos }) => {
  // List of images for the carousel
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [checked, setIsChecked] = useState(false);
  const [likes, setLikes] = useState([]);
  const [showTooltip, setShowTooltip] = useState(false);

 const isSmallScreen = window.innerWidth <= 768; 

  const images = unitPhotos;
  
  const handleChange = (isChecked, tag, id) => {

		const nextSelectedTags =
			isChecked && !likes.includes(id)
				? [...likes, id]
				: likes.filter((t) => t !== id);

		setLikes(nextSelectedTags);
		setIsChecked(isChecked);

		if (isChecked) {
			setShowTooltip(true);
			setTimeout(() => setShowTooltip(false), 800);
		}
	};
  const handleSaveClick = () =>{
    setIsChecked(true);
    setShowTooltip(true);
		setTimeout(() => setShowTooltip(false), 800);
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const isNextDisabled =
    images.length === 0 || currentImageIndex === images.length - 1;

  const isPrevDisabled = images.length === 0 || currentImageIndex === 0;
  
  return (
    <article className={styles.propertyCard}>
      <img
        loading="lazy"
        src={GetPhotoWithUrl(images[currentImageIndex]) ? GetPhotoWithUrl(images[currentImageIndex]) : DeafultFallbackImage}
        className={styles.backgroundImage}
        alt="Property background"
      />
      <div className={styles.logoImage}>
        <img src={redcamera} className={styles.cameraImage} alt="Camera Icon" />
        <span className={styles.number}>
          {  images.length }
        </span>
      </div>
      <div className={styles.carouselControls}>
        <LeftOutlined
          className={`${styles.leftIcon} ${isPrevDisabled ? styles.disabled : ""
            }`}
          onClick={!isPrevDisabled ? prevImage : null}
        />
        <RightOutlined
          className={`${styles.rightIcon} ${isNextDisabled ? styles.disabled : ""
            }`}
          onClick={!isNextDisabled ? nextImage : null}
        />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.statusPriceContainer}>
          <div className={styles.statusBadge}>
            {
              `For ${CapitalizeString(oneListing.SaleType)}`
            }
          </div>
          <div className={styles.priceTag}>
            PHP {AmountFormatterGroup(oneListing.Price)} {
              oneListing.SaleType.toLowerCase() == 'rent' ? '/ month' : ''
            }
          </div>
        </div>
        <div className={styles.actionContainer}>
           <Tooltip
           color="var(--red)"
            title="Added to favorites" 
            visible={showTooltip} 
          ></Tooltip>
          <button className={styles.saveButton}>
            <CustomTag
              tagLabel={checked ? <HeartFilled /> : <HeartOutlined />}
              style={{
                fontSize: isSmallScreen ? "25px" : "30px",
                // fontSize: "30px",
                color: "var(--red)",
                backgroundColor: checked ? "transparent" : "",
                padding:"0px 0px 0px 5px",
              }}
              className="circle-tags-heart"
              checkable={true}
              checked={checked}
              handleChange={handleChange}
              listingId={oneListing.PropertyNo}
            />{" "}
            <span
              className={styles.saveText}
              style={{
                color: "var(--red",
                fontSize: "24px",
                padding: "0px 10px 0px 0px",
                fontWeight: "600",
              }}
              onClick={handleSaveClick}
            >
              Save
            </span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default PropertyListing;
