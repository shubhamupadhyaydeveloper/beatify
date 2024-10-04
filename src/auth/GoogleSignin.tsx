import {GoogleSignin} from '@react-native-google-signin/google-signin';
import axios from 'axios';
import {port} from 'src/api/client';
import {loginApi} from 'src/api/loginapi';
import { resetAndNavigate } from 'src/navigation/navigaionutils';
import { mmkyStroage } from 'src/store/mmkv';
import { loginApiType } from 'src/types/signin';

export const signInWithGoogle = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    await GoogleSignin.signOut();
    const {data} = await GoogleSignin.signIn();
    const accessToken = await loginApi(data!.user.email, data!.user.id);
    return accessToken;
  } catch (error: any) {
    console.log('error in googlesignin', error.message);
  }
};

export const signUpWithGoogle = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    await GoogleSignin.signOut();
    const {data} = await GoogleSignin.signIn();
    const {
      data: {accessToken, refreshToken, userId},
    } = await axios.post<loginApiType>(`${port}/auth/signup`, {
      username: data!.user.name,
      email: data!.user.email,
      password: data!.user.id,
      method: 'google',
      userDeviceToken: mmkyStroage.getItem("mobileToken"),
    });


    if (accessToken) {
      mmkyStroage.setItem('accessToken', accessToken);
      mmkyStroage.setItem('refreshToken', refreshToken);
      mmkyStroage.setItem('userId', userId);
      resetAndNavigate('App');
    }

    return accessToken

  } catch (error: any) {
    // console.log('error in signup', error.message);
  }
};
