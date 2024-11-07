import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './RealEstateListing.css'; // This is the CSS file for styling

const RealEstateListing = () => {
  return (
    <div className="container">
      <div className="image-container large">
        <img src="bedroom.png" alt="Bedroom" className="bedroom" />
        <div className="bottom-left">
          <h2>5 Bedroom House for Rent in Maria Luisa Park</h2>
          <p>
            <img src={location} alt="Location Icon" />
            Maria Luisa Estate Park, Banilad, Cebu City
          </p>
        </div>
        <div className="icns">
          <div className="icon-circle">
            <i className="fas fa-heart"></i>
          </div>
          <div className="icon-circle">
            <img src="filter_alt.png" className="fas fa-filter" alt="Filter Icon" />
          </div>
          <div className="icon-circle">
            <img src="printer.png" alt="Printer Icon" />
          </div>
          <div className="icon-circle">
            <img src="share.png" alt="Share Icon" />
          </div>
        </div>
        <div className="for-sale">For Sale</div>
        <div className="overlay">
          <h2>5 Bedroom House for Rent in Maria Luisa Park</h2>
          <span className="price-tag">PHP 120,000,000</span>
        </div>
      </div>
      <div className="small-images">
        <Carousel showThumbs={false} showStatus={false}>
          <div className="small-image">
            <img src="livingroom.png" alt="Living Room" />
          </div>
          <div className="small-image">
            <img src="bathroom.png" alt="Bathroom" />
          </div>
        </Carousel>
        <div className="camera-info">
          <img src="camera.png" alt="Camera Icon" className="camera" />
          <h2>18</h2>
          <p>Photos</p>
        </div>
      </div>
    </div>
  );
};

export default RealEstateListing;
