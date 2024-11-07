import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "../../../styles/support/ViewMoreModal.css";

const ViewMoreModal = ({ photos, onClose, disabled }) => {
  const [photoList, setPhotoList] = useState(photos);
  const [isUpdateDisabled, setIsUpdateDisabled] = useState(disabled);

  const onDrop = useCallback((acceptedFiles) => {
    const newPhotos = acceptedFiles.map((file) => URL.createObjectURL(file));
    setPhotoList((prevPhotos) => [...prevPhotos, ...newPhotos]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const handleCancel = () => {
    onClose(); // Call the onClose prop to close the modal
  };
  const rows = [];
  for (let i = 0; i < photoList.length; i += 3) {
    rows.push(photoList.slice(i, i + 3));
  }

  return (
    <div className="view-more-modal-overlay" onClick={onClose}>
      <div className="view-more-modal" onClick={(e) => e.stopPropagation()}>
        <span className="view-more-modal-close" onClick={onClose}>
          &times;
        </span>
        <div className="title">
          <strong>Photos</strong>{" "}
          <strong>
            Listing ID: <span>BRSABCDEFGH</span>
          </strong>
        </div>
        <div {...getRootProps({ className: "drag-and-drop-area" })}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
          )}
        </div>
        <div className="uploaded-photos">
          {rows.map((row, rowIndex) => (
            <div className="row" key={rowIndex}>
              <div className="large-photo uploaded-photo">
                <img src={row[0]} alt={`Uploaded ${rowIndex * 3 + 1}`} />
              </div>
              <div className="small-photo">
                {row[1] && (
                  <div className="uploaded-photo">
                    <img src={row[1]} alt={`Uploaded ${rowIndex * 3 + 2}`} />
                  </div>
                )}
                {row[2] && (
                  <div className="uploaded-photo">
                    <img src={row[2]} alt={`Uploaded ${rowIndex * 3 + 3}`} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="buttons">
          <button onClick={handleCancel}>Cancel</button>
          <button disabled={disabled} className="update">
            Update Photos
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewMoreModal;
