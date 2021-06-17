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
    <React.Fragment>
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
        <HPS.Pop>
          <Typography className={classes.typography}>
            {' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            quod culpa dicta, labore accusamus placeat odio et, officiis
            voluptatem delectus voluptate magni sit sint enim reprehenderit
            praesentium deserunt eaque nam?
          </Typography>
        </HPS.Pop>
      </Popover>
    </React.Fragment>
  );
};
