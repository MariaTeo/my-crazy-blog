import { Dialog } from '@material-ui/core';
import React from 'react';

export const Popup = ({ children, open, handleClose }) => {
  // const Transition = React.forwardRef(function Transition(props, ref) {
  //   return <Slide direction="up" ref={ref} {...props} />;
  // });
  


  return (
    <Dialog
      open={open}
      keepMounted
      onClose={() => handleClose(!open)}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      {children}
    </Dialog>
  );
};
