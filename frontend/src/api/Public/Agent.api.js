'use strict'

import { IGOTSOLUTIONSAxiosInstance } from "../../helper/axios";

const AddAgent = async (reqBody) => {
  try {
		const config = {
			headers: {
				"Content-Type": "application/json",
				"x-api-key": process.env.REACT_APP_API_KEY,
			},
		};
    const response = await IGOTSOLUTIONSAxiosInstance.post(
      `api/addAgentByAgent`,
      reqBody,
			config
    );
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
const GetControlLastNumber = async (idType) => {
    try {
      const response = await IGOTSOLUTIONSAxiosInstance.get(
        `api/getControlLastNumber/${idType}`
      );
      return response;
    } catch (error) {
      throw error;
    }
  };

export { AddAgent, GetControlLastNumber };
