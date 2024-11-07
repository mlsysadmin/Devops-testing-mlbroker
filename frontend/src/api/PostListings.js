import { message } from "antd";
import {
	MLBROKERAGEAxiosInstance,
	IGOTSOLUTIONSAxiosInstance,
} from "../helper/axios";
import { ConsoleSqlOutlined } from "@ant-design/icons";

// const PostSellerListing = async (property_fields = {}) => {
// 	try {
// 		const {
// 			listing_id,
// 			seller,
// 			property_id,
// 			listing_status,
// 			current_level,
// 			level,
// 			title,
// 			description,
// 			property_type: { type, subtype } = {},
// 			listing_type_id,
// 			unit_details: {
// 				price,
// 				discounted_price,
// 				price_per_sqm,
// 				furnishing,
// 				classification,
// 				no_of_beds,
// 				no_of_bathrooms,
// 				no_of_floors,
// 				parking,
// 				floor_area,
// 				lot_area,
// 			} = {},
// 			location: {
// 				subdivision,
// 				city,
// 				province,
// 				other,
// 				zipcode,
// 				map_location,
// 			} = {},
// 			amenities: {
// 				indoor_features,
// 				outdoor_features,
// 				custom_amenities: { feature_name } = {},
// 				custom_inclusion: { inclusion_name } = {},
// 			} = {},
// 			photos: { photo, upload_date_time } = {},
// 		} = property_fields;

// 		const reqbody = {
// 			payload: {
// 				listing_id,
// 				seller,
// 				property_id,
// 				listing_status,
// 				current_level,
// 				level,
// 				description,
// 				title,
// 				property_type: { type, subtype },
// 				listing_type_id,
// 				unit_details: {
// 					price,
// 					discounted_price,
// 					price_per_sqm,
// 					furnishing,
// 					classification,
// 					no_of_beds,
// 					no_of_bathrooms,
// 					no_of_floors,
// 					parking,
// 					floor_area,
// 					lot_area,
// 				},
// 				location: { subdivision, city, province, other, zipcode, map_location },
// 				amenities: {
// 					indoor_features,
// 					outdoor_features,
// 					custom_amenities: { feature_name },
// 					custom_inclusion: { inclusion_name },
// 				},
// 				photos: {
// 					photo,
// 					upload_date_time,
// 				},
// 			},
// 		};

// 		console.log("Sending payload:", reqbody);

// 		const config = {
// 			headers: {
// 				"Content-Type": "application/json",
// 				"x-api-key": process.env.REACT_APP_API_KEY,
// 			},
// 		};

// 		const response = await MLBROKERAGEAxiosInstance.post(
// 			`/api/seller/add-listing`,
// 			reqbody,
// 			config
// 		);

// 		if (response.status === 200) {
// 			console.log("Listing Data Posted Successfully");
// 		} else {
// 			console.error("Error posting data:", response.statusText);
// 		}
// 		return response.data;
// 	} catch (error) {
// 		console.log("Error:", error.message);
// 	}
// };
const PostSellerListing = async (propertyFields = {}) => {
	try {
		const {
			VendorName,
			PropertyNo,
			SellingType,
			ProjectId,
			ProjectName,
			Location,
			City,
			PropertyType,
			PropertyIdNo,
			Price,
			UnitName,
			SaleType,
			SaleStatus,
			BedRooms,
			BathRooms,
			RecordStatus,
			IsFeatured,
			VideoLink,
			Details,
			ListingOwnerId,
			ListingOwnerName,
			IsModel,
			FloorArea,
			LotArea,
			DiscountedPrice,
			Furnishing,
			Classification,
			PricePerSqm,
			NoOfFloor,
			Country,
			ProvinceState,
			ComRate,
			Parking,
			Zipcode,
			MapLocation,
			AccessType,
			VendorId,
			Source,
			Approver1Status,
			Approver2Status,
			Approver3Status,
		} = propertyFields;

		// const PropertyNo = await GetPropertyNo();
		// const VendorId = await GetVendorId();

		const reqBody = {
			PropertyNo,
			VendorId,
			VendorName,
			SellingType,
			ProjectId,
			ProjectName,
			City,
			Location,
			PropertyType,
			ComRate,
			Price,
			PropertyIdNo,
			UnitName,
			SaleType,
			RecordStatus,
			SaleStatus,
			BedRooms,
			BathRooms,
			IsFeatured,
			VideoLink,
			Details,
			ListingOwnerId,
			ListingOwnerName,
			IsModel,
			FloorArea,
			LotArea,
			DiscountedPrice,
			Furnishing,
			Classification,
			PricePerSqm,
			NoOfFloor,
			Parking,
			Country,
			ProvinceState,
			Zipcode,
			MapLocation,
			AccessType,
			Source,
			Approver1Status,
			Approver2Status,
			Approver3Status,
		};
		console.log("Sending payload:", reqBody);

		const config = {
			headers: {
				"Content-Type": "application/json",
				"x-api-key": process.env.REACT_APP_API_KEY,
			},
		};

		const response = await IGOTSOLUTIONSAxiosInstance.post(
			`/api/addProperty`,
			reqBody,
			config
		);

		console.log("Response received:", response);

		if (response.status === 200 || response.status === 201) {
			console.log("Listing Data Posted Successfully");
			return response.data;
		} else {
			console.error("Error posting data:", response.statusText);
			console.log("Error details:", {
				status: response.status,
				statusText: response.statusText,
				headers: response.headers,
				data: response.data,
			});
		}
		} catch (error) {
			console.error("Error occurred while posting listing:", error);
			console.log("Error details:", {
				message: error.message,
				stack: error.stack,
				response: error.response, })
	}
};

const AddVendor = async (vendorPayload) => {
	try {
		const VendorId = await GetVendorId();

		const reqBody = {
				...vendorPayload,
				VendorId,
				Photo: {},
			
		};

		console.log("Sending vendor details:", reqBody);

		const config = {
			headers: {
				"Content-Type": "application/json",
				"x-api-key": process.env.REACT_APP_API_KEY,
			},
		};

		const response = await IGOTSOLUTIONSAxiosInstance.post(
			`/api/addVendor`,
			reqBody,
			config
		);

		if (response.status === 200 || response.status === 201) {
			console.log("Vendor posted successfully with VendorId:", VendorId);
		} else {
			console.error("Error posting data:", response.statusText);
		}
		return response.data;
	} catch (error) {
		console.error("Error:", error.message);
		console.log("Error details:", {
			message: error.message,
			stack: error.stack,
			response: error.response,
		});
	}
};

const GetVendorId = async () => {
	try {
		const response = await IGOTSOLUTIONSAxiosInstance.get(
			`/api/getControlLastNumber/VendorId`
		);

		if (response.status === 200 || response.status === 201) {
			console.log("Control Last Number retrieved successfully:", response.data);
			return response.data;
		} else {
			console.error(
				"Error retrieving control last number:",
				response.statusText
			);
		}
	} catch (error) {
		console.error("Error getting control last number:", error.message);
		console.log("Error details:", {
				message: error.message,
				stack: error.stack,
				response: error.response, })
	}
};

const savePropertyImages = async (imagePayload) => {
	try {

		

		const config = {
			headers: {
				// "Content-Type": "application/json'",
				"x-api-key": process.env.REACT_APP_API_KEY,
			},
		};

		const res = await IGOTSOLUTIONSAxiosInstance.post(
			`api/savePropertyImages`,
			imagePayload,
			config
		);
		console.log("res:", res);
		if (res.status === 200 || res.status === 201) {
			console.log("Property images saved successfully");
			return res.data;
		} else {
			console.error("Error saving property images:", res.statusText);
			console.log("Error details:", {
				message: res.statusText,
				stack: res.stack,
				response: res.response,
			});
		}
	} catch (error) {
		console.error("Error:", error.message);
		console.log("Error details:", {
			message: error.message,
			stack: error.stack,
			response: error.response,
		});
	}
};

const GetPropertyNo = async () => {
	try {
		const response = await IGOTSOLUTIONSAxiosInstance.get(
			`/api/getControlLastNumber/PropertyNo`
		);

		if (response.status === 200 || response.status === 201) {
			console.log("Property Number retrieved successfully:", response.data);
			return response.data;
		} else {
			console.error("Error retrieving Property Number:", response.statusText);
		}
	} catch (error) {
		console.error("Error getting Property Number:", error.message);
		console.log("Error details:", {
			message: error.message,
			stack: error.stack,
			response: error.response,
		});
	}
};

const AddFeature = async (payload) => {
	try {
		console.log("New feature:", payload);

		const config = {
			headers: {
				"Content-Type": "application/json",
				"x-api-key": process.env.REACT_APP_API_KEY,
			},
		};

		const response = await IGOTSOLUTIONSAxiosInstance.post(
			`/api/addFeature`,
			payload,
			config
		);

		if (response.status === 200) {
			console.log("Feature added successfully:", response);
			return response;
		} else {
			console.error("Error adding feature:", response.statusText);
			console.log(
				"Error details:",
				response.statusText,
				response.stack,
				response.response
			);
		}
	} catch (error) {
		console.error("Error:", error.message);
		console.log("Error details:", {
			message: error.message,
			stack: error.stack,
			response: error.response,
		});
	}
};

const AddAddedFeature = async (payload) => {
	try {
		console.log("With Property Number:", payload);

		const config = {
			headers: {
				"Content-Type": "application/json",
				"x-api-key": process.env.REACT_APP_API_KEY,
			},
		};

		const response = await IGOTSOLUTIONSAxiosInstance.post(
			`/api/addAddedFeature`,
			payload,
			config
		);

		if (response.status === 200 || response.status === 201) {
			console.log("Added feature successfully:", response);
			return response;
		} else {
			console.error("Error adding added feature:", response.statusText);
			console.log(
				"Error details:",
				response.statusText,
				response.stack,
				response.response
			);
		}
	} catch (error) {
		console.error("Error:", error.message);
		console.log("Error details:", {
			message: error.message,
			stack: error.stack,
		});
	}
};


const GetFeature = async () =>{
	try{

		const config = {
			headers: {
				"Content-Type": "application/json",
				"x-api-key": process.env.REACT_APP_API_KEY,
			},
		};
		const response = await IGOTSOLUTIONSAxiosInstance.get(
			`api/getFeatures`,
			config
		);
		const resdata = response.data;

		// console.log(resdata)


		if (response.status === 200 || response.status === 201) {
			console.log("success");
			return resdata;
		} else {
			console.error("Error getting feature:", response);
			console.log(
				"Error details",
				response.message,
				response.stack,
				response.response
			);
		}
		return resdata;
	}
	catch (error){
		console.error("Error:", error.message);
	}

}

const GetVendorByNumber= async (number) =>{
	try{

		console.log("number",number)
		const config = {
			headers: {
				"Content-Type": "application/json",
				"x-api-key": process.env.REACT_APP_API_KEY
			}
		}

		const response = await IGOTSOLUTIONSAxiosInstance.get(
			`api/getVendorByContactNo/${number}`,
			config
		);

		if (response.status === 200 || response.status === 201) {
			console.log("success");
			return response;
		} else {
			console.log("Error:", response.status.text);
			console.log(
				"Error Details:",
				response.message,
				response.stack,
				response.response
			);
		}
return response.data;
	}catch (error){
		console.error("Error:", caches.message);
		console.log("Error Details:", error.message, error.stack, error.response);
		
	}
	return null;
}



// const AddUnitPhoto = async (photoPayload) => {
// 	try {
// 		const reqBody = {
// 			...photoPayload,
// 		};

// 		console.log("photos:", reqBody);
// 		const config = {
// 			headers: {
// 				"Content-Type": "application/json",
// 				"x-api-key": process.env.REACT_APP_API_KEY,
// 			},
// 		};

// 		const response = await IGOTSOLUTIONSAxiosInstance.post(
// 			`/addUnitPhoto`,
// 			reqBody,
// 			config
// 		);

// 		if (response === 200) {
// 			console.log("Unit photo added successfully");
// 			return response.data;
// 		} else {
// 			console.error("Error adding unit photo:", response.statusText);
// 		}

// 		return response;

// 	} catch (error) {
// 		console.error("Error adding unit photo:", error.message);
// 		console.log("Error details:", {
// 			message: error.message,
// 			stack: error.stack,
// 			response: error.response,
// 		});
// 	}
// };

//  const AddProject = async (projectPayload) => {
// 		try {
// 			const reqBody = {
// 				...projectPayload,
// 				VendorId,
// 			};

// 			const VendorId = await GetVendorId();

// 			console.log("addProject:", reqBody);
// 		} catch (error) {
// 			console.error("Error:", error.message);
// 			console.log("Error details:", {
// 				message: error.message,
// 				stack: error.stack,
// 				response: error.response,
// 			});
// 		}
//  };


export {
	PostSellerListing,
	AddVendor,
	GetVendorId,
	savePropertyImages,
	GetPropertyNo,
	AddAddedFeature,
	AddFeature,
	GetFeature,
	GetVendorByNumber,
};
