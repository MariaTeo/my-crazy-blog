import { Dialog, Slide } from '@material-ui/core';
import React from 'react'

export const Popup = ({children, open, handleClose
}) => {
  
  const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
  });

  return(
    <Dialog
    open={open}
    TransitionComponent={Transition}
    keepMounted onClose={handleClose}
    aria-labelledby="alert-dialog-slide-title"
    aria-describedby="alert-dialog-slide-description"
  >{children}
    </Dialog>
  )
}
