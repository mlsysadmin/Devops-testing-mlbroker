
import {
    MLBROKERAGEAxiosInstance,
    IGOTSOLUTIONSAxiosInstance
} from "../helper/axios";

const GetPropertiesBySaleStatus = async () =>{
    
    try {
        const response = await IGOTSOLUTIONSAxiosInstance.get(`/api/getPropertiesBySaleStatus/unsold`);

        const isPublic = response.data.filter((d) => d.AccessType == "public");

        // console.log(isPublic);
        
        return isPublic;
        
    } catch (error) {
        console.log(error);
    }
}

const GetPublicListingByID = async (propertyNo) =>{
    try {

        const response = await IGOTSOLUTIONSAxiosInstance.get(`api/getPropertyById/${propertyNo}`);
        const listingbyID = response;
        console.log("listing by id: ", listingbyID);
        return listingbyID;
        
    } catch (error) {
        console.log(error);
        
    }
}

const GetListingByRecordStatus = async (status) => {
    try {
        
        const response = await IGOTSOLUTIONSAxiosInstance.get(`api/getPropertiesByRecordStatus/${status}`);
        const listingByStatus = response;
        console.log("listing by status: ", listingByStatus);
        return listingByStatus;

    } catch (error) {
        console.log(error);
        
    }
}
const GetPublicListingCount = async () => {
	try {
        const response = await IGOTSOLUTIONSAxiosInstance.get(`/api/getPropertiesBySaleStatus/unsold`);

	        const listingCount = response.data.length;
			console.log("Number of public listings: ", listingCount);
			return listingCount;
	} catch (error) {
		console.log("Error fetching public listings:", error);
		return 0; 
	}
};

// const GetAllListing = async () =>{
//     try{
//         const response = await IGOTSOLUTIONSAxiosInstance.get(
// 					`api/getProperties`,
// 					{
// 						headers: {
// 							"x-api-key": process.env.REACT_APP_API_KEY,
// 						},
// 					}
// 				);

//         console.log("all listings:", response);
//         return response;

//     }catch (error){
//         return error;
//     }
// }

const GetUnitPhotos = async (propertyId) => {
    try {
        
        const response = await IGOTSOLUTIONSAxiosInstance.get(`api/getUnitPhotos/${propertyId}`);

        const unitPhotos = response;

        return unitPhotos;
        
    } catch (error) {
        console.log(error);
        return error
    }
}

export {
	GetPropertiesBySaleStatus,
	GetPublicListingByID,
	GetPublicListingCount,
	GetUnitPhotos,
    GetListingByRecordStatus
	// GetAllListing,
};