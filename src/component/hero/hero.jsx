import { Typography } from '@material-ui/core';
import React from 'react';
import { Section } from '../section/section';
import { useStyles } from './hero.style';

export const Hero = ({
  title = 'Welcome to my private Blog.',
  subTitle = 'Here you will be able to find out more details about me.',
}) => {
  const classes = useStyles();

  return (
    <Section hero>
      <div className={classes.root}>
        <div>
          <Typography variant='h4'>
            {title}
          </Typography>
          <Typography variant='subtitle1'>
            {subTitle}
          </Typography>
        </div>
      </div>
    </Section>
  );
};
// prop types for title
