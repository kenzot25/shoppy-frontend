'use server';

import {revalidateTag} from 'next/cache';
import {post} from '../../common/utils/fetch';
import {cookies} from 'next/headers';
import {API_URL} from '@/app/common/constants/api';

export default async function createProduct(formData: FormData) {
  const res = await post('products', formData);
  const productImage = formData.get('image');
  if (productImage instanceof File && !res.error) {
    await uploadProductImage(res.data.id, productImage);
  }
  revalidateTag('products');
  return res;
}

async function uploadProductImage(productId: number, file: File) {
  const formData = new FormData();
  formData.append('image', file);
  await post(`products/${productId}/image`, formData);
  const cookie = cookies().toString();
  await fetch(`${API_URL}/products/${productId}/image`, {
    method: 'POST',
    headers: {
      Cookie: cookie,
    },
    body: formData,
  });
}
