import {Card, Stack, Typography} from '@mui/material';
import {Product as IProduct} from './interfaces/product.interface';
import Image from 'next/image';
import {API_URL} from '../common/constants/api';

interface Props {
  product: IProduct;
}
export default function Product({product}: Props) {
  return (
    <Card className='p-4'>
      <Stack gap={3}>
        <Typography variant='h4'>{product.name}</Typography>
        {product.imageExits && (
          <Image
            src={`${API_URL}/products/${product.id}.png`}
            alt='Product image'
            width={0}
            height={0}
            sizes='100vw'
            className='w-full h-[200px] object-cover'
          />
        )}
        <Typography>{product.description}</Typography>
        <Typography>${product.price}</Typography>
      </Stack>
    </Card>
  );
}
