'use client';

import {Button, Link, Stack, TextField} from '@mui/material';
import NextLink from 'next/link';
import {useFormState} from 'react-dom';
import createUser from './create-user';

export default function SignUp() {
  const [state, formAction] = useFormState(createUser, {
    error: '',
  });
  return (
    <form action={formAction}>
      <Stack spacing={2} className='w-full max-w-xs'>
        <TextField
          name='email'
          label='Email'
          variant='outlined'
          type='email'
          helperText={state.error}
          error={!!state.error}
        />
        <TextField
          name='password'
          label='Password'
          variant='outlined'
          type='password'
          helperText={state.error}
          error={!!state.error}
        />
        <Button type='submit' variant='contained'>
          Sign up
        </Button>
        <Link
          component={NextLink}
          href='/auth/login'
          className='self-center !no-underline'>
          Login
        </Link>
      </Stack>
    </form>
  );
}
