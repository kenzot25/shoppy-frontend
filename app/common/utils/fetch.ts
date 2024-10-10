import {cookies} from 'next/headers';
import {API_URL} from '../constants/api';
import {getErrorMessage} from './errors';

export const post = async (
  path: string,
  data: FormData | object,
  parseData: boolean = true,
) => {
  const body = data instanceof FormData ? Object.fromEntries(data) : data;
  const cookie = cookies().toString();

  const res = await fetch(`${API_URL}/${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Cookie: cookie,
    },
    body: JSON.stringify(body),
  });
  const parsedRes = await res.json();
  if (!res.ok) {
    return {
      error: getErrorMessage(parsedRes),
    };
  }
  return {error: '', data: parseData ? parsedRes : res};
};

export const get = async <T>(
  path: string,
  tags?: string[],
  params?: URLSearchParams,
) => {
  const cookie = cookies().toString();
  const url = params ? `${API_URL}/${path}?` + params : `${API_URL}/${path}`;
  const res = await fetch(url, {
    headers: {
      Cookie: cookie,
    },
    next: {
      tags,
    },
  });
  return res.json() as T;
};
