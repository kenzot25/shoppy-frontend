'use client';

import {Card, CardActionArea, Stack, Typography} from '@mui/material';
import Image from 'next/image';
import {useRouter} from 'next/navigation';
import {Product as IProduct} from './interfaces/product.interface';
import {getProductImage} from './product-image';

interface Props {
  product: IProduct;
}
export default function Product({product}: Props) {
  const router = useRouter();
  return (
    <CardActionArea
      onClick={() => {
        return router.push(`/products/${product.id}`);
      }}>
      <Card className='p-4'>
        <Stack gap={3}>
          <Typography variant='h4'>{product.name}</Typography>
          {product.imageExits && (
            <Image
              src={getProductImage(product.id)}
              alt='Product image'
              width={0}
              height={0}
              sizes='100vw'
              className='w-full h-[200px] object-cover'
            />
          )}
          <Typography>{product.description}</Typography>
          <Typography>${product.price}</Typography>
          <Typography>Sold: {product.sold ? "sold": "not-sold"}</Typography>
        </Stack>
      </Card>
    </CardActionArea>
  );
}
