import React from 'react';
import { Dialog } from '@material-ui/core';

export const Popup = ({ children, open, handleClose }) => {
  return (
    <Dialog
      open={open}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      {children}
    </Dialog>
  );
};
