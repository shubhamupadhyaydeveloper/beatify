import axios from 'axios';
import {loginApiType, refreshApiType} from 'src/types/signin';
import {port} from './client';
import useGlobalState from 'src/store/globalState';
import { resetAndNavigate } from 'src/navigation/navigaionutils';

export async function loginApi(email: string, password: string) {
  const {setToken} = useGlobalState();
  const {
    data: {accesstoken, refreshtoken, userId},
  } = await axios.post<loginApiType>(`${port}/auth/login`, {
    email: email,
    password: password,
  });

  if (accesstoken) {
    setToken(accesstoken, refreshtoken, userId);
    resetAndNavigate('App')
  }

  return accesstoken;
}

export async function refreshTokenApi() {
  try {
    const {refreshToken, setToken} = useGlobalState();
  
    const {
      data: {refreshToken: newRefreshToken, accessToken},
    } = await axios.post<refreshApiType>(`${port}/auth/refresh`, {
      refreshToken: refreshToken,
    });
  
    if(refreshToken && accessToken) {
       setToken(accessToken,newRefreshToken)
    }

    return accessToken;
  } catch (err:any) {
     console.log('error in refreshTokenapi',err?.message)
  }
}
