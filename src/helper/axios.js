import axios from "axios";

const MLBROKERAGEAxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    withCredentials: true
});

const IGOTSOLUTIONSAxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_IGOT_API_URL,
    // withCredentials: true
});

const MLBROKERAGELOGININSTANCE = axios.create({
	baseURL: process.env.REACT_APP_REDIRECT_SYMPH_LOGIN,
});

export {
	MLBROKERAGEAxiosInstance,
	IGOTSOLUTIONSAxiosInstance,
	MLBROKERAGELOGININSTANCE,
};