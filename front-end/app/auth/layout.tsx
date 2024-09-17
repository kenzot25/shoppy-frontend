import {Box} from '@mui/material';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box className='justify-center h-screen flex items-center'>{children}</Box>
  );
}
