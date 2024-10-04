import axios from 'axios';
import {loginApiType, refreshApiType} from 'src/types/signin';
import {port} from './client';
import {resetAndNavigate} from 'src/navigation/navigaionutils';
import {mmkyStroage} from 'src/store/mmkv';
import { Alert } from 'react-native';

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
     const {data} = await axios.post(`${port}/auth/signup`, {
       username: username,
       email: email,
       password: password,
       method: 'manual',
       userDeviceToken: mmkyStroage.getItem('mobileToken'),
     });
     return data
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
    Alert.alert('error in refresh Tokenapi', err?.message);
  }
};
