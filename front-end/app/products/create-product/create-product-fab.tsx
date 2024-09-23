'use client';

import {CreateRounded} from '@mui/icons-material';
import {Fab} from '@mui/material';
import CreateProductModal from './create-product-modal';
import {useState} from 'react';

export default function CreateProductFab() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <CreateProductModal
        open={openModal}
        handleClose={() => {
          setOpenModal(false);
        }}
      />

      <div className='absolute left-10 bottom-10'>
        <Fab
          color='default'
          onClick={() => {
            setOpenModal(true);
          }}>
          <CreateRounded />
        </Fab>
      </div>
    </>
  );
}
