import { IGOTSOLUTIONSAxiosInstance, MLBROKERAGEAxiosInstance } from "../helper/axios";

const GetAllIndoorAmenities = async () => {
  try {

    const res = await MLBROKERAGEAxiosInstance.get(`api/listing/get/all-amenities`);
    const indoorAmenities = res.data.data.data.amenities.indoor;
    //   console.log(indoorAmenities);
    return indoorAmenities;
  } catch (error) {
    console.log("error");
    throw error
  }
}

const GetAllOutdoorAmenities = async () => {
  try {
    const res = await MLBROKERAGEAxiosInstance.get(`api/listing/get/all-amenities`);
    const outdoorAmenities = res.data.data.data.amenities.outdoor;
    return outdoorAmenities;
  } catch (error) {
    console.log("error");
    throw error
  }
}
const GetAllAmenities = async () => {
  try {
    const response = await MLBROKERAGEAxiosInstance.get(`api/listing/get/all-amenities`);
    const allAmenities = response.data.data.data.amenities;
    return allAmenities;
  } catch (error) {
    console.log(error)
  }
}

const GetAllFeaturesByPropertyNo = async (property_no) => {
  try {
    const response = await IGOTSOLUTIONSAxiosInstance.get(`api/getAddedFeaturesByPropertyNo/${property_no}`);

    return response

  } catch (error) {
    throw error;
  }
}

export {
  GetAllIndoorAmenities,
  GetAllOutdoorAmenities,
  GetAllAmenities,
  GetAllFeaturesByPropertyNo
}
