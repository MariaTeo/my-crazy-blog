import { Button, Popover, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import React from 'react';
import * as HPS from './home-popover.style';

const useStyle = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export const HomePopover = () => {
  const classes = useStyle();
  const [anchorE1, setAnchorE1] = React.useState(null);

  const handleClick = (event) => {
    setAnchorE1(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorE1(null);
  };

  const open = Boolean(anchorE1);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div style={{ position: 'absolute' }}>
      <Button
        aria-describedby={id}
        variant="contained"
        color="grey"
        onClick={handleClick}
      >
        Welcome to CatWoman's Blog
      </Button>
      <Popover
        id={id}
        style={{ position: 'absolute', backgroundColor: 'rgba(0,0,0,0.5)' }}
        open={open}
        anchorE1={anchorE1}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Button 
        variant="contained" color="grey" onClick={handleClose}
        >
          x
        </Button>
        <Typography className={classes.typography}>
          {' '}
          <h4>Welcome to my private Blog.</h4>
          <p>Here you will be able to find out more details about me.</p>
          <h5>In order to do so you will need to:</h5>
          <HPS.MainPopover>
            <p>Login or create a new account</p>
            <p>Browse through my profile</p>
          </HPS.MainPopover>
        </Typography>
      </Popover>
    </div>
  );
};
