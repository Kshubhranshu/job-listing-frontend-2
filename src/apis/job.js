import axios from "axios";
const backendUrl = process.env.REACT_APP_BACKEND_URL;

export const getJobDetailsById = async (jobId) => {
    try {
        const reqUrl = `${backendUrl}/job/details/${jobId}`;
        const response = await axios.get(reqUrl);
        return response.data;
    } catch (error) {
        console.log(error);
        // toast something went wrong please try after sometime
    }
};
