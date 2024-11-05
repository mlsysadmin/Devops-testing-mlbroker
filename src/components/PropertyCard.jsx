import React from 'react';
import "../styles/propertyCard.css";
import { Button } from "antd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRuler, faCar, faBed, faShower, faLocationDot, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import propertyImg from "../asset/icons/image 155.png";

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <div className="property-info-section">
        <h2>{property.title}</h2>
        <p>{property.location}</p>
        <p>Property ID: {property.id}</p>
        <p className="price">PHP{property.price}</p>
        <div className="property-details-content">
          <div className="detail">
            <span>Bedrooms</span>
            <span><FontAwesomeIcon icon={faBed} /> {property.bedrooms}</span>
          </div>
          <div className="detail">
            <span>Bathrooms</span>
            <span><FontAwesomeIcon icon={faShower} /> {property.bathrooms}</span>
          </div>
          <div className="detail">
            <span>Garage</span>
            <span><FontAwesomeIcon icon={faCar} /> {property.garage}</span>
          </div>
          <div className="detail">
            <span>Area</span>
            <span> <FontAwesomeIcon icon={faRuler} />
            {property.area} SqM</span>
          </div>
          <div className="detail">
            <span>Price per SqM</span>
            <span>PHP{property.pricePerSqM}</span>
          </div>
        </div>
        <div className="buttons">
          <Button id='btn'><FontAwesomeIcon icon={faLocationDot} /> Show Property on Map</Button>
          <Button id='btn'><FontAwesomeIcon icon={faEarthAmericas} /> View Listing Details</Button>
        </div>
      </div>
      <div className="property-image">
        <img src={propertyImg} alt="Property" />
      </div>
    </div>
  );
};

export default PropertyCard;
