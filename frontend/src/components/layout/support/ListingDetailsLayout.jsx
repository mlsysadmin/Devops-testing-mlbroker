import React, { useEffect, useRef, useState } from "react";
import CustomTextField from "../../custom/support/custom.TextField";
import SupportFeatureLayout from "./SupportFeatureLayout";
import Modal from "react-modal";
import "../../../styles/support/Support.css";
import CustomSelectTypeField from "../../custom/support/custom.SelectTypeField";
import TextArea from "antd/es/input/TextArea";
import SemiRoundBtn from "../../custom/buttons/SemiRoundBtn.custom";
import ConfirmationModal from "../../modals/AntdModal";
import confirm from "antd/es/modal/confirm";
import { CheckCircleFilled } from "@ant-design/icons";
import { ConfirmModal, SuccessModal } from "../../../utils/ModalMethod.utils";
import { Modal as AntdModal } from "antd";
import MapWrapper from "../../custom/custom.mapWrapper";
import MapComponent from "../../mapComponent";

Modal.setAppElement("#root"); // Set this to your app root element

const ListingDetailsLayout = (props) => {
  const countries = props.countries;
  const provinces = props.provinces;
  const cities = props.cities;
  const isShowDetails = props.isShowDetails;
  const listingDetails = props.listingDetails;
  const isEditListing = props.isEditListing;
  const setEditListing = props.setEditListing;
  const listingId = props.listingId;
  const coordinates = props.coordinates;

  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [modal, contextHolder] = AntdModal.useModal();

  const [listing, setListing] = useState({
    property_type: '',
    listing_type: '',
    price: '',
    discounted_price: '',
    furnishing: '',
    classification: '',
    no_of_beds: '',
    no_of_bathrooms: '',
    parking: '',
    no_of_floors: '',
    floor_area: '',
    lot_area: '',
    price_per_sqm: '',
    property_id: '',
    country: '',
    province: '',
    city: '',
    zipcode: '',
    other: '',
    map_location: '',
    title: '',
    description: '',
    indoor_features: [],
    outdoor_features: [],
    custom_inclusion: [],
    custom_amenities: [],
  });

  const [fileList, setFileList] = useState([{
    uid: '-1',
    name: 'image.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },]);

  const [previewImage, setPreviewImage] = useState('');
  const [previewOpen, setPreviewOpen] = useState(false);

  const openFirstModal = () => setIsModalOpen(true);
  const closeFirstModal = () => setIsFirstModalOpen(false);
  const openSecondModal = () => {
    closeFirstModal();
    setIsSecondModalOpen(true);
  };

  const closeSecondModal = () => setIsSecondModalOpen(false);

  const getBase64 = async (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handleOnBeforeUpload = async (file) => {
    if (!file.url && !file.preview) {
      file.url = await getBase64(file);
      setFileList([...fileList, file])
      return false
    }
  };

  const handleOnRemoveUpload = (file) => {
    const index = fileList.indexOf(file);
    const newFileList = fileList.slice();
    newFileList.splice(index, 1);
    setFileList(newFileList);
  };

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const ref = useRef(null)
  // const generateMapSrc = () => {
  //   const query = `${subdivision} ${completeAddress} ${mapLocation}`;
  //   return `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(query)}`;
  // };

  useEffect(() => {

    if (isShowDetails && listingDetails !== null && !isEditListing) {
      setListing((prevState) => ({
        ...prevState,
        property_type: listingDetails.property_type.subtype,
        listing_type: listingDetails.listing_type.listing_type,
        price: listingDetails.unit_details.price,
        discounted_price: listingDetails.unit_details.discounted_price,
        furnishing: listingDetails.unit_details.furnishing,
        classification: listingDetails.unit_details.classification,
        no_of_beds: listingDetails.unit_details.no_of_beds,
        no_of_bathrooms: listingDetails.unit_details.no_of_bathrooms,
        parking: listingDetails.unit_details.parking,
        no_of_floors: listingDetails.unit_details.no_of_floors,
        floor_area: listingDetails.unit_details.floor_area,
        lot_area: listingDetails.unit_details.lot_area,
        price_per_sqm: listingDetails.unit_details.price_per_sqm,
        property_id: listingDetails.property_id,
        country: listingDetails.location.country,
        province: listingDetails.location.province,
        city: listingDetails.location.city,
        zipcode: listingDetails.location.zipcode,
        other: listingDetails.location.other,
        map_location: listingDetails.location.map_location,
        title: listingDetails.title,
        description: listingDetails.description,
        indoor_features: listingDetails.amenities.indoor_features,
        outdoor_features: listingDetails.amenities.outdoor_features,
        custom_inclusion: listingDetails.amenities.custom_inclusion.inclusion_name,
        custom_amenities: listingDetails.amenities.custom_amenities.feature_name,
      }));
      const parsePhotos = JSON.parse(listingDetails.photos.photo);

      const photos = parsePhotos.map((photo, i) => {
        const url = `${process.env.REACT_APP_STORAGE_BUCKET_URL}${process.env.REACT_APP_OBJECT_NAME}/${encodeURIComponent(photo.photo)}`;
        return {
          uid: i,
          name: photo.photo,
          status: 'done',
          url,
        }
      });
      setFileList(photos);
    } else if (isEditListing) {
      console.log('listingDetailsLayout', isEditListing);

    }

  }, [isShowDetails, listingDetails, isEditListing]);

  const handleFieldChange = (e, name, fieldType) => {
    if (fieldType === 'select') {
      setListing((prevState) => ({
        ...prevState,
        [name]: e
      }));
    } else if (fieldType === 'input') {
      let value = e.target.value;

      if (name === 'price' || name === 'discounted_price' || name === 'floor_area' || name === 'lot_area' || name === 'price_per_sqm') {
        if (value === '' || value === null) {
          value = value;
        }
        else {

          value = parseFloat(value.replace(/,/g, ''));
        }
      }

      setListing((prevState) => ({
        ...prevState,
        [name]: value
      }));
    };
  }

  const onkeydown = (e) => {
    let pattern = /^\d*\.?\d*$/;
    if (!pattern.test(e.key) && e.keyCode !== 8 && e.keyCode !== 46) {
      e.preventDefault();
    }
  }

  const handleOnBlur = (e) => {
    let name = e.target.name;
    let value = listing[name];


    if (name === 'floor_area' || name === 'lot_area' || name === 'price_per_sqm') {
      value = value.toLocaleString("en", { useGrouping: false, minimumFractionDigits: 2 })
    } else {
      value = value.toLocaleString("en", { useGrouping: true, minimumFractionDigits: 2 })
    }
    setListing((prevState) => ({
      ...prevState,
      [name]: value
    }));

  }

  const handleCreateListing = () => {
    console.log('listing', listing);
    // openFirstModal();
    ConfirmModal(
      true,
      modal,
      'Create Listing',
      'Are you sure you want to create listing?',
      'Create',
      handleConfirmCreate,
      handleConfirmCreate
    );
  }

  const handleCancelEdit = () => {
    setEditListing(false);
  }

  const handleConfirmCreate = () => {
    SuccessModal(
      true,
      modal,
      'Created',
      'Listing Created Successfully',
      'Preview Listing',
    )
    // setIsModalOpen(false);
    // openSecondModal();
  }

  return (
    <>
      {contextHolder}
      <div className="ListingDetails">
        <div className="leftSide">
          <div className="propertyDetailsText">Property Details</div>
          <div className="propertyDetailsFields">
            <CustomSelectTypeField
              labelName="Property Type"
              readOnly={isShowDetails}
              value={listing.property_type}
              disabled={isShowDetails && !isEditListing}
              handleFieldChange={handleFieldChange}
              name="property_type"
            />
            <CustomSelectTypeField labelName="Listing Type"
              readOnly={isShowDetails}
              value={listing.listing_type}
              disabled={isShowDetails && !isEditListing}
              handleFieldChange={handleFieldChange}
              name="listing_type" />
          </div>
          <div className="unitDetailsText">Unit Details</div>
          <div className="unitDetailsFields">
            <CustomTextField
              inputType="input"
              labelName="Selling Price"
              value={listing.price}
              disabled={isShowDetails && !isEditListing}
              handleFieldChange={handleFieldChange}
              handleKeyDown={onkeydown}
              handleOnBlur={handleOnBlur}
              name='price' />
            <CustomTextField
              inputType="input"
              labelName="Discounted Selling Price"
              value={listing.discounted_price}
              disabled={isShowDetails && !isEditListing}
              handleFieldChange={handleFieldChange}
              handleKeyDown={onkeydown}
              handleOnBlur={handleOnBlur}
              name='discounted_price'
            />
            <CustomSelectTypeField labelName="Furnishing"
              value={listing.furnishing} disabled={isShowDetails && !isEditListing}
              handleFieldChange={handleFieldChange}
              name='furnishing' />
            <CustomSelectTypeField labelName="Classification"
              value={listing.classification} disabled={isShowDetails && !isEditListing}
              handleFieldChange={handleFieldChange}
              name='classification' />
            <CustomSelectTypeField labelName="Beds"
              value={listing.no_of_beds} disabled={isShowDetails && !isEditListing}
              handleFieldChange={handleFieldChange}
              name='no_of_beds' />
            <CustomSelectTypeField labelName="Bathrooms"
              value={listing.no_of_bathrooms} disabled={isShowDetails && !isEditListing}
              handleFieldChange={handleFieldChange}
              name='no_of_bathrooms' />
            <CustomSelectTypeField labelName="Parking"
              value={listing.parking} disabled={isShowDetails && !isEditListing}
              handleFieldChange={handleFieldChange}
              name='parking' />
            <CustomSelectTypeField labelName="No of Floors"
              value={listing.no_of_floors} disabled={isShowDetails && !isEditListing}
              handleFieldChange={handleFieldChange}
              name='no_of_floors' />
            <CustomTextField
              inputType="input"
              labelName="Floor Area (sqm)"
              value={listing.floor_area} disabled={isShowDetails && !isEditListing}
              handleFieldChange={handleFieldChange}
              handleKeyDown={onkeydown}
              handleOnBlur={handleOnBlur}
              name='floor_area' />
            <CustomTextField
              inputType="input"
              labelName="Lot Area (sqm)"
              value={listing.lot_area} disabled={isShowDetails && !isEditListing}
              handleFieldChange={handleFieldChange}
              handleKeyDown={onkeydown}
              handleOnBlur={handleOnBlur}
              name='lot_area' />
            <CustomTextField
              inputType="input"
              labelName="Price per sqm"
              value={listing.price_per_sqm} disabled={isShowDetails && !isEditListing}
              handleFieldChange={handleFieldChange}
              handleKeyDown={onkeydown}
              handleOnBlur={handleOnBlur}
              name='price_per_sqm' />
            <CustomTextField
              inputType="input"
              labelName="Property ID"
              value={listing.property_id} disabled={isShowDetails && !isEditListing}
              handleFieldChange={handleFieldChange}
              name='property_id' />
          </div>
          <div className="locationText">Location</div>
          <div className="support-location">
            <CustomSelectTypeField
              labelName="Country"
              countries={countries}
              value={listing.country} disabled={isShowDetails && !isEditListing}
              handleFieldChange={handleFieldChange}
              name='country' />
            <CustomSelectTypeField
              labelName="Province/State"
              provinces={provinces}
              value={listing.province} disabled={isShowDetails && !isEditListing}
              handleFieldChange={handleFieldChange}
              name='province' />
            <CustomSelectTypeField
              labelName="City/Town"
              cities={cities}
              value={listing.city} disabled={isShowDetails && !isEditListing}
              handleFieldChange={handleFieldChange}
              name='city' />
            <CustomTextField
              inputType="input"
              labelName="Zipcode"
              value={listing.zipcode}
              disabled={isShowDetails && !isEditListing}
              handleFieldChange={handleFieldChange}
              handleKeyDown={onkeydown}
              name='zipcode'
            />
          </div>
          <div>
            <CustomTextField
              inputType="input"
              labelName="House No/Unit/Building Name/Street"
              value={listing.other}
              disabled={isShowDetails && !isEditListing}
              handleFieldChange={handleFieldChange}
              name='other'
            />
            <CustomTextField
              inputType="input"
              labelName="Map Location"
              value={listing.map_location}
              disabled={isShowDetails && !isEditListing}
              handleFieldChange={handleFieldChange}
              name='map_location'
            />
          </div>
        </div>
        <div className="rightSide">
          <div className="support--description">
            <div className="descriptionText">Description</div>
            <div className="descriptionFields">
              <CustomTextField
                inputType="input"
                labelName="Title"
                value={listing.title}
                disabled={isShowDetails && !isEditListing}
                handleFieldChange={handleFieldChange}
                name='title' />
              <br />
              <label htmlFor={'Caption'} className="caption-textLabel">
                Caption
              </label>
              <TextArea className="description-caption" rows={25}
                placeholder="Enter Caption" value={listing.description}
                disabled={isShowDetails && !isEditListing}
                onChange={(value) => handleFieldChange(value, 'description', 'input')}
                name='description'>
              </TextArea>
            </div>
            {
              isEditListing && !isShowDetails && (
                <div className="support--map">
                  <MapWrapper
                    style={{ margin: '150px 0px 0px 0px', height: '355px' }}
                    children={
                      <MapComponent
                        style={{ height: "350px", width: "100%", borderRadius: "20px" }}
                        coordinates={coordinates}
                      />
                    }
                  />
                </div>
              )
            }
          </div>
        </div>
        <SupportFeatureLayout
          beforeUpload={handleOnBeforeUpload}
          onRemoved={handleOnRemoveUpload}
          fileList={fileList}
          onPreview={handlePreview}
          previewImage={previewImage}
          previewOpen={previewOpen}
          setPreviewImage={setPreviewImage}
          setPreviewOpen={setPreviewOpen}
          ref={ref}
          indoor_features={listing.indoor_features}
          outdoor_features={listing.outdoor_features}
          custom_inclusion={listing.custom_inclusion}
          custom_amenities={listing.custom_amenities}
          isShowDetails={isShowDetails}
          isEditListing={isEditListing}
          setListing={setListing}
          listing={listing}
          listingId={listingId}
        />
      </div>
      {
        !isShowDetails ? (
          <div className="support--submit-btn">
            <div></div>
            <SemiRoundBtn
              className="submit-btn"
              // onClick={openFirstModal}
              handleClick={handleCreateListing}
              type={'primary'}
              label={'Create'}
              size={'large'}
            />
          </div>
        ) : isShowDetails && isEditListing ? (
          <div className="support--submit-btn">
            <div></div>
            <SemiRoundBtn
              className="submit-btn"
              // onClick={openFirstModal}
              handleClick={handleCreateListing}
              type={'primary'}
              label={'Update Details'}
              size={'large'}
            />
            <SemiRoundBtn
              className="cancel-btn"
              // onClick={openFirstModal}
              handleClick={handleCancelEdit}
              type={'default'}
              label={'Cancel'}
              size={'large'}
            />
          </div>
        ) : null

      }
    </>
  );
};

export default ListingDetailsLayout;
