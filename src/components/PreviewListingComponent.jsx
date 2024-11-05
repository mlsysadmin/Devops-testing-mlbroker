import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/previewListing.css";

// import ApplicationDetailModal from "./layout/ApplicationDetails/ApplicationDetailsModal";
import PreviewListLeftContent from "./PreviewListLeftContent";
import PreviewListRightSideContent from "./PreviewListRightSideContent";
import MLBROKERAGEAxiosInstance from "../helper/axios";
import {
  GetPropertiesBySaleStatus,
  GetPublicListingByID,
  GetUnitPhotos,
} from "../api/GetAllPublicListings";
import { LocationFormatter } from "../utils/LocationDateFormatter";
import {
  GetPhotoWithUrl,
  GetPhotoLength,
  GetAllPhoto,
} from "../utils/GetPhoto";
import PropertyListing from "./PropertyListing";
import NotFoundComponent from "./Errors/NotFoundComponent";
import { GetAllFeaturesByPropertyNo } from "../api/GetAllAmenities";
import SemiRoundBtn from "./custom/buttons/SemiRoundBtn.custom";
import Loading from "./modals/LoadingModal";
import PreviewLoadingModal from "./modals/PreviewLoadingModal";

const PreviewListing = () => {
  const url = process.env.REACT_APP_STORAGE_BUCKET_URL;
  const objectname = process.env.REACT_APP_OBJECT_NAME;
  const location = useLocation();
  const navigate = useNavigate();

  const [amountInPesos, setPesos] = React.useState(500);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [smallImages, setSmallImages] = useState([]);
  const [photoCount, setPhotoCount] = React.useState(); // Initial photo count
  const [stepsGap, setStepsGap] = React.useState(20); // Interest rate in percent
  const [homePrice, setHomePrice] = React.useState(1000000); // Initial home price
  const [downPayment, setDownPayment] = React.useState(100000); // Initial down payment
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [oneListing, setOneListing] = useState(null);
  const [features, setFeatures] = useState([]);
  const [amenities, setAmenities] = useState([]);
  const [includes, setIncludes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [unitPhotos, setUnitPhotos] = useState([]);
  const term = 30;
  const termInMonths = term * 12;

  const totalHomePrice = homePrice + homePrice * (stepsGap / 100);

  const monthlyPayment = (totalHomePrice - downPayment) / termInMonths;
  const handlePesosChange = (newPesos) => {
    setPesos(newPesos);
  };

  useEffect(() => {
    const getlistingByID = async () => {
      setIsLoading(true);
      try {
        const search = location.search;
        const params = new URLSearchParams(search);
        const id = params.get("id");

        if (params.size != 0 && id) {
          const onelistingdata = await GetPublicListingByID(id);
          const dataresp = onelistingdata.data;

          if (Object.keys(dataresp).length === 0) {
            setOneListing(null);
          } else {
            const features = await GetFeaturesByPropertyNo(dataresp.PropertyNo);
            const photos = await UnitPhotos(dataresp.id);

            let photo = dataresp.Photo;
            console.log("photo", photo);
            if (photos.length !== 0) {
              let gallery = photos.map((item, i) => {
                return item.Photo;
              });

              gallery.push(photo);

              setUnitPhotos(gallery);
            } else {
              setUnitPhotos([photo]);
            }

            const getFeatures = features.filter(
              (item) => item.Type === "features"
            );
            const getAmenities = features.filter(
              (item) => item.Type === "amenities"
            );
            const getIncludes = features.filter(
              (item) => item.Type === "includes"
            );

            setOneListing(dataresp);
            setFeatures(getFeatures);
            setAmenities(getAmenities);
            setIncludes(getIncludes);
          }
        } else {
          setOneListing(null);
        }
      } catch (error) {
        console.log(error);
        setOneListing(null);
      } finally {
        setIsLoading(false);
      }
    };
    getlistingByID();
  }, []);

  const GetFeaturesByPropertyNo = async (propertyNo) => {
    try {
      const resFeatures = await GetAllFeaturesByPropertyNo(propertyNo);

      return resFeatures.data;
    } catch (error) {
      console.log("Get Features: ", error);

      return [];
    }
  };

  const UnitPhotos = async (propertyId) => {
    try {
      console.log(propertyId);

      const res = await GetUnitPhotos(propertyId);

      return res.data;
    } catch (error) {
      setUnitPhotos([]);
    }
  };

  console.log("unitPhotos", unitPhotos);

  // if (oneListing) {
  //   console.log("Title:", oneListing.title);
  //   console.log("Photos:", JSON.parse(oneListing.listings.photos.photo))
  //   console.log("Photos:", images);
  //   ;
  // } else {
  //   console.log("oneListing is undefined");
  // }

  // let images = (oneListing?.listings?.photos?.photo || []);

  // const previousImage = () => {
  //   const newIndex = (currentIndex - 1 + images.length) % images.length;
  //   setCurrentIndex(newIndex);
  //   updateSmallImages(newIndex);
  // };

  // const nextImage = () => {
  //   const newIndex = (currentIndex + 1) % images.length;
  //   setCurrentIndex(newIndex);
  //   updateSmallImages(newIndex);
  // };

  // const updateSmallImages = (newIndex) => {
  //   const nextIndex1 = (newIndex + 1) % images.length;
  //   const nextIndex2 = (newIndex + 2) % images.length;

  //   const newSmallImages = [images[nextIndex1], images[nextIndex2]];
  //   setSmallImages(newSmallImages);

  //   const newPhotoCount = getPhotoCountForMainImage(newIndex);
  //   setPhotoCount(newPhotoCount);
  // };

  // const getPhotoCountForMainImage = (index) => {
  // };

  const [isFavorite, setIsFavorite] = React.useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      {isLoading ? (
        <PreviewLoadingModal />
      ) : oneListing ? (
        <div className="previewlist">
          <div
            className="contentContainer"
            style={{ display: "flex", width: "100%", gap: "1rem" }}
          >
            <div className="real-estate-listing-card">
              <PropertyListing
                oneListing={oneListing}
                unitPhotos={unitPhotos}
              />
              <div className="midContent">
                <PreviewListLeftContent
                  oneListing={oneListing}
                  features={features}
                  amenities={amenities}
                  includes={includes}
                />
                <div className="widerRightSideContent">
                  <PreviewListRightSideContent oneListing={oneListing} />
                </div>
              </div>

              <div className="mobileRightSideContent">
                <PreviewListRightSideContent oneListing={oneListing} />
              </div>
            </div>
          </div>
          <div className="preview-mobile--action-btns">
            <SemiRoundBtn
              label={"Send us a message"}
              className="preview--contact-us"
            />
            <SemiRoundBtn
              label={"Try our calculator"}
              className="preview--calculator"
            />
          </div>
        </div>
      ) : (
        <NotFoundComponent />
      )}
    </>
  );
};

export default PreviewListing;
