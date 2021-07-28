import { Box, Button, Typography, TextField } from '@material-ui/core';
import React, { useState } from 'react';


const boxStyle = {
  boxStyle: 'border-box',
  border: '2xp',
  width: 'auto',
  margin: '10vw',
  padding: '20px',
  position: 'absolute',
};

export const AboutMe = () => {
  
  const [ comment, setComment ] = useState([])
  const [ value, setValue ] = useState('')
  
  const handleOnChange = (event) => {
    setValue(event.target.value)
  }
  
  const onSubmit = () => {
    setComment([
      ...comment, 
      value
    ])
  }

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
        <div>
          <Typography variant="h4">Comments section</Typography>
          <Typography>Leave a comment:</Typography>
          {/* <Formik 
            initialValues={}
          ></Formik> */}
          <TextField
            name="comment"
            type="text"
            label="Type a comment"
            value={value}
            onChange={(event)=>{handleOnChange(event)}}
          />
          <Button 
          type="submit" 
          variant="outlined" 
          onClick={onSubmit}
          color="primary">Add comment</Button>
          <Box>{comment.map(message => (
            <div>{message}</div>
          ))}</Box>
        </div>
      </Box>
    </>
  );
};
