import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://diagnostic-center-server-azure.vercel.app'
})
const useAxiosSecure = () => {

    return axiosSecure;
};

export default useAxiosSecure;