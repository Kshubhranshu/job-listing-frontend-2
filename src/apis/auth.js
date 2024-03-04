import axios from "axios";
const backendUrl = process.env.REACT_APP_BACKEND_URL;

export const loginUser = async (email, password) => {
    try {
        const reqUrl = `${backendUrl}/auth/login`;
        const response = await axios.post(reqUrl, { email, password });
        return response.data;
    } catch (error) {
        console.log(error);
        // toast something went wrong please try after sometime
    }
};

export const registerUser = async ({ email, password, name }) => {
    try {
        const reqUrl = `${backendUrl}/auth/register`;
        const response = await axios.post(reqUrl, { email, password, name });
        return response.data;
    } catch (error) {
        console.log(error);
        // toast something went wrong please try after sometime
    }
};
