import { AppError } from "@utils/AppError";
import axios from "axios";

const api = axios.create({
    baseURL: "http://192.168.1.102:3333",
});

api.interceptors.response.use(async (config) => {
    return config;
}, (error) => {
    if(error.response && error.response.data){
        return Promise.reject(new AppError(error.response.data.message, error.response.status));
    }else{
        return Promise.reject(error);
    }
});


export { api };