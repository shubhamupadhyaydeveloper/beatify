import axios from 'axios';
import {loginApiType} from 'src/types/signin';
import {port} from './client';

export async function loginApi(email: string, password: string) {
  const {
    data: {accesstoken, refreshtoken},
  } = await axios.post<loginApiType>(`${port}/auth/login`, {
    email: email,
    password: password,
  });

  return accesstoken;
}
