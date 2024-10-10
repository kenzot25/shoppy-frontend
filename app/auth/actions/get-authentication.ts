'use server';

import {cookies} from 'next/headers';
import {AUTHENTICATION_COOKIE} from '../auth-cookies';

export default async function getAuthentication() {
  return cookies().get(AUTHENTICATION_COOKIE)?.value;
}
