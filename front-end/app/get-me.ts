'use server';

import { get } from './common/utils/fetch';

export default async function getMe() {
  const me = await get('users/me');
  return me.json();
}
