import axios from "axios";
import { port } from "./client";
import { Alert } from "react-native";
import { refreshTokenapi } from "./loginapi";
import { mmkyStroage } from "src/store/mmkv";

const accessToken = mmkyStroage.getItem('accessToken');

export const appAxios  = axios.create({
    baseURL : port
})

axios.interceptors.request.use(async config => {
    if(accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
})

axios.interceptors.response.use(
    response => response,
    async error => {
        if(error.response && error.response.status === 401) {
            try {
                const accessToken = await refreshTokenapi();
                if (accessToken) {
                  error.config.headers.Authorization = `Bearer ${accessToken}`
                  return axios(error.config)
                }
            } catch (error:any) {
                console.log('error in refresh token axios',error)
            }
        }

       if(error.response && error.response.status != 401) {
          const errorMessage = error.response.data.message || "something went wrong"
        Alert.alert(errorMessage)
       }

       return Promise.resolve(error)
    }
)