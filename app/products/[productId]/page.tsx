import {Stack, Typography} from '@mui/material';
import getProduct from './get-product';
import Image from 'next/image';
import {getProductImage} from '../product-image';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Checkout from '@/app/checkout/checkout';

interface Props {
  params: {
    productId: string;
  };
}

export default async function SingleProduct({params: {productId}}: Props) {
  const product = await getProduct(+productId);
  return (
    <Grid container marginBottom={'2rem'} rowGap={3}>
      {product.imageExits && (
        <Grid md={6} xs={12}>
          <Image
            src={getProductImage(product.id)}
            alt=''
            width={0}
            height={0}
            className='w-full md:w-3/4 h-auto'
            sizes='100vw'
          />
        </Grid>
      )}
      <Grid md={6} xs={12}>
        <Stack gap={3}>
          <Typography variant='h2'>{product.name}</Typography>
          <Typography>{product.description}</Typography>
          <Typography variant='h4'>${product.price}</Typography>
          <Checkout productId={+productId} />
        </Stack>
      </Grid>
    </Grid>
  );
}
