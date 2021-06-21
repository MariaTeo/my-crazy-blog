import {
  Grid,
  IconButton,
  FormControlLabel,
  Link,
  Typography,
  Checkbox,
  Button,
} from '@material-ui/core';
import React, { useState } from 'react';
import { Popup } from '../popup/popup';
import * as LF from './login-form.style';
import { Visibility as VisibilityIcon } from '@material-ui/icons';
import { Close as CloseIcon } from '@material-ui/icons';
import { VisibilityOff as VisibilityOffIcon } from '@material-ui/icons/VisibilityOff';


export const LoginForm = ({ open, handleClose }) => {
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const paperStyle = { 
    height: '400px',
    width: '360px',
    padding: '10px',
   };

  const questionsStyle = { margin: '30px 30px' };
  const loginStyle = { 
    width: '300px',
    marginLeft: '30px'
  };

  const buttonX = <CloseIcon />;
  const buttonCloseStyle = {
    margin: '0 0  0 320px',
    padding: '3px 10px',
  };

  const eyeClosed = <VisibilityOffIcon/>
  const eye = <VisibilityIcon />;
  const eyeStyle = {
    display: 'flex',
    alignSelf: 'right',
    justifyContent: 'right',
    marginTop: '-40px',
    marginRight: '5px',
  };

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true );
    console.log(togglePasswordVisibility)
  };

  const rememberStyle = {
    marginTop: '10px',
    marginLeft: '15px',
  };
 
  
  return (
    <Popup open={open}>
      <Grid path="/login-form">
        <LF.StyledPaper elevation={10} style={paperStyle}>
          <IconButton style={buttonCloseStyle} onClick={() => handleClose(!open)}>
            {buttonX}
          </IconButton>
          <Grid align="center">
            <LF.StyledTitle>Log In</LF.StyledTitle>
          </Grid>
          <Grid align="center"> 

          <LF.StyledTextField
            label="Username"
            placeholder="Enter username"
            fullWidth
            required
          />
          <LF.StyledTextField
            label="Password"
            placeholder="Enter password"
            fullWidth
            required
            type={passwordShown ? 'text' : 'password'}
          />
          <i onClick= {togglePasswordVisibility} style={eyeStyle}>
            {eye}
          </i>
          </Grid>
          <FormControlLabel
            control={<Checkbox name="checkedBox" color="primary" />}
            label="Remember me"
            style={rememberStyle}
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={loginStyle}
            fullWidth
          >
            Log in
          </Button>
          <div style={questionsStyle}>
            <Typography>
              <Link href="#">Forgot password?</Link>
            </Typography>
            <Typography>
              {' '}
              No account?
              <Link href="#"> Register</Link>
            </Typography>
          </div>
        </LF.StyledPaper>
      </Grid>
    </Popup>
  );
};
