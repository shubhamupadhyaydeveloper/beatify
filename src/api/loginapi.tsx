import axios from 'axios';
import {loginApiType, refreshApiType} from 'src/types/signin';
import {port} from './client';
import {resetAndNavigate} from 'src/navigation/navigaionutils';
import {mmkyStroage} from 'src/store/mmkv';

export async function loginApi(email: string, password: string) {
  const {
    data: {accessToken, refreshToken, userId},
  } = await axios.post<loginApiType>(`${port}/auth/login`, {
    email: email,
    password: password,
  });

  if (accessToken) {
    mmkyStroage.setItem('accessToken', accessToken);
    mmkyStroage.setItem('refreshToken', refreshToken);
    mmkyStroage.setItem('userId', userId);
    resetAndNavigate('App');
  }

  return accessToken;
}

export const signupApi = async (username:string,email:string,password:string) => {
  try {
     const {data} = await axios.post(`${port}/auth/signup`,{
      username : username,
      email : email,
      password : password,
      method : "manual"
     })
     return data
  } catch (error:any) {
    console.log("signupApi error",error?.message)
  }
}

export const refreshTokenapi = async () => {
  try {
    const refreshToken = mmkyStroage.getItem('refreshToken');
    const {
      data: {refreshToken: newRefreshToken, accessToken},
    } = await axios.post<refreshApiType>(`${port}/auth/refresh`, {
      refreshToken: refreshToken,
    });

    if (refreshToken && accessToken) {
       mmkyStroage.setItem('accessToken', accessToken);
       mmkyStroage.setItem('refreshToken', newRefreshToken);
    }

    return accessToken;
  } catch (err: any) {
    console.log('error in refresh Tokenapi', err?.message);
  }
};
