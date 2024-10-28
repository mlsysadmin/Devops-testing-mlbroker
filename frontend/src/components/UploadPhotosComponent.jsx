import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import Resizer from "react-image-file-resizer";
import WatermarkImg from "../asset/watermark.png";
import { Watermark } from "antd";
import "../styles/listing-form.css";

const UploadPhotosComponent = ({ onComplete, setPropertyFields }) => {
	const [uploadedPhotos, setUploadedPhotos] = useState([]);
	const [uploadError, setUploadError] = useState(null);

	const onDrop = (acceptedFiles) => {
		if (uploadedPhotos.length + acceptedFiles.length >= 11) {
			setUploadError("You can only upload a maximum of 10 images.");
			return;
		}
		acceptedFiles.forEach((file) => {
			if (validateFile(file)) {
				Resizer.imageFileResizer(
					file,
					800,
					600,
					"JPEG",
					100,
					0,
					(uri) => {
						setUploadedPhotos((prev) => [
							...prev,
							{ file, preview: uri, filename: file.name },
						]);
					},
					"base64"
				);
				setUploadError(null);
			}
		});
	};
	const removePhoto = (index) => {
		setUploadedPhotos((prev) => prev.filter((_, i) => i !== index));
	};
	const validateFile = (file) => {
		const maxFileSize = 15 * 1024 * 1024;
		const allowedTypes = ["image/jpeg", "image/png", "image/gif"];

		if (!allowedTypes.includes(file.type)) {
			setUploadError("Only JPEG, PNG, and GIF files are allowed.");
			return false;
		}

		if (file.size > maxFileSize) {
			setUploadError("File size should not exceed 15 MB.");
			return false;
		}

		return true;
	};

	const { getRootProps, getInputProps } = useDropzone({ onDrop });

	useEffect(() => {
		const now = new Date();
		const phtOffset = 8 * 60;
		const phtDate = new Date(now.getTime() + phtOffset * 60 * 1000);
		const upload_date_time = phtDate.toISOString();
		const complete = uploadedPhotos !== null && uploadedPhotos.length >= 1 && uploadedPhotos.length <= 10;
		if (complete) {
			setPropertyFields({
				Photo: uploadedPhotos,
			});
			onComplete(true);
		} else {
			onComplete(false);
		}
	}, [uploadedPhotos, onComplete]);

	return (
		<div className="uploadPhotos">
			<h1>Upload Photos</h1>
			<center>
				<div className="uploadPhotosContent">
					<ul>
						<li>
							Photos that have watermarks, phone numbers, website URLs, email
							addresses, or in collage format will be removed.
						</li>
						<li>
							Horizontal/landscape images display best and are recommended.
							Vertical/portrait images and panoramic images are accepted but not
							recommended as they do not take full advantage of the space
							provided.
						</li>
						<li>
							We require a minimum of one distinct photo that pertains to the
							actual property being posted. The higher the quality of the
							photos, the better it is for your listing{" "}
							{"(maximum file size of 15 MB per photo)"}. DO NOT duplicate
							photos please.
						</li>
						<li>
							Computer drawings or artist renders for the properties are NOT
							ALLOWED. We do ALLOW floor plans of the property as long as it is
							accompanied with actual photos of the property's interiors and
							facade.
						</li>
					</ul>
					<div {...getRootProps({ className: "dragAndDropPhotoHere" })}>
						<input {...getInputProps()} />
						<p>Drag & drop photos here, or click to select photos</p>
					</div>
					{uploadError && <p className="error">{uploadError}</p>}
					<div className="DisplayUploadedPhotoHere">
						{uploadedPhotos.map((photo, index) => (
							<div
								key={index}
								className="image"
								style={{ position: "relative" }}
							>
								<img
									src={photo.preview}
									alt={`Uploaded preview ${index}`}
									style={{
										width: "250px",
										height: "160px",
										// objectFit: "cover",
									}}
								/>
								{/* <img
									src={WatermarkImg}
									alt="Watermark"
									style={{
										position: "absolute",
										top: "50%",
										left: "50%",
										transform: "translate(-50%, -50%)",
										width: "50%",
										opacity: 0.5,
										pointerEvents: "none",
									}}
								/> */}
								<Watermark height={40} width={200} image={WatermarkImg}>
									{/* <div
										style={{
											position: "absolute",
											top: "50%",
											left: "50%",
											transform: "translate(-50%, -50%)",
											width: "100%",
											opacity: 0.5,
											pointerEvents: "none",
										}}
									/> */}
								</Watermark>

								<button
									onClick={() => removePhoto(index)}
									className="remove--image-btn"
								>
									&times;
								</button>
							</div>
						))}
					</div>
				</div>
			</center>
		</div>
	);
};

export default UploadPhotosComponent;
