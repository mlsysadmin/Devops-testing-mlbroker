import React, { useState, useEffect } from "react";
import ViewMoreModal from "./ViewMoreModal";
import "../../../styles/support/PhotoGallery.css";
const shuffleArray = (array) => {
  let shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const PhotoGallery = ({ photos, initialVisibleCount = 3 }) => {
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);
  const [showMoreModal, setShowMoreModal] = useState(false);
  const [displayPhotos, setDisplayPhotos] = useState([]);

  useEffect(() => {
    const shuffledPhotos = shuffleArray(photos);
    setDisplayPhotos(shuffledPhotos.slice(0, initialVisibleCount));
  }, [photos, initialVisibleCount]);

  const showMorePhotos = () => {
    setShowMoreModal(true);
  };

  const closeMoreModal = () => {
    setShowMoreModal(false);
  };

  const remainingPhotosCount = photos.length - visibleCount;

  return (
    <div className="photo-gallery">
      {displayPhotos.map((photo, index) => (
        <div className="card-image">
          <img key={index} src={photo} alt={`Photo ${index + 1}`} />
        </div>
      ))}
      {visibleCount < photos.length && (
        <>
          <div className="button" onClick={showMorePhotos}>
            <b>{remainingPhotosCount}</b>
            <p>View More Photos</p>
          </div>
        </>
      )}
      {showMoreModal && (
        <ViewMoreModal photos={photos} onClose={closeMoreModal} />
      )}
    </div>
  );
};

export default PhotoGallery;
