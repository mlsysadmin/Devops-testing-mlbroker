import React, { useState } from "react";
import "../../../styles/support/uploadImages.css";

const FileUpload = () => {
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFiles = (files) => {
    const validImageTypes = ["image/jpeg", "image/png", "image/gif"];
    const fileArray = Array.from(files)
      .filter((file) => validImageTypes.includes(file.type))
      .map((file) => URL.createObjectURL(file));

    setImages((prevImages) => prevImages.concat(fileArray));
    console.log("Files uploaded:", fileArray);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  const handleBrowse = (e) => {
    handleFiles(e.target.files);
  };

  const handleDelete = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
    console.log("Image deleted at index:", index);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
    console.log("Modal closed");
  };

  return (
    <div className="upload-container">
      <div
        className="drag-area"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        <h2>Drag & Drop to Upload Images</h2>
        <span>OR</span>
        <span
          className="choose-file"
          onClick={() => document.getElementById("fileInput").click()}
        >
          Choose file
        </span>
        <input
          type="file"
          id="fileInput"
          multiple
          accept="image/jpeg, image/png, image/gif"
          onChange={handleBrowse}
          hidden
        />
      </div>
      <div id="gallery">
        {images.map((image, index) => (
          <div key={index} className="image-container">
            <img src={image} alt={`upload-${index}`} />
            <button className="delete-btn" onClick={() => handleDelete(index)}>
              X
            </button>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <div className="modal">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <img className="modal-content" src={currentImage} alt="view" />
        </div>
      )}
    </div>
  );
};

export default FileUpload;
