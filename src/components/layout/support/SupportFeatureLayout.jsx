import React, { useImperativeHandle, forwardRef, useState, useEffect } from "react";
import CustomFeatureField from "../../custom/support/custom.FeatureField";
import FileUpload from "../../custom/support/custom.DrogDropImages";
import { Button, Image, Upload, Watermark } from "antd";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import { GetAllAmenities } from "../../../api/GetAllAmenities";
import AntdModal from "../../modals/AntdModal";
import FallbackImage from '../../../asset/fallbackImage.png';
import WatermarkLogo from '../../../asset/watermark.png';

const { Dragger } = Upload;

const SupportFeatureLayout = forwardRef((props, ref) => {
  const {
    labelname, classname,
    beforeUpload, onRemoved, fileList, onPreview,
    previewImage, previewOpen, setPreviewImage,
    setPreviewOpen, indoor_features, outdoor_features, custom_inclusion,
    custom_amenities, isShowDetails, isEditListing, setListing,
    listing, listingId
  } = props;

  const [numFieldsIndoor, setNumFieldsIndoor] = useState(4);
  const [numFieldsOutdoor, setNumFieldsOutdoor] = useState(4);
  const [numFieldsAmmenities, setNumFieldsAmmenities] = useState(2);
  const [numFieldsIncludes, setNumFieldsIncludes] = useState(2);

  const [indoorAmenities, setIndoorAmenities] = useState([]);
  const [outdoorAmenities, setOutdoorAmenities] = useState([]);

  const [selectedValuesIndoor, setSelectedValuesIndoor] = useState(
    new Array(4).fill("")
  );
  const [selectedValuesOutdoor, setSelectedValuesOutdoor] = useState(
    new Array(4).fill("")
  );
  const [selectedValuesAmmenities, setSelectedValuesAmmenities] = useState(
    new Array(2).fill("")
  );
  const [selectedValuesIncludes, setSelectedValuesIncludes] = useState(
    new Array(2).fill("")
  );

  const [errors, setErrors] = useState({
    indoor: false,
    outdoor: false,
    ammenities: false,
    includes: false,
  });

  const [photosToShow, setPhotosToShow] = useState(3);

  useImperativeHandle(ref, () => ({
    validateFields,
  }));

  const handleAddField = (type, setNumFields, numFields, setValues) => {
    setNumFields(numFields + 1);
    setValues((prev) => [...prev, ""]);
  };

  const handleRemoveField = (type, setNumFields, numFields, minFields) => {
    console.log("beforenumFields", numFields);
    console.log("minFields", minFields);

    if (numFields > minFields) {
      setNumFields(numFields - 1);
      console.log("afternumField", numFields);
    }
  };

  const handleFeatureChange = (index, value, setValues, fieldType) => {
    if (fieldType === "select") {
      setValues((prevValues) => {
        prevValues[index] = value;
        return [...prevValues];
      });
    }
    else if (fieldType === "text") {
      let val = value.target.value;
      setValues((prevValues) => {
        prevValues[index] = val;
        return [...prevValues];
      });
    }
  };

  const validateFields = () => {
    const newErrors = {
      indoor: selectedValuesIndoor.some((value) => value === ""),
      outdoor: selectedValuesOutdoor.some((value) => value === ""),
      ammenities: selectedValuesAmmenities.some((value) => value === ""),
      includes: selectedValuesIncludes.some((value) => value === ""),
    };

    setErrors(newErrors);

    return !Object.values(newErrors).some((error) => error);
  };

  const draggerProps = {
    action: '',
    name: 'file',
    multiple: true,
    onRemove: onRemoved,
    beforeUpload: beforeUpload,
    onPreview: onPreview,
    fileList,
    listType: 'picture-card',
    accept: "image/png, image/jpeg"
  };

  const draggerModalProps = {
    action: '',
    name: 'file',
    multiple: true,
    onRemove: onRemoved,
    beforeUpload: beforeUpload,
    onPreview: onPreview,
    // fileList,
    listType: 'picture',
    accept: "image/png, image/jpeg"
  };

  const GetAmenities = async () => {
    try {
      const amenities = await GetAllAmenities();

      setIndoorAmenities(amenities.indoor);
      setOutdoorAmenities(amenities.outdoor);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log("isShowDetails", isShowDetails);
    console.log("filelist", fileList);

    if (isShowDetails && !isEditListing) {
      console.log("dsfdfd");
      
      setNumFieldsIndoor(indoor_features.length);
      setNumFieldsOutdoor(outdoor_features.length);
      setNumFieldsAmmenities(custom_amenities.length);
      setNumFieldsIncludes(custom_inclusion.length);

      setSelectedValuesIndoor(indoor_features);
      setSelectedValuesOutdoor(outdoor_features);
      setSelectedValuesAmmenities(custom_amenities);
      setSelectedValuesIncludes(custom_inclusion);
      setPhotosToShow(2);
    } else {
      // GetAmenities();
    }
  }, [isShowDetails, custom_amenities, custom_inclusion, indoor_features, outdoor_features]);
// },[])

  // useEffect(() => {

  //   if (selectedValuesAmmenities && selectedValuesIncludes && selectedValuesIndoor && selectedValuesOutdoor) {
  //     setListing((prev) => ({
  //       ...prev,
  //       indoor_features: selectedValuesIndoor,
  //       outdoor_features: selectedValuesOutdoor,
  //       custom_amenities: selectedValuesAmmenities,
  //       custom_inclusion: selectedValuesIncludes,
  //     }))
  //   }

  // }, [selectedValuesIndoor, selectedValuesOutdoor, selectedValuesAmmenities, selectedValuesIncludes]);

  const DisplayUploadedPhotos = () => {
    return fileList.slice(0, photosToShow).map((file, index) => (
      <Image
        wrapperStyle={{
          cursor: 'pointer'
        }}
        style={{ borderRadius: '10px', objectFit: 'cover', height: '100%' }}
        key={index}
        width={200}
        src={file.url}
        // src={file.url ? file.url : 'error'}
        fallback={FallbackImage}
        preview={{
          visible: previewOpen,
          onVisibleChange: (visible) => setPreviewOpen(visible),
          afterOpenChange: (visible) => !visible && setPreviewImage(''),
        }}
      />
    ))
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleAddPhotos = () => {
    console.log("photos");
    setIsModalOpen(true);
  }
  const viewModalStyle = {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
    alignItems: 'center',
    fontSize: '18px',
    fontWeight: 'bold'
  }
  const viewModalHeaderStyle = {
    justifyContent: 'space-between',
    marginTop: '30px'
  }
  const viewModalListingIdStyle = {
    justifyContent: 'end'
  }

  const ViewPhotosModal = () => {

    return (
      <div className="view--modal-photos">
        <div className="view--photos"
          style={{ ...viewModalStyle, ...viewModalHeaderStyle }}>
          <div className="view--photos__header">
            <p>PHOTOS</p>
          </div>
          <div
            className="photos--listing-id"
            style={{ ...viewModalStyle, ...viewModalListingIdStyle }}>
            <p>Listing ID:</p>
            <p style={{ color: '#D90000' }}>{listingId}</p>
          </div>
        </div>
        <br />
        {
          isShowDetails && isEditListing &&
          DaggerUploadPhotos(draggerModalProps)
        }
        <div className="preview-upload--view-modal" style={{
          display: 'flex',
          gap: '15px',
          flexWrap: 'wrap',
          marginTop: '40px'
        }}>
          {
            fileList.map((file, index) => {
              return (
                // <Watermark
                //   image={WatermarkLogo}
                //   width={80}
                //   height={50}
                //   rotate={0}
                //   gap={[100, 100]}
                //   offset={undefined}
                // >
                  <Image
                    style={{ borderRadius: '10px', objectFit: 'cover', height: '100%' }}
                    wrapperStyle={{
                      cursor: 'pointer'
                    }}
                    width={290}
                    key={index}
                    src={file.url}
                    fallback={FallbackImage}
                    preview={{
                      visible: previewOpen,
                      onVisibleChange: (visible) => setPreviewOpen(visible),
                      afterOpenChange: (visible) => !visible && setPreviewImage(''),
                    }}
                  />
                // </Watermark>
              )
            })
          }
        </div>
      </div>
    )
  }

  const DaggerUploadPhotos = (dragger_props) => {
    return (
      <Dragger {...dragger_props} ref={ref} className="drag-upload">
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">
          Support for a single upload. Strictly prohibited from uploading company data or other
          banned files.
        </p>
      </Dragger>
    )
  }

  return (
    <div className="features">
      <div className="featureText">Features</div>

      {/* Indoor Features */}
      <div className="support--features">
        <div className="IndoorFeatures">
          <div className="indoorFeaturesText">Indoor Features</div>
          {
            isEditListing && <div className="featuresButton">
              <Button
                onClick={() =>
                  handleAddField(
                    "indoor",
                    setNumFieldsIndoor,
                    numFieldsIndoor,
                    setSelectedValuesIndoor
                  )
                }
                className="support--add-btn"
              >
                Add +
              </Button>
              <Button
                onClick={() =>
                  handleRemoveField(
                    "indoor",
                    setNumFieldsIndoor,
                    numFieldsIndoor,
                    4
                  )
                }
                disabled={numFieldsIndoor <= 4}
                className="support--subtract-btn"
              >
                Remove
              </Button>
            </div>
          }
        </div>
        <div className="inputFieldss">
          {[...Array(numFieldsIndoor)].map((_, index) => (
            <div key={index}>
              <CustomFeatureField
                labelName="Indoor Features"
                handleFeatureChange={(value) =>
                  handleFeatureChange(index, value, setSelectedValuesIndoor, "select")
                }
                indoorAmenities={indoorAmenities}
                value={selectedValuesIndoor[index]}
                fieldType="select"
                className="fieldFeatures"
                disabled={isShowDetails && !isEditListing}
              />
              {errors.indoor && selectedValuesIndoor[index] === "" && (
                <div className="error">This field is required</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Outdoor Features */}
      <div className="support--features">
        <div className="OutdoorFeatures">
          <div className="outdoorFeaturesText">Outdoor Features</div>
          {
            isEditListing && <div className="featuresButton">
              <Button
                onClick={() =>
                  handleAddField(
                    "outdoor",
                    setNumFieldsOutdoor,
                    numFieldsOutdoor,
                    setSelectedValuesOutdoor
                  )
                }
                className="support--add-btn"
              >
                Add +
              </Button>
              <Button
                onClick={() =>
                  handleRemoveField(
                    "outdoor",
                    setNumFieldsOutdoor,
                    numFieldsOutdoor,
                    4
                  )
                }
                disabled={numFieldsOutdoor <= 4}
                className="support--subtract-btn"
              >
                Remove
              </Button>
            </div>
          }
        </div>
        <div className="inputFieldss">
          {[...Array(numFieldsOutdoor)].map((_, index) => (
            <div key={index}>
              <CustomFeatureField
                labelName="Outdoor Features"
                handleFeatureChange={(value) =>
                  handleFeatureChange(index, value, setSelectedValuesOutdoor, 'select')
                }
                outdoorAmenities={outdoorAmenities}
                value={selectedValuesOutdoor[index]}
                fieldType="select"
                className="fieldFeatures"
                disabled={isShowDetails && !isEditListing}
              />
              {errors.outdoor && selectedValuesOutdoor[index] === "" && (
                <div className="error">This field is required</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Features and Ammenities Features */}
      <div className="support--features">
        <div className="featuresAndAmmenities">
          <div className="featuresAndAmenitiesText">Features and Amenities</div>
          {
            // If show details is equesl to false and isEditListing is equal to true
            isEditListing && <div className="featuresButton">
              <Button
                onClick={() =>
                  handleAddField(
                    "ammenities",
                    setNumFieldsAmmenities,
                    numFieldsAmmenities,
                    setSelectedValuesAmmenities
                  )
                }
                className="support--add-btn"
              >
                Add +
              </Button>
              <Button
                onClick={() =>
                  handleRemoveField(
                    "ammenities",
                    setNumFieldsAmmenities,
                    numFieldsAmmenities,
                    2
                  )
                }
                disabled={numFieldsAmmenities <= 2}
                className="support--subtract-btn"
              >
                Remove
              </Button>
            </div>
          }
        </div>
        <div className="ammenitiesFields">
          {[...Array(numFieldsAmmenities)].map((item, index) => (
            <div key={index}>
              <CustomFeatureField
                labelName="Ammenities Features"
                handleFeatureChange={(value) =>
                  handleFeatureChange(index, value, setSelectedValuesAmmenities, 'text')
                }
                value={selectedValuesAmmenities[index]}
                fieldType="text"
                className="ammenitiesInputField"
                disabled={isShowDetails && !isEditListing}
              />
              {errors.ammenities && selectedValuesAmmenities[index] === "" && (
                <div className="error">This field is required</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="support--features">
        <div className="includes">
          <div className="includesText">Includes</div>
          {
            isEditListing && <div className="featuresButton">
              <Button
                onClick={() =>
                  handleAddField(
                    "includes",
                    setNumFieldsIncludes,
                    numFieldsIncludes,
                    setSelectedValuesIncludes
                  )
                }
                className="support--add-btn"
              >
                Add +
              </Button>
              <Button
                onClick={() =>
                  handleRemoveField(
                    "includes",
                    setNumFieldsIncludes,
                    numFieldsIncludes,
                    2
                  )
                }
                disabled={numFieldsIncludes <= 2}
                className="support--subtract-btn"
              >
                Remove
              </Button>
            </div>
          }
        </div>
        <div className="includesFields">
          {[...Array(numFieldsIncludes)].map((_, index) => (
            <div key={index}>
              <CustomFeatureField
                labelName="Includes Features"
                handleFeatureChange={(value) =>
                  handleFeatureChange(index, value, setSelectedValuesIncludes, 'text')
                }
                value={selectedValuesIncludes[index]}
                fieldType="text"
                className="includesInputField"
                disabled={isShowDetails && !isEditListing}
              />
              {errors.includes && selectedValuesIncludes[index] === "" && (
                <div className="error">This field is required</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="support--upload-photos">
        <div className="upload-photos--header">
          <h2 className="uploadPhotosText">Uploaded Photos</h2>
          {
            isEditListing && isShowDetails && <Button
              onClick={handleAddPhotos}
              className="support--add-btn"
            >
              Add +
            </Button>
          }
        </div>
        {
          !isShowDetails ? <>
            {
              DaggerUploadPhotos(draggerProps)
            }
            {previewImage && (
              <Image
                wrapperStyle={{
                  display: 'none',
                  cursor: 'pointer'
                }}
                preview={{
                  visible: previewOpen,
                  onVisibleChange: (visible) => setPreviewOpen(visible),
                  afterOpenChange: (visible) => !visible && setPreviewImage(''),
                }}
                src={previewImage}
              />
            )}
          </>
            :
            <div className="uploaded-photos--view" style={{
              display: 'flex', gap: '15px', flexWrap: 'wrap', marginBottom: '40px'
            }}>
              <DisplayUploadedPhotos />
              {
                fileList.length > photosToShow && <div style={{
                  cursor: 'pointer',
                  border: '1px solid gainsboro',
                  borderRadius: '10px',
                  width: '200px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  fontWeight: 'bold'
                }}
                onClick={() => setIsModalOpen(true)}
                >
                  <p>{fileList.length - photosToShow}</p>
                  <p>View More Photos</p>
                </div>
              }
            </div>
        }
        {/* <div className="uploadPhotos">
          <FileUpload />
        </div> */}
      </div>
      {
        isModalOpen && (
          <AntdModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            handleClick={() => setIsModalOpen(false)}
            footer={[]}
            title={''}
            children={<ViewPhotosModal />}
            width={950}
          />
        )
      }
    </div>
  );
});

export default SupportFeatureLayout;
