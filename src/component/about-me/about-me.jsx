import { Box } from '@material-ui/core';
import React from 'react';

export const AboutMe = () => {
  const boxStyle = {
    boxStyle: 'border-box',
    border: '2xp',
    width: 'auto',
    margin: '10vw',
    padding: '20px',
    position: 'absolute',
  };
  return (
    <>
      <Box
        border={1}
        style={boxStyle}
        borderColor="text.primary"
        borderRadius={16}
      >
        <h1>About me</h1>
        <h2>Introduction</h2>
        <p>
          My name is CatWoman and I am one of the most controverial 'hero' that
          you will hear about.
        </p>
      </Box>
    </>
  );
};
