import {cookies} from 'next/headers';
import {API_URL} from '../constants/api';
import {getErrorMessage} from './errors';

export const post = async (
  path: string,
  formData: FormData,
  parseData: boolean = true,
) => {
  const cookie = cookies().toString();

  const res = await fetch(`${API_URL}/${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Cookie: cookie,
    },
    body: JSON.stringify(Object.fromEntries(formData)),
  });
  const parsedRes = await res.json();
  if (!res.ok) {
    return {
      error: getErrorMessage(parsedRes),
    };
  }
  return {error: '', data: parseData ? parsedRes : res};
};

export const get = async <T>(path: string, tags?: string[]) => {
  const cookie = cookies().toString();
  const res = await fetch(`${API_URL}/${path}`, {
    headers: {
      Cookie: cookie,
    },
    next: {
      tags,
    },
  });
  return res.json() as T;
};
