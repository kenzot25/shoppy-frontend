'use client';

import {Box, Button, Modal, Stack, TextField, Typography} from '@mui/material';
import {useState} from 'react';
import {FormResponse} from '../../common/interfaces/form-response.interface';
import createProduct from '../actions/create-product';
import {CloudUpload} from '@mui/icons-material';

interface Props {
  open: boolean;
  handleClose: () => void;
}
export default function CreateProductModal({open, handleClose}: Props) {
  const [res, setRes] = useState<FormResponse>();
  const [fileName, setFileName] = useState('');
  const onClose = () => {
    setRes(undefined);
    handleClose();
    setFileName('');
  };
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}>
        <form
          className='w-full max-w-xs'
          action={async (formData) => {
            const res = await createProduct(formData);
            setRes(res);
            if (!res.error) {
              onClose();
            }
          }}>
          <Stack spacing={2} className='w-full max-w-xs'>
            <TextField
              name='name'
              label='Name'
              variant='outlined'
              required
              helperText={res?.error}
              error={!!res?.error}
            />
            <TextField
              name='description'
              label='Description'
              variant='outlined'
              required
              helperText={res?.error}
              error={!!res?.error}
            />
            <TextField
              name='price'
              label='Price'
              variant='outlined'
              required
              helperText={res?.error}
              error={!!res?.error}
            />
            <Button
              component='label'
              variant='outlined'
              startIcon={<CloudUpload />}>
              Upload file
              <input
                type='file'
                name='image'
                style={{
                  clip: 'rect(0,0,0,0)',
                  clipPath: 'insert(50%)',
                  height: 1,
                  overflow: 'hidden',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  whiteSpace: 'nowrap',
                  width: 1,
                }}
                onChange={(e) => {
                  e.target.files && setFileName(e.target.files[0].name);
                }}
              />
            </Button>
            {fileName && <Typography>{fileName}</Typography>}
            <Button type='submit' variant='contained'>
              Submit
            </Button>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
}
