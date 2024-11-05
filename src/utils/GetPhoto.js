import { GetUnitPhotos } from "../api/GetAllPublicListings";
import DefaultPropertyImage from '../asset/fallbackImage.png';

const GetPhotoWithUrl = (photoPath) => {
  try {
    const url = process.env.REACT_APP_IGOT_API_URL;

    if (photoPath) {
      
      return `${url}/${photoPath}`;
    } else {
      
      return null;
    }
  } catch (error) {
    return null;
  }
};

// unitId = property id
const GetPhotoLength = async (unitId) => {
  try {
    
    if (unitId) {

      const photoLength = await GetUnitPhotos(unitId);
      
      return photoLength.data.data

    } else {
      return [];
    }
  } catch (error) {
    return [];
  }
};

const GetAllPhoto = (oneListing) => {
  const url = process.env.REACT_APP_STORAGE_BUCKET_URL;
  const objectname = process.env.REACT_APP_OBJECT_NAME;
  try {
    if (oneListing) {
      const parsedData = JSON.parse(oneListing);
      const images = parsedData.map(img => (
        `${url}${objectname}/${img.photo}`
      ))

      return `images, ${images}`;

    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

export { GetPhotoWithUrl, GetPhotoLength, GetAllPhoto };
