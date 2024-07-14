import { getToken, saveToken } from "@storage/storageAuthToken";
import { AppError } from "@utils/AppError";
import axios, { AxiosError, AxiosInstance } from "axios";

type SignOut = () => void;

type APIInstanceProps = AxiosInstance & {
    registerInterceptTokenManager: (signOut: SignOut)=> () => void;
};

type PromiseType = {
    onSuccess: (token: string) => void;
    onFailed: (error: AxiosError) => void;
};

const api = axios.create({
    baseURL: "http://192.168.1.100:3333",
}) as APIInstanceProps;

let failedQueue : Array<PromiseType> = [];
let isRefreshing = false;

api.registerInterceptTokenManager = signOut => {
    const interceptTokenManager = api.interceptors.response.use(response => response, async (requestError) => {
        
        console.log("ERROR => ",requestError);
        
        if(requestError?.response?.status === 401){
            if(requestError.response.data?.message === "token.expired" || requestError.response.data?.message === "token.invalid"){
                const {refresh_token} = await getToken();

                console.log("REFRESH TOKEN => ",refresh_token);
                
                if(!refresh_token){
                    signOut();
                    return Promise.reject(requestError);
                }

                const originalRequestConfig = requestError.config;

                if(isRefreshing){
                    return new Promise((resolve, reject) => {
                        failedQueue.push({
                            onSuccess: (token) => {
                                originalRequestConfig.headers['Authorization'] = `Bearer ${token}`;

                                resolve(api(originalRequestConfig));
                            },
                            onFailed: (error) => {
                                reject(error);
                            }
                        });
                    });
                }

                isRefreshing = true;

                return new Promise(async(resolve, reject) => {
                    try{

                        const { data } = await api.post('/sessions/refresh-token', {refresh_token});

                        console.log("TOKEN => ",data);

                        if(data.token && data.refresh_token){
                            await saveToken({token: data.token, refresh_token: data.refresh_token});

                            if(originalRequestConfig.data){
                                originalRequestConfig.data = JSON.stringify(originalRequestConfig.data);
                            }

                            originalRequestConfig.headers['Authorization'] = `Bearer ${data.token}`;
                            api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;


                            failedQueue.forEach(promise => promise.onSuccess(data.token));

                            resolve(api(originalRequestConfig));
                        } else {
                            failedQueue.forEach(promise => promise.onFailed(requestError));
                            signOut();
                            reject(requestError);
                        }
                    

                    }catch(error: any){
                        failedQueue.forEach(promise => promise.onFailed(error));
                        signOut();
                        reject(error);
                    }finally{
                        failedQueue = [];
                        isRefreshing = false;
                    }
                });
            }

            signOut();
        }

        if(requestError.response && requestError.response.data){
            return Promise.reject(new AppError(requestError.response.data.message, requestError.response.status));
        } else {
            return Promise.reject(requestError);
        }
    });

    return () => {
        api.interceptors.response.eject(interceptTokenManager);
    }
}

export { api };