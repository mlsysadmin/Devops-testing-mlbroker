import {MLBROKERAGEAxiosInstance} from "../helper/axios";

const GetAllListingDrafts = async () => {
  try {
    const response = await MLBROKERAGEAxiosInstance.get(
      `api/seller/get/all-listings/draft?seller=X231000001441K1`
    );
    const sellerdrafts = response.data.data;
    // console.log(sellerdrafts);
    return sellerdrafts;
  } catch (error) {
    console.log(error);
  }
};
const GetAllDeniedandProcessing = async () => {
  try {

    const dpresponse = await MLBROKERAGEAxiosInstance.get(
      `api/seller/get/all-listings?seller=X231000001441K1`

    );
    const sellerdp = dpresponse.data.data;
    console.log("seller", sellerdp);
    return sellerdp;
  } catch (error) {
    console.log(error);
  }
};

export { GetAllListingDrafts, GetAllDeniedandProcessing };
