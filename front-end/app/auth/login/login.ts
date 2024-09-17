'use server';

import {FormError} from '@/app/common/interfaces/form-error.interface';
import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';
import {jwtDecode} from 'jwt-decode';
import { post } from '@/app/common/utils/fetch';
import { AUTHENTICATION_COOKIE } from '../auth-cookies';

export default async function login(_prevState: FormError, formData: FormData) {
  const {error, res} = await post('auth/login', formData);
  if (error) {
    return {error};
  }
  res && setAuthCookie(res);
  redirect('/');
}

const setAuthCookie = (res: Response) => {
  const setCookieHeader = res.headers.get('Set-Cookie');
  if (setCookieHeader) {
    const token = setCookieHeader.split(';')[0].split('=')[1];
    cookies().set({
      name: AUTHENTICATION_COOKIE,
      value: token,
      secure: true,
      httpOnly: true,
      expires: new Date(jwtDecode(token).exp! * 1000),
    });
  }
};
