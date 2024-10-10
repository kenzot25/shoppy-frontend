'use client';

import {Button, Link, Stack, TextField} from '@mui/material';
import NextLink from 'next/link';
import {useFormState} from 'react-dom';
import login from './login';

export default function Login() {
  const [state, formAction] = useFormState(login, {
    error: '',
  });
  return (
    <form action={formAction}>
      <Stack spacing={2} className='w-full max-w-xs'>
        <TextField
          label='Email'
          variant='outlined'
          type='email'
          name='email'
          helperText={state.error}
          error={!!state.error}
        />
        <TextField
          label='Password'
          variant='outlined'
          type='password'
          name='password'
          helperText={state.error}
          error={!!state.error}
        />
        <Button variant='contained' type='submit'>
          Login
        </Button>
        <Link
          component={NextLink}
          href='/auth/signup'
          className='self-center !no-underline'>
          Sign up
        </Link>
      </Stack>
    </form>
  );
}
